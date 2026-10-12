#!/usr/bin/env python3
# Injeta no index.html o mapa de fotos (slug -> ator/arquivo) e a secao de creditos,
# a partir de img/creditos.json. Reexecutar depois de rodar fotos.py / fotos_commons.py.
import json, html
cred = json.load(open("img/creditos.json", encoding="utf-8"))
s = open("index.html", encoding="utf-8").read()

mapa = {k: {"ator": v["ator"], "arquivo": v["arquivo"]} for k, v in sorted(cred.items())}
bloco_js = "// fotos:inicio\nconst fotos = " + json.dumps(mapa, ensure_ascii=False) + ";\n// fotos:fim"
a, b = s.index("// fotos:inicio"), s.index("// fotos:fim") + len("// fotos:fim")
s = s[:a] + bloco_js + s[b:]

def li(v):
    autor = html.escape(v["autor"] or "autor não informado")
    lic = html.escape(v["licenca"])
    lic_html = f'<a href="{html.escape(v["licenca_url"])}" rel="license">{lic}</a>' if v["licenca_url"] else lic
    return f'<li><b>{html.escape(v["ator"])}</b> ({html.escape(v["personagem"])}): foto de {autor}, {lic_html}, via <a href="{html.escape(v["fonte"])}">Wikimedia Commons</a>.</li>'
itens = "\n    ".join(li(v) for _, v in sorted(cred.items(), key=lambda kv: kv[1]["ator"]))
bloco_html = "<!-- creditos:inicio -->\n  <ul class=\"creditos\">\n    " + itens + "\n  </ul>\n  <!-- creditos:fim -->"
a, b = s.index("<!-- creditos:inicio -->"), s.index("<!-- creditos:fim -->") + len("<!-- creditos:fim -->")
s = s[:a] + bloco_html + s[b:]
open("index.html", "w", encoding="utf-8").write(s)
print(f"injetadas {len(cred)} fotos e creditos")
