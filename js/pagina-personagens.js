// Pagina dos personagens: cartoes com foto, situacao no tempo, mortes, filtros, creditos das fotos.
const estadoP = {lado:"todos", casa:"todas", estado:"todos", termo:""};

function renderPersonagens(){
  const visiveis = modoTempo() ? personagens.filter(p => epIndice(p.desde) <= episodioAtual) : personagens;
  document.getElementById("lista-personagens").innerHTML = visiveis.map(p => {
    const est = estadoNoTempo(p);
    const morte = p.morte && (!modoTempo() || epIndice(p.morte.ep) <= episodioAtual) ? p.morte : null;
    const ate = modoTempo() ? (filtrarTexto(p.ate) || `Em cena desde ${p.desde}.`) : p.ate;
    return `
    <article class="personagem" id="personagem-${slug(p.nome)}" data-lado="${p.lado}" data-casa="${esc(p.casa)}" data-estado="${est}">
      <div class="cabeca">${foto(p)}<div><h3>${esc(p.nome)}</h3>${p.ep ? `<p class="ep">${esc(p.ep)}</p>` : ""}</div></div>
      <div class="marcas">
        <span class="chip chip-casa">${esc(p.casa)}</span>
        <span class="lado lado-${p.lado}">${rotuloLado[p.lado]}</span>
        ${p.dragao ? `<span class="chip chip-dragao">🐉 ${esc(p.dragao)}</span>` : ""}
        <span class="estado estado-${est}">${rotuloEstado[est]}</span>
      </div>
      <p class="ate"><b>${modoTempo() ? "Até " + epRotulo(episodioAtual) : "Até o fim da T3"}</b>${esc(ate)}</p>
      ${morte ? `<p class="morte"><b>Como morreu</b>${esc(morte.ep)} · ${esc(morte.onde)}. ${esc(morte.como)} ${morte.evento ? `<button class="evento-botao" type="button" data-evento="${morte.evento}">⚔ ${esc(eventos[morte.evento].nome)}</button>` : ""}</p>` : ""}
      ${p.got ? `<p class="got"><b>Em Game of Thrones</b>${esc(p.got)}</p>` : ""}
    </article>`; }).join("");
  const cred = document.getElementById("lista-creditos");
  if (cred && typeof creditos !== "undefined") cred.innerHTML = creditos.map(v => `<li><b>${esc(v.personagem)}</b>: <a href="${esc(v.fonte)}">${esc(v.pagina)}</a> (${esc(v.imagem)})</li>`).join("");
}
function aplicarFiltroPersonagens(){
  const cartoes = document.querySelectorAll("#lista-personagens .personagem");
  let visiveis = 0;
  cartoes.forEach(el => {
    const ok = (estadoP.lado === "todos" || el.dataset.lado === estadoP.lado)
      && (estadoP.casa === "todas" || el.dataset.casa === estadoP.casa)
      && (estadoP.estado === "todos" || el.dataset.estado === estadoP.estado)
      && (!estadoP.termo || normalizar(el.textContent).includes(estadoP.termo));
    el.hidden = !ok; if (ok) visiveis++;
  });
  const c = document.getElementById("contagem-p");
  c.textContent = visiveis === cartoes.length ? `${cartoes.length} personagens` : visiveis ? `${visiveis} de ${cartoes.length} personagens` : "Nenhum personagem com essa combinação";
}
function tudo(){
  renderPersonagens();
  if (estadoP.termo) document.querySelectorAll("#lista-personagens .personagem").forEach(el => marcar(el, estadoP.termo));
  aplicarFiltroPersonagens();
}
window.buscaLocal = termo => { estadoP.termo = termo; tudo(); };
[["filtro-lado-p", "lado"], ["filtro-estado-p", "estado"]].forEach(([id, chave]) => {
  const grupo = document.getElementById(id);
  grupo.querySelectorAll(".filtro").forEach(btn => btn.addEventListener("click", () => {
    estadoP[chave] = btn.dataset[chave];
    grupo.querySelectorAll(".filtro").forEach(b => b.setAttribute("aria-pressed", b === btn ? "true" : "false"));
    aplicarFiltroPersonagens();
  }));
});
(function seletorCasa(){
  const seletor = document.getElementById("seletor-casa");
  if (seletor.options.length <= 1){
    const nomes = [...new Set(personagens.map(p => p.casa))].sort((a, b) => a.localeCompare(b, "pt"));
    seletor.innerHTML += nomes.map(c => `<option value="${esc(c)}">${esc(c)}</option>`).join("");
  }
  seletor.addEventListener("change", () => { estadoP.casa = seletor.value; aplicarFiltroPersonagens(); });
})();
window.addEventListener("episodio", tudo);
tudo();
