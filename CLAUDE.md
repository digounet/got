# got — infografico "Da Dança ao Trono"

Pagina estatica unica (`index.html`) publicada no GitHub Pages em https://digounet.github.io/got/ a partir da branch `main`, raiz do repo.

- Nao tem build: editar `index.html` e dar push ja publica.
- Dados: arrays `casas`, `personagens` e `dragoes` no `<script>` da pagina. Secoes estaticas (linhagem, lugares, casas menores) sao HTML direto.
- Conteudo cobre ate o fim da 3a temporada (agosto de 2026). Ao sair a 4a, atualizar os tres arrays e a linha do tempo.
- O topo tem um canvas de particulas (brasas sobem, gelo desce); respeita prefers-reduced-motion.
- Busca ignora acentos; sugestoes ficam no array `sugestoes`.
- Texto da pagina em portugues com acento; codigo e comentarios sem acento.
- Nomes de lugares seguem a traducao brasileira quando ela e conhecida (Porto Real, Correrrio, Ninho da Aguia); senao, o nome em ingles.
