#!/usr/bin/env python3
# Passo de build para o Google ver a pagina pronta sem depender do JavaScript:
#  1. pre-renderiza as listas de casas, personagens e dragoes no proprio index.html (Chrome headless);
#  2. gera img/og.png (1200x630, compartilhamento) e img/icone-180.png (apple-touch-icon);
#  3. atualiza dateModified no JSON-LD e lastmod no sitemap.xml para hoje.
# Uso: python3 scripts/build.py   (a partir da raiz do repo; precisa do Google Chrome instalado)
import datetime, os, re, subprocess, sys

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
INDEX = os.path.join(RAIZ, "index.html")
BASE = ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run", "--virtual-time-budget=6000"]

def chrome(args, timeout=120):
    r = subprocess.run([CHROME] + BASE + args, capture_output=True, text=True, timeout=timeout)
    if r.returncode != 0:
        raise SystemExit("chrome falhou: " + r.stderr[-800:])
    return r.stdout

def inner(dom, abertura, proxima_secao):
    # Os cartoes tem <section> por dentro, entao o fim e ancorado na abertura da secao seguinte:
    # a lista e o ultimo filho da secao, logo o ultimo </div> antes da proxima secao fecha a lista.
    i = dom.index(abertura) + len(abertura)
    j = dom.index(proxima_secao, i)
    k = dom.rindex("</div>", i, j)
    return dom[i:k].strip()

def prerender():
    dom = chrome(["--dump-dom", "file://" + INDEX])
    s = open(INDEX, encoding="utf-8").read()
    for chave, abertura, proxima in [("casas", '<div class="casas" id="lista-casas">', '<section class="secao" id="personagens">'),
                                     ("personagens", '<div class="personagens" id="lista-personagens">', '<section class="secao" id="dragoes">'),
                                     ("dragoes", '<div class="dragoes" id="lista-dragoes">', '<section class="secao" id="lugares">')]:
        conteudo = inner(dom, abertura, proxima)
        ini, fim = f"<!-- pre:{chave} -->", f"<!-- /pre:{chave} -->"
        a, b = s.index(ini) + len(ini), s.index(fim)
        s = s[:a] + "\n" + conteudo + "\n" + s[b:]
        print(f"pre-render {chave}: {len(conteudo)} caracteres")
    open(INDEX, "w", encoding="utf-8").write(s)

def imagens():
    chrome(["--window-size=1200,630", "--screenshot=" + os.path.join(RAIZ, "img/og.png"), "file://" + os.path.join(RAIZ, "scripts/og.html")])
    chrome(["--window-size=180,180", "--screenshot=" + os.path.join(RAIZ, "img/icone-180.png"), "file://" + os.path.join(RAIZ, "scripts/icone.html")])
    print("img/og.png e img/icone-180.png gerados")

def datas():
    hoje = datetime.date.today().isoformat()
    s = open(INDEX, encoding="utf-8").read()
    s = re.sub(r'"dateModified": "\d{4}-\d{2}-\d{2}"', f'"dateModified": "{hoje}"', s)
    open(INDEX, "w", encoding="utf-8").write(s)
    sitemap = f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://digounet.github.io/got/</loc>
    <lastmod>{hoje}</lastmod>
    <image:image><image:loc>https://digounet.github.io/got/img/og.png</image:loc></image:image>
  </url>
</urlset>
'''
    open(os.path.join(RAIZ, "sitemap.xml"), "w", encoding="utf-8").write(sitemap)
    print("dateModified e sitemap.xml em", hoje)

if __name__ == "__main__":
    os.chdir(RAIZ)
    if not os.path.exists(CHROME):
        raise SystemExit("Google Chrome nao encontrado em " + CHROME)
    if "--sem-imagens" not in sys.argv:
        imagens()
    prerender()
    datas()
