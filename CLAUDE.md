# got — "Da Dança ao Trono"

Site estatico em varias paginas, publicado no GitHub Pages em https://digounet.github.io/got/ (branch `main`, raiz).

## Estrutura

- `src/base.html`: template de todas as paginas (head com SEO, cabecalho com menu, busca global e controle "vi ate", rodape, dialogos de foto e batalha). `src/paginas/<nome>.html`: conteudo de cada pagina, com `<!--meta {"titulo","og","descricao","script"}-->` na primeira linha.
- `scripts/build.py`: monta `<nome>.html` na raiz a partir de src/, pre-renderiza as listas (marcadores `<!-- pre:X -->` dentro de `#lista-X`, com sentinela `<i hidden data-fim="X">` logo depois) via Chrome headless, gera `img/og.png`, `img/icone-180.png` e `img/antes-da-t4.png` (`scripts/og.html`, `icone.html`, `resumo.html`) e o `sitemap.xml`. `--sem-imagens` pula as imagens. Os `.html` da raiz sao gerados: nunca editar a mao.
- `js/dados.js`: todos os dados. Arrays principais: `casas`, `personagens` (com `desde`, `estado`, `morte:{ep,onde,como,evento?}`), `eventos` (batalhas), `dragoes`, `dragoesTempo` (placar), `lugares`, `casasMenores`, `casasAusentes`, `nomesRepetidos`, `linhagem`, `arvoreNos/Casamentos/Filhos`, `mapaLugares/Batalhas/Contorno`, `aliancasNos/Arestas`, `livroSerie/Alem`, `resumos`, `pendencias`, `quiz`, `quizPerfis`, `sugestoes`. `fotos` e `creditos` sao regravados por `scripts/injetar_fotos.py`.
- `js/comum.js`: utilidades (`esc`, `slug`, `normalizar`, `marcar`), tempo (`episodioAtual`, `modoTempo`, `filtrarTexto`, `visivelNoTempo`, `estadoNoTempo`), busca global (indice montado a partir dos dados; a pagina pode expor `window.buscaLocal(termo)` para filtrar/destacar o que esta nela), popups `abrirEvento(id)` e lupa de foto, brasas do topo.
- `js/pagina-*.js`: um por pagina; cada um escuta o evento `episodio` na `window` para se regravar.
- `css/estilo.css`: tema unico escuro (vermelho = A Casa do Dragao, azul-gelo = GoT, verde so para os Verdes).

## Regras

- Marcadores de episodio no texto: `(T1)`, `(T2E4)`, `T3E1`. O modo sem spoiler esconde frases/itens que citam episodio posterior ao marcado; escrever datas de episodio sempre nesse formato. Referencias a GoT usam `GoT T6` etc. e nao sao filtradas (temporadas 4+ nao existem na tabela).
- Progresso do visitante fica em `localStorage` (`episodioAtual`); `?ep=T2E4` na URL sobrescreve e salva. Nao ha backend nem login.
- Conteudo cobre ate o fim da 3a temporada (agosto de 2026). Ao sair a 4a: `temporadas` em comum.js, arrays em dados.js, `resumos`, `pendencias`, `mapaBatalhas`, `aliancasArestas[4]`.
- Fotos: imagens de cena da HBO via Game of Thrones Wiki, decisao do Pablo em 2026-10-12 (risco assumido). `scripts/fotos.py` pausa entre pedidos e manda Referer da wiki (Cloudflare e CDN devolvem 403 sem isso; urllib do Python leva 403 mesmo assim, por isso usa curl). Depois: `injetar_fotos.py` e `build.py`.
- Texto das paginas em portugues com acento; codigo, comentarios e chaves sem acento. Nomes de lugares na traducao brasileira quando conhecida.
- SEO: cada pagina tem titulo, descricao, canonical, OG/Twitter, JSON-LD; `sitemap.xml` e gerado. `googledafd2fba8aab4681.html` e a verificacao do Search Console: nao apagar.
- O artefato do claude.ai (versao de pagina unica) ficou congelado na versao 8; o site vivo e o Pages.
