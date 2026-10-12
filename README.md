# Da Dança ao Trono

Guia de *A Casa do Dragão* (House of the Dragon) e suas ligacoes com *Game of Thrones*:
casas, personagens, dragoes, mapa das batalhas, aliancas por temporada, linhagem ate Daenerys,
lugares e objetos compartilhados, livro x serie, resumo por temporada e um quiz.

No ar em https://digounet.github.io/got/

## Como e feito

Site estatico em varias paginas, sem framework. `src/base.html` e o template (cabecalho com menu,
busca global e controle "vi ate"); `src/paginas/*.html` sao os conteudos de cada pagina, com um
comentario `<!--meta {...}-->` no topo (titulo, descricao, script). `python3 scripts/build.py`
monta as paginas na raiz, pre-renderiza as listas que o JavaScript gera (para buscadores), gera as
imagens de compartilhamento e o `sitemap.xml`. Precisa do Google Chrome instalado.

- `js/dados.js`: todos os dados (casas, personagens, mortes e batalhas, dragoes, lugares, linhagem, arvore, mapa, aliancas, livro x serie, resumos, quiz).
- `js/comum.js`: utilidades, controle de episodio (modo sem spoiler, salvo no navegador, `?ep=T2E4` na URL), busca global, popups.
- `js/pagina-*.js`: um script por pagina.
- `css/estilo.css`: estilos.
- `img/`: fotos de divulgacao da HBO via Game of Thrones Wiki (`scripts/fotos.py` + `scripts/injetar_fotos.py`), imagens de compartilhamento.

Fluxo: editar `src/` ou `js/dados.js`, rodar `python3 scripts/build.py`, commit e push.

Fontes: as duas series da HBO e *Fogo & Sangue*, de George R. R. Martin. Projeto de fa, sem fins
comerciais; direitos das imagens: HBO/Warner Bros. Discovery.
