// Pagina livro x serie.
let termoLv = "";
function renderLivro(){
  const vis = livroSerie.filter(l => visivelNoTempo(l.serie));
  document.getElementById("lista-livro").innerHTML = vis.map(l => `
    <article class="compara" id="livro-${slug(l.tema)}">
      <h3>${esc(l.tema)}</h3>
      <div class="col livro"><b>Fogo &amp; Sangue</b><p>${esc(l.livro)}</p></div>
      <div class="col serie"><b>A Casa do Dragão</b><p>${esc(l.serie)}</p></div>
    </article>`).join("") || `<p class="vazio">Nada para comparar até ${epRotulo(episodioAtual)}.</p>`;
  document.getElementById("lista-alem").innerHTML = livroAlem.map(l => `<li><b>${esc(l.tema)}.</b> ${esc(l.texto)}</li>`).join("");
}
function tudo(){
  renderLivro();
  document.querySelectorAll("#lista-livro .compara").forEach(el => { if (termoLv){ marcar(el, termoLv); el.hidden = !normalizar(el.textContent).includes(termoLv); } });
}
window.buscaLocal = termo => { termoLv = termo; tudo(); };
window.addEventListener("episodio", tudo);
tudo();
