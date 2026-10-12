// Pagina das casas: cartoes, filtros por lado e tipo, casas menores e ausentes, busca local.
const estado = {lado:"todos", tipo:"todos", termo:""};

function lista(itens){
  const vis = itens.filter(i => visivelNoTempo(i));
  if (!vis.length) return `<p class="vazio">Nada até ${epRotulo(episodioAtual)}.</p>`;
  return "<ul>" + vis.map(i => "<li>" + esc(i) + "</li>").join("") + "</ul>";
}
function render(){
  document.getElementById("lista-casas").innerHTML = casas.map(c => `
    <article class="casa" id="casa-${slug(c.nome)}" data-lado="${c.lado}" data-tipos="${c.tipos.join(" ")}">
      <header class="casa-cabecalho">
        <div class="escudo" style="--campo:${c.campo};--carga:${c.carga}" aria-hidden="true"><span>${c.sigilo}</span></div>
        <div><h3>${esc(c.nome)}</h3><p class="sede">${esc(c.sede)}</p></div>
        <span class="lado lado-${c.lado}">${rotuloLado[c.lado]}</span>
      </header>
      <div class="casa-corpo">
        <section><h4 class="fogo">Em A Casa do Dragão</h4>${lista(c.cdd)}</section>
        <section><h4 class="gelo">Em Game of Thrones</h4>${lista(c.got)}</section>
      </div>
      <footer class="ligacao">
        <h4>A ligação</h4>
        <p>${esc(filtrarTexto(c.ligacao))}</p>
        <div class="chips">${c.tipos.map(t => `<span class="chip chip-${t}">${rotuloTipo[t]}</span>`).join("")}</div>
      </footer>
    </article>`).join("");
  const item = (c, pref) => `<li id="${pref}-${slug(c.nome)}"><b>${esc(c.nome)}</b><span>${esc(filtrarTexto(c.texto) || `Nada até ${epRotulo(episodioAtual)}.`)}</span><span class="nota-livro">${esc(c.nota)}</span></li>`;
  document.getElementById("lista-menores").innerHTML = casasMenores.map(c => item(c, "menor")).join("");
  document.getElementById("lista-ausentes").innerHTML = casasAusentes.map(c => item(c, "ausente")).join("");
}
function aplicarFiltro(){
  const cartoes = document.querySelectorAll("#lista-casas .casa");
  let visiveis = 0;
  cartoes.forEach(el => {
    const lado = el.dataset.lado, tipos = el.dataset.tipos.split(" ");
    const okLado = estado.lado === "todos" || lado === estado.lado || (lado === "dividida" && (estado.lado === "verdes" || estado.lado === "negros"));
    const okTipo = estado.tipo === "todos" || tipos.includes(estado.tipo);
    const okBusca = !estado.termo || normalizar(el.textContent).includes(estado.termo);
    el.hidden = !(okLado && okTipo && okBusca);
    if (!el.hidden) visiveis++;
  });
  const c = document.getElementById("contagem");
  c.textContent = visiveis === cartoes.length ? `${cartoes.length} casas` : visiveis ? `${visiveis} de ${cartoes.length} casas` : "Nenhuma casa com essa combinação";
  document.querySelectorAll("#lista-menores li, #lista-ausentes li").forEach(li => { li.hidden = !!estado.termo && !normalizar(li.textContent).includes(estado.termo); });
  ["menores", "ausentes"].forEach(id => { const sec = document.getElementById(id); sec.hidden = !!estado.termo && !sec.querySelector("li:not([hidden])"); });
}
function tudo(){
  render();
  if (estado.termo) document.querySelectorAll("#lista-casas .casa, #lista-menores li, #lista-ausentes li").forEach(el => marcar(el, estado.termo));
  aplicarFiltro();
}
window.buscaLocal = termo => { estado.termo = termo; tudo(); };
["filtro-lado", "filtro-tipo"].forEach((id, k) => {
  const chave = k ? "tipo" : "lado", grupo = document.getElementById(id);
  grupo.querySelectorAll(".filtro").forEach(btn => btn.addEventListener("click", () => {
    estado[chave] = btn.dataset[chave];
    grupo.querySelectorAll(".filtro").forEach(b => b.setAttribute("aria-pressed", b === btn ? "true" : "false"));
    aplicarFiltro();
  }));
});
window.addEventListener("episodio", tudo);
tudo();
