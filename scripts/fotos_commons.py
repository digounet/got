#!/usr/bin/env python3
# Segunda passada: para personagens sem foto, busca direto no Wikimedia Commons e so aceita
# arquivo cujo nome contenha o nome completo do ator. Atualiza img/creditos.json.
import json, re, sys, unicodedata, urllib.parse, urllib.request, html
sys.path.insert(0, "scripts")
from fotos import ATORES, slug, sem_tags, baixar, UA

COMMONS = "https://commons.wikimedia.org/w/api.php"
def api(params):
    params = dict(params, format="json", formatversion=2)
    req = urllib.request.Request(COMMONS + "?" + urllib.parse.urlencode(params), headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)

# Atores com homonimos famosos no Commons: a busca por nome nao e confiavel, pular
PULAR = {"Tom Taylor", "Paul Kennedy", "Tom Bennett", "Tommy Flanagan"}
# Homonimos que a busca por nome devolve e nao sao os atores
FALSOS = {"File:2017 Tom Bennett.jpg", "File:Tommy Flanagan.jpg", "File:Tom Taylor by Lock and Whitfield.jpg", "File:Profpaulkennedy.jpg"}
creditos = json.load(open("img/creditos.json", encoding="utf-8"))
for personagem, titulo in ATORES.items():
    chave = slug(personagem)
    if chave in creditos: continue
    if ator in PULAR:
        print(f"homonimo famoso, pulando busca: {personagem} ({ator})"); continue
    ator = re.sub(r" \(.*\)$", "", titulo)
    partes = [p for p in re.split(r"[\s'’]+", ator.lower()) if len(p) > 2]
    try:
        d = api({"action": "query", "list": "search", "srnamespace": 6, "srlimit": 15,
                 "srsearch": f'"{ator}" filetype:bitmap'})
        escolhido = None
        for r in d["query"]["search"]:
            nome = r["title"].lower()
            if all(p in nome for p in partes) and not re.search(r"signature|logo|poster|cover", nome) and r["title"] not in FALSOS:
                escolhido = r["title"]; break
        if not escolhido:
            print(f"nada no Commons: {personagem} ({ator})"); continue
        info = api({"action": "query", "titles": escolhido, "prop": "imageinfo", "iiprop": "url|extmetadata",
                    "iiurlwidth": 200, "iiextmetadatafilter": "LicenseShortName|Artist|LicenseUrl"})
        ii = info["query"]["pages"][0]["imageinfo"][0]
        meta = ii.get("extmetadata", {})
        licenca = meta.get("LicenseShortName", {}).get("value", "")
        if not re.search(r"CC|Public domain|CC0", licenca, re.I):
            print(f"licenca nao livre ({licenca}): {personagem}"); continue
        url = ii.get("thumburl") or ii["url"]
        ext = ".png" if url.lower().endswith(".png") else ".jpg"
        destino = f"img/{chave}{ext}"
        baixar(url, destino)
        creditos[chave] = {"personagem": personagem, "ator": ator, "arquivo": destino,
                           "autor": sem_tags(meta.get("Artist", {}).get("value", "")), "licenca": licenca,
                           "licenca_url": meta.get("LicenseUrl", {}).get("value", ""), "fonte": ii.get("descriptionurl", "")}
        print(f"ok: {personagem} <- {escolhido} [{licenca}]")
    except Exception as e:
        print(f"erro: {personagem}: {e}")
json.dump(creditos, open("img/creditos.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(f"\n{len(creditos)} fotos de {len(ATORES)} personagens")
