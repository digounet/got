#!/usr/bin/env python3
# Regrava em js/dados.js o mapa `fotos` (slug -> arquivo) e a lista `creditos`, a partir de
# img/creditos.json. Reexecutar depois de scripts/fotos.py; depois, scripts/build.py.
import json
cred = json.load(open("img/creditos.json", encoding="utf-8"))
s = open("js/dados.js", encoding="utf-8").read()
mapa = {k: {"arquivo": v["arquivo"]} for k, v in sorted(cred.items())}
a, b = s.index("// fotos:inicio"), s.index("// fotos:fim") + len("// fotos:fim")
s = s[:a] + "// fotos:inicio\nconst fotos = " + json.dumps(mapa, ensure_ascii=False) + ";\n// fotos:fim" + s[b:]
lista = [{"personagem": v["personagem"], "pagina": v["pagina"], "fonte": v["fonte"], "imagem": v["imagem"]} for _, v in sorted(cred.items(), key=lambda kv: kv[1]["personagem"])]
a, b = s.index("// creditos:inicio"), s.index("// creditos:fim") + len("// creditos:fim")
s = s[:a] + "// creditos:inicio\nconst creditos = " + json.dumps(lista, ensure_ascii=False) + ";\n// creditos:fim" + s[b:]
open("js/dados.js", "w", encoding="utf-8").write(s)
print(f"injetadas {len(cred)} fotos e creditos em js/dados.js")
