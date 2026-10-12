// Pagina da linhagem: nomes repetidos, arvore genealogica em SVG e a lista de geracoes ate Daenerys.
let termoL = "";
const etiqueta = {cdd:"A Casa do Dragão", got:"Game of Thrones", entre:"Entre as séries"};
function renderNomes(){
  document.getElementById("lista-nomes").innerHTML = nomesRepetidos.map(n => `<li id="nome-${slug(n.nome)}"><b>${esc(n.nome)}</b><span>${esc(filtrarTexto(n.texto) || n.texto)}</span></li>`).join("");
}
function renderLinhagem(){
  document.getElementById("lista-linhagem").innerHTML = linhagem.map((n, i) => `
    <li id="linhagem-${n.n}" class="${n.era === "got" && i === 7 ? "era-gelo" : ""}">
      <div class="marcador era-${n.era}">${n.n}</div>
      <div class="no">
        <div class="nome">${esc(n.nome)} <span class="etiqueta etiqueta-${n.era}">${etiqueta[n.era]}</span></div>
        ${n.sub ? `<small>${esc(filtrarTexto(n.sub) || n.sub)}</small>` : ""}
        ${n.nota ? `<p class="nota"><b>${esc(n.nota.b)}</b> ${esc(filtrarTexto(n.nota.t) || n.nota.t)}</p>` : ""}
        ${n.irmaos ? `<div class="irmaos">${n.irmaos.map(i => `<span><b>${esc(i.b)}</b> · ${esc(i.t)}</span>`).join("")}</div>` : ""}
      </div>
    </li>`).join("");
}
function renderArvore(){
  const alvo = document.getElementById("arvore"); if (!alvo) return;
  const pos = Object.fromEntries(arvoreNos.map(n => [n.id, n]));
  const W = 1000, H = 620, lw = 100, lh = 30;
  const mortos = new Set(personagens.filter(p => estadoNoTempo(p) === "morto").map(p => slug(p.nome)));
  let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Árvore genealógica dos Targaryen de A Casa do Dragão">`;
  // linhas pai -> filhos (um so pai)
  for (const g of arvoreFilhos){
    const p = pos[g.pai], ys = p.y + lh / 2, yb = g.yBus;
    const xs = g.filhos.map(f => pos[f].x), x0 = Math.min(...xs, p.x), x1 = Math.max(...xs, p.x);
    svg += `<path class="liga ${g.tracejado ? "tracejado" : ""}" d="M${p.x},${ys} V${yb} M${x0},${yb} H${x1} ${g.filhos.map(f => `M${pos[f].x},${yb} V${pos[f].y - lh / 2}`).join(" ")}"/>`;
    if (g.nota) svg += `<text class="nota" x="${p.x + 62}" y="${(ys + yb) / 2 + 4}">${esc(g.nota)}</text>`;
  }
  // casamentos: linha dourada entre os dois (arco quando estao longe) e barramento para os filhos
  for (const c of arvoreCasamentos){
    const a = pos[c.a], b = pos[c.b];
    const traco = c.tracejado ? ' stroke-dasharray="5 4"' : "";
    if (c.arco){ const xm = (a.x + b.x) / 2; svg += `<path class="casamento" fill="none" d="M${a.x},${a.y - lh / 2} Q${xm},${a.y - 95} ${b.x},${b.y - lh / 2}"${traco}/>`; }
    else svg += `<line class="casamento" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"${traco}/>`;
    if (c.filhos && c.filhos.length){
      const yb = c.yBus, xs = c.filhos.map(f => pos[f].x), xd = c.xDesce;
      const yInicio = Math.max(a.y, b.y) + (Math.abs(xd - a.x) < 40 ? lh / 2 : 0);
      svg += `<path class="liga ${c.tracejado ? "tracejado" : ""}" d="M${xd},${yInicio} V${yb} M${Math.min(...xs, xd)},${yb} H${Math.max(...xs, xd)} ${c.filhos.map(f => `M${pos[f].x},${yb} V${pos[f].y - lh / 2}`).join(" ")}"/>`;
      if (c.nota) svg += `<text class="nota" x="${(Math.min(...xs) + Math.max(...xs)) / 2}" y="${yb - 5}">${esc(c.nota)}</text>`;
    }
  }
  for (const n of arvoreNos){
    const w = Math.max(lw, n.nome.length * 6.4 + 16), morto = n.pers && mortos.has(n.pers);
    const futuro = n.pers && modoTempo() && personagens.find(p => slug(p.nome) === n.pers && epIndice(p.desde) > episodioAtual);
    svg += `<g class="no ${n.lado} ${n.pers ? "link" : ""} ${morto ? "morto" : ""}" ${n.pers ? `data-pers="${n.pers}" tabindex="0" role="link"` : ""} ${futuro ? 'opacity=".3"' : ""}><title>${esc(n.nome)}${morto ? " († morto)" : ""}</title><rect x="${n.x - w / 2}" y="${n.y - lh / 2}" width="${w}" height="${lh}"/><text x="${n.x}" y="${n.y + 4}">${esc(n.nome)}${morto ? " †" : ""}</text></g>`;
  }
  svg += `</svg>`;
  alvo.innerHTML = svg;
  alvo.querySelectorAll(".no.link").forEach(g => {
    const ir = () => { location.href = `personagens.html#personagem-${g.dataset.pers}`; };
    g.addEventListener("click", ir); g.addEventListener("keydown", ev => { if (ev.key === "Enter") ir(); });
  });
}
function tudo(){
  renderNomes(); renderLinhagem(); renderArvore();
  if (termoL){
    document.querySelectorAll("#lista-nomes li, #lista-linhagem > li").forEach(el => { marcar(el, termoL); el.hidden = !normalizar(el.textContent).includes(termoL); });
    document.querySelectorAll("#lista-linhagem > li").forEach(el => { el.hidden = false; el.classList.toggle("apagado", !normalizar(el.textContent).includes(termoL)); });
  }
  document.getElementById("arvore-caixa").hidden = !!termoL;
  document.getElementById("nomes").hidden = !!termoL && !document.querySelector("#lista-nomes li:not([hidden])");
}
window.buscaLocal = termo => { termoL = termo; tudo(); };
window.addEventListener("episodio", tudo);
tudo();
