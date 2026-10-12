# got — infografico "Da Dança ao Trono"

Pagina estatica unica (`index.html`) publicada no GitHub Pages em https://digounet.github.io/got/ a partir da branch `main`, raiz do repo.

- Depois de mudar conteudo, rodar `python3 scripts/build.py` (precisa do Google Chrome): pre-renderiza as listas de casas, personagens e dragoes dentro do `index.html` (entre os marcadores `<!-- pre:... -->`, para o Google indexar sem JavaScript), gera `img/og.png` e `img/icone-180.png` a partir de `scripts/og.html` e `scripts/icone.html`, e atualiza `dateModified` e o `sitemap.xml`. O JS continua renderizando por cima na carga; o build e idempotente. Depois, commit e push publicam.
- SEO: titulo e descricao com as palavras de busca, canonical, Open Graph e Twitter Card, JSON-LD (WebPage), favicon SVG, sumario com ancoras. Sitemap em `sitemap.xml`; `robots.txt` nao vale em subpasta do github.io.
- Dados: arrays `casas`, `personagens` e `dragoes` no `<script>` da pagina. Secoes estaticas (linhagem, lugares, casas menores) sao HTML direto.
- Conteudo cobre ate o fim da 3a temporada (agosto de 2026). Ao sair a 4a, atualizar os tres arrays e a linha do tempo.
- O topo tem um canvas de particulas (brasas sobem, gelo desce); respeita prefers-reduced-motion.
- Busca ignora acentos; sugestoes ficam no array `sugestoes`.
- Texto da pagina em portugues com acento; codigo e comentarios sem acento.
- Nomes de lugares seguem a traducao brasileira quando ela e conhecida (Porto Real, Correrrio, Ninho da Aguia); senao, o nome em ingles.
- Fotos: `img/` tem a imagem principal de cada personagem na Game of Thrones Wiki (Fandom), em WebP 640 px, e `img/creditos.json`. Fluxo: `python3 scripts/fotos.py` (API da wiki; pausa entre pedidos e Referer da wiki, senao o Cloudflare e a CDN devolvem 403) e `python3 scripts/injetar_fotos.py` (regrava o mapa `fotos` e a secao de creditos no `index.html`). Decisao do Pablo em 2026-10-12: usar imagens de cena da HBO, assumindo o risco; antes eram retratos dos atores do Commons.
- A miniatura abre previa no hover e lupa em tela cheia no clique (`ampliacao()` no script).
