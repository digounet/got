// Pagina de lugares e objetos compartilhados pelas duas series.
let termoLu = "";
function renderLugares(){
  document.getElementById("lista-lugares").innerHTML = lugares.map(l => `
    <article class="lugar ${l.largo ? "lugar-largo" : ""}" id="lugar-${l.id}">
      <h3>${esc(l.nome)}</h3>
      ${l.intro ? `<p class="lugar-intro">${esc(l.intro)}</p>` : ""}
      <dl class="${l.largo ? "tres" : ""}">${l.partes.map(p => `<div><dt class="${p.tipo}">${esc(p.rotulo)}</dt><dd>${esc(filtrarTexto(p.texto) || `Nada até ${epRotulo(episodioAtual)}.`)}</dd></div>`).join("")}</dl>
    </article>`).join("");
}
function tudo(){
  renderLugares();
  document.querySelectorAll("#lista-lugares .lugar").forEach(el => { if (termoLu){ marcar(el, termoLu); el.hidden = !normalizar(el.textContent).includes(termoLu); } });
}
window.buscaLocal = termo => { termoLu = termo; tudo(); };
window.addEventListener("episodio", tudo);
tudo();
