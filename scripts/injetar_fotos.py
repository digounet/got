#!/usr/bin/env python3
# Injeta no index.html o mapa de fotos (slug -> arquivo) e a secao de creditos, a partir de
# img/creditos.json. Reexecutar depois de rodar scripts/fotos.py.
import json, html
cred = json.load(open("img/creditos.json", encoding="utf-8"))
s = open("index.html", encoding="utf-8").read()

mapa = {k: {"arquivo": v["arquivo"]} for k, v in sorted(cred.items())}
bloco_js = "// fotos:inicio\nconst fotos = " + json.dumps(mapa, ensure_ascii=False) + ";\n// fotos:fim"
a, b = s.index("// fotos:inicio"), s.index("// fotos:fim") + len("// fotos:fim")
s = s[:a] + bloco_js + s[b:]

def li(v):
    return f'<li><b>{html.escape(v["personagem"])}</b>: <a href="{html.escape(v["fonte"])}">{html.escape(v["pagina"])}</a> ({html.escape(v["imagem"])})</li>'
itens = "\n    ".join(li(v) for _, v in sorted(cred.items(), key=lambda kv: kv[1]["personagem"]))
bloco_html = "<!-- creditos:inicio -->\n  <ul class=\"creditos\">\n    " + itens + "\n  </ul>\n  <!-- creditos:fim -->"
a, b = s.index("<!-- creditos:inicio -->"), s.index("<!-- creditos:fim -->") + len("<!-- creditos:fim -->")
s = s[:a] + bloco_html + s[b:]
open("index.html", "w", encoding="utf-8").write(s)
print(f"injetadas {len(cred)} fotos e creditos")
