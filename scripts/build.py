#!/usr/bin/env python3
# Monta o site a partir de src/ e deixa tudo pronto para o GitHub Pages e para o Google:
#  1. src/base.html + src/paginas/<nome>.html -> <nome>.html na raiz (titulo, descricao, canonical, JSON-LD);
#  2. pre-renderiza as listas que o JS monta (marcadores <!-- pre:X --> e sentinela <i data-fim="X">),
#     abrindo cada pagina no Chrome headless, para o Google indexar sem JavaScript;
#  3. gera img/og.png, img/icone-180.png e img/antes-da-t4.png;
#  4. escreve sitemap.xml com todas as paginas e a data de hoje.
# Uso: python3 scripts/build.py [--sem-imagens]   (a partir de qualquer pasta; precisa do Google Chrome)
import datetime, html, json, os, re, subprocess, sys

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
BASE = ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run", "--virtual-time-budget=8000"]
URL = "https://digounet.github.io/got/"
HOJE = datetime.date.today().isoformat()

def chrome(args, timeout=180):
    r = subprocess.run([CHROME] + BASE + args, capture_output=True, text=True, timeout=timeout)
    if r.returncode != 0:
        raise SystemExit("chrome falhou: " + r.stderr[-800:])
    return r.stdout

def montar():
    base = open(os.path.join(RAIZ, "src/base.html"), encoding="utf-8").read()
    paginas = []
    for nome in sorted(os.listdir(os.path.join(RAIZ, "src/paginas"))):
        if not nome.endswith(".html"): continue
        frag = open(os.path.join(RAIZ, "src/paginas", nome), encoding="utf-8").read()
        m = re.match(r"\s*<!--meta\s*(\{.*?\})\s*-->\s*", frag, re.S)
        if not m: raise SystemExit(f"{nome}: falta o comentario <!--meta {{...}} -->")
        meta = json.loads(m.group(1)); conteudo = frag[m.end():]
        arquivo = "" if nome == "index.html" else nome
        scripts = f'<script src="js/{meta["script"]}"></script>' if meta.get("script") else ""
        pagina = base
        for k, v in {"titulo": html.escape(meta["titulo"], quote=True), "og": html.escape(meta["og"], quote=True), "descricao": html.escape(meta["descricao"], quote=True),
                     "arquivo": arquivo, "pagina": nome[:-5], "data": HOJE, "scripts": scripts, "conteudo": conteudo}.items():
            pagina = pagina.replace("{{" + k + "}}", v)
        open(os.path.join(RAIZ, nome), "w", encoding="utf-8").write(pagina)
        paginas.append(nome)
    print("montadas:", ", ".join(paginas))
    return paginas

def prerender(nome):
    caminho = os.path.join(RAIZ, nome)
    s = open(caminho, encoding="utf-8").read()
    chaves = re.findall(r"<!-- pre:([a-z-]+) -->", s)
    if not chaves: return
    dom = chrome(["--dump-dom", "file://" + caminho])
    for chave in chaves:
        # abertura do container e sentinela logo depois dele
        m = re.search(r'<(\w+)[^>]*\bid="lista-' + re.escape(chave) + r'"[^>]*>', dom)
        sent = dom.find(f'data-fim="{chave}"')
        if not m or sent < 0: raise SystemExit(f"{nome}: nao achei lista-{chave} no DOM")
        tag = m.group(1); ini = m.end(); fim = dom.rindex(f"</{tag}>", ini, sent)
        conteudo = dom[ini:fim].strip()
        a, b = s.index(f"<!-- pre:{chave} -->") + len(f"<!-- pre:{chave} -->"), s.index(f"<!-- /pre:{chave} -->")
        s = s[:a] + "\n" + conteudo + "\n" + s[b:]
        print(f"  {nome} · {chave}: {len(conteudo)} caracteres")
    open(caminho, "w", encoding="utf-8").write(s)

def imagens():
    chrome(["--window-size=1200,630", "--screenshot=" + os.path.join(RAIZ, "img/og.png"), "file://" + os.path.join(RAIZ, "scripts/og.html")])
    chrome(["--window-size=180,180", "--screenshot=" + os.path.join(RAIZ, "img/icone-180.png"), "file://" + os.path.join(RAIZ, "scripts/icone.html")])
    chrome(["--window-size=1200,1500", "--screenshot=" + os.path.join(RAIZ, "img/antes-da-t4.png"), "file://" + os.path.join(RAIZ, "scripts/resumo.html")])
    print("img/og.png, img/icone-180.png e img/antes-da-t4.png gerados")

def sitemap(paginas):
    urls = "".join(f"  <url><loc>{URL}{'' if p == 'index.html' else p}</loc><lastmod>{HOJE}</lastmod>{'<image:image><image:loc>' + URL + 'img/og.png</image:loc></image:image>' if p == 'index.html' else ''}</url>\n" for p in paginas)
    open(os.path.join(RAIZ, "sitemap.xml"), "w", encoding="utf-8").write(f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n{urls}</urlset>\n')
    print("sitemap.xml com", len(paginas), "paginas")

if __name__ == "__main__":
    os.chdir(RAIZ)
    if not os.path.exists(CHROME): raise SystemExit("Google Chrome nao encontrado em " + CHROME)
    paginas = montar()
    if "--sem-imagens" not in sys.argv: imagens()
    for p in paginas: prerender(p)
    sitemap(paginas)
