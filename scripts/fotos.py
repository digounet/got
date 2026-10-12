#!/usr/bin/env python3
# Baixa miniaturas dos atores a partir da Wikipedia (so imagens hospedadas no Commons,
# que tem licenca livre) e grava img/<slug>.<ext> + img/creditos.json com autor e licenca.
# Uso: python3 scripts/fotos.py   (roda a partir da raiz do repo)
import json, re, sys, unicodedata, urllib.parse, urllib.request, html

UA = "got-infografico/1.0 (https://github.com/digounet/got)"
API = "https://en.wikipedia.org/w/api.php"

# personagem na pagina -> titulo do artigo do ator na Wikipedia em ingles
ATORES = {
    "Rhaenyra Targaryen": "Emma D'Arcy",
    "Daemon Targaryen": "Matt Smith",
    "Viserys I Targaryen": "Paddy Considine",
    "Jacaerys Velaryon": "Harry Collett",
    "Lucerys Velaryon": "Elliot Grihault",
    "Baela Targaryen": "Bethany Antonia",
    "Rhaena Targaryen": "Phoebe Campbell (actress)",
    "Rhaenys Targaryen": "Eve Best",
    "Corlys Velaryon": "Steve Toussaint",
    "Alyn de Hull": "Abubakar Salim",
    "Addam de Hull": "Clinton Liberty",
    "Mysaria": "Sonoya Mizuno",
    "Hugh Hammer": "Kieran Bew",
    "Ulf White": "Tom Bennett (actor)",
    "Oscar Tully": "Archie Barnes",
    "Roderick Dustin": "Tommy Flanagan",
    "Torrhen Manderly": "Dan Fogler",
    "Alysanne Blackwood": "Annie Shapero",
    "Jeyne Arryn": "Amanda Collin",
    "Cregan Stark": "Tom Taylor (actor)",
    "Luthor Largent": "Tom Cullen",
    "Alicent Hightower": "Olivia Cooke",
    "Otto Hightower": "Rhys Ifans",
    "Aegon II Targaryen": "Tom Glynn-Carney",
    "Aemond Targaryen": "Ewan Mitchell",
    "Helaena Targaryen": "Phia Saban",
    "Daeron Targaryen": "Benjamin Evan Ainsworth",
    "Ormund Hightower": "James Norton (actor)",
    "Gwayne Hightower": "Freddie Fox (actor)",
    "Criston Cole": "Fabien Frankel",
    "Larys Strong": "Matthew Needham",
    "Alys Rivers": "Gayle Rankin",
    "Jason Lannister": "Jefferson Hall",
    "Tyland Lannister": "Jefferson Hall",
    "Jon Roxton": "Joplin Sibtain",
    "Sharako Lohar": "Abigail Thorn",
    "Simon Strong": "Simon Russell Beale",
    "Jasper Wylde": "Paul Kennedy (actor)",
}

def slug(t):
    t = unicodedata.normalize("NFD", t)
    t = "".join(c for c in t if unicodedata.category(c) != "Mn").lower()
    return re.sub(r"[^a-z0-9]+", "-", t).strip("-")

def api(params):
    params = dict(params, format="json", formatversion=2)
    req = urllib.request.Request(API + "?" + urllib.parse.urlencode(params), headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)

def baixar(url, destino):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as r, open(destino, "wb") as f:
        f.write(r.read())

def sem_tags(t):
    return html.unescape(re.sub(r"<[^>]+>", "", t or "")).strip()

if __name__ == "__main__":
    creditos = {}
    for personagem, titulo in ATORES.items():
        chave = slug(personagem)
        try:
            d = api({"action": "query", "titles": titulo, "redirects": 1, "prop": "pageimages",
                     "piprop": "thumbnail|name", "pithumbsize": 200})
            pagina = d["query"]["pages"][0]
            nome_ator = pagina.get("title", titulo)
            if "thumbnail" not in pagina or "pageimage" not in pagina:
                print(f"sem foto: {personagem} ({titulo})"); continue
            arquivo = "File:" + pagina["pageimage"]
            info = api({"action": "query", "titles": arquivo, "prop": "imageinfo", "iiprop": "url|extmetadata",
                        "iiextmetadatafilter": "LicenseShortName|Artist|LicenseUrl|Credit"})
            pi = info["query"]["pages"][0]
            if pi.get("imagerepository") != "shared":
                print(f"imagem local (provavelmente nao livre), pulando: {personagem}"); continue
            meta = pi["imageinfo"][0].get("extmetadata", {})
            licenca = meta.get("LicenseShortName", {}).get("value", "")
            if not re.search(r"CC|Public domain|CC0", licenca, re.I):
                print(f"licenca nao livre ({licenca}), pulando: {personagem}"); continue
            url_thumb = pagina["thumbnail"]["source"]
            ext = ".png" if url_thumb.lower().endswith(".png") else ".jpg"
            destino = f"img/{chave}{ext}"
            baixar(url_thumb, destino)
            creditos[chave] = {
                "personagem": personagem,
                "ator": re.sub(r" \(.*\)$", "", nome_ator),
                "arquivo": destino,
                "autor": sem_tags(meta.get("Artist", {}).get("value", "")),
                "licenca": licenca,
                "licenca_url": meta.get("LicenseUrl", {}).get("value", ""),
                "fonte": pi["imageinfo"][0].get("descriptionurl", ""),
            }
            print(f"ok: {personagem} <- {nome_ator} [{licenca}]")
        except Exception as e:
            print(f"erro: {personagem}: {e}")

    json.dump(creditos, open("img/creditos.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"\n{len(creditos)} fotos de {len(ATORES)} personagens")
