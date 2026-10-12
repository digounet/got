#!/usr/bin/env python3
# Baixa a imagem principal de cada personagem na Game of Thrones Wiki (Fandom), que usa as
# fotos de divulgacao da HBO. Grava img/<slug>.<ext> e img/creditos.json com a pagina de origem.
# Decisao do Pablo em 2026-10-12: usar imagens de cena mesmo sendo da HBO; o risco e dele.
# Uso: python3 scripts/fotos.py   (a partir da raiz do repo)
import json, os, re, subprocess, time, unicodedata, urllib.parse

UA = "got-infografico/1.0 (https://github.com/digounet/got)"
API = "https://gameofthrones.fandom.com/api.php"

# personagem na pagina -> titulo do artigo na wiki (ingles)
PAGINAS = {
    "Rhaenyra Targaryen": "Rhaenyra Targaryen",
    "Daemon Targaryen": "Daemon Targaryen",
    "Viserys I Targaryen": "Viserys I Targaryen",
    "Jacaerys Velaryon": "Jacaerys Velaryon",
    "Lucerys Velaryon": "Lucerys Velaryon",
    "Baela Targaryen": "Baela Targaryen",
    "Rhaena Targaryen": "Rhaena Targaryen",
    "Rhaenys Targaryen": "Rhaenys Targaryen",
    "Corlys Velaryon": "Corlys Velaryon",
    "Alyn de Hull": "Alyn of Hull",
    "Addam de Hull": "Addam of Hull",
    "Mysaria": "Mysaria",
    "Hugh Hammer": "Hugh",
    "Ulf White": "Ulf",
    "Oscar Tully": "Oscar Tully",
    "Roderick Dustin": "Roderick Dustin",
    "Torrhen Manderly": "Torrhen Manderly",
    "Alysanne Blackwood": "Alysanne Blackwood",
    "Jeyne Arryn": "Jeyne Arryn",
    "Cregan Stark": "Cregan Stark",
    "Luthor Largent": "Luthor Largent",
    "Alicent Hightower": "Alicent Hightower",
    "Otto Hightower": "Otto Hightower",
    "Aegon II Targaryen": "Aegon II Targaryen",
    "Aemond Targaryen": "Aemond Targaryen",
    "Helaena Targaryen": "Helaena Targaryen",
    "Daeron Targaryen": "Daeron Targaryen",
    "Ormund Hightower": "Ormund Hightower",
    "Gwayne Hightower": "Gwayne Hightower",
    "Criston Cole": "Criston Cole",
    "Larys Strong": "Larys Strong",
    "Alys Rivers": "Alys Rivers",
    "Jason Lannister": "Jason Lannister",
    "Tyland Lannister": "Tyland Lannister",
    "Jon Roxton": "Jon Roxton",
    "Sharako Lohar": "Sharako Lohar",
    "Simon Strong": "Simon Strong",
    "Jasper Wylde": "Jasper Wylde",
}

def slug(t):
    t = unicodedata.normalize("NFD", t)
    t = "".join(c for c in t if unicodedata.category(c) != "Mn").lower()
    return re.sub(r"[^a-z0-9]+", "-", t).strip("-")

# O Cloudflare da Fandom recusa o urllib do Python (403) e bloqueia rajadas; o curl com pausa
# entre pedidos passa. A CDN de imagens so entrega com Referer da propria wiki (protecao contra
# hotlink), por isso o download manda o Referer. Num 403, espera 30 s e tenta uma unica vez mais.
PAUSA = 1.5
REFERER = "https://gameofthrones.fandom.com/"
def curl(url, destino=None, tentativa=1):
    time.sleep(PAUSA)
    cmd = ["curl", "-sS", "-f", "-L", "--max-time", "60", "-A", UA, "-e", REFERER, url] + (["-o", destino] if destino else [])
    r = subprocess.run(cmd, capture_output=True, text=destino is None)
    if r.returncode != 0:
        erro = r.stderr if isinstance(r.stderr, str) else r.stderr.decode()
        if "403" in erro and tentativa == 1:
            print("  403: esperando 30 s antes de tentar de novo"); time.sleep(30)
            return curl(url, destino, tentativa=2)
        raise RuntimeError(f"curl falhou ({r.returncode}): {erro.strip()}")
    return r.stdout

def api(params):
    params = dict(params, format="json", formatversion=2)
    return json.loads(curl(API + "?" + urllib.parse.urlencode(params)))

def baixar(url, destino):
    curl(url, destino)

# A CDN decide o formato pelo Accept e costuma mandar WebP mesmo para URL .png: usa a extensao real
def extensao_real(caminho):
    with open(caminho, "rb") as f: cab = f.read(12)
    if cab[:4] == b"RIFF" and cab[8:12] == b"WEBP": return ".webp"
    if cab[:4] == b"\x89PNG": return ".png"
    if cab[:2] == b"\xff\xd8": return ".jpg"
    return ".bin"

if __name__ == "__main__":
    creditos = {}
    for personagem, titulo in PAGINAS.items():
        chave = slug(personagem)
        try:
            d = api({"action": "query", "titles": titulo, "redirects": 1, "prop": "pageimages|info",
                     "piprop": "thumbnail|name|original", "pithumbsize": 640, "inprop": "url"})
            pg = d["query"]["pages"][0]
            if pg.get("missing") or "thumbnail" not in pg:
                print(f"sem imagem: {personagem} ({titulo})"); continue
            url = pg["thumbnail"]["source"]
            temp = f"img/{chave}.tmp"
            baixar(url, temp)
            ext = extensao_real(temp)
            if ext == ".bin":
                os.remove(temp); print(f"nao veio imagem: {personagem}"); continue
            destino = f"img/{chave}{ext}"
            os.replace(temp, destino)
            creditos[chave] = {"personagem": personagem, "arquivo": destino, "pagina": pg.get("title", titulo),
                               "fonte": pg.get("fullurl", ""), "imagem": pg.get("pageimage", "")}
            print(f"ok: {personagem} <- {pg.get('title')} / {pg.get('pageimage')}")
        except Exception as e:
            print(f"erro: {personagem}: {e}")
    json.dump(creditos, open("img/creditos.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"\n{len(creditos)} imagens de {len(PAGINAS)} personagens")
