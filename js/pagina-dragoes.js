// Pagina dos dragoes: placar por episodio e cartoes.
let termoD = "";
function dragoesNoEpisodio(n){
  const r = {verdes:[], negros:[]};
  for (const d of dragoesTempo) for (const t of d.trechos){
    const de = epIndice(t.de), ate = t.ate ? epIndice(t.ate) : episodios.length;
    if (n >= de && n <= ate) r[t.lado].push(d.nome);
  }
  return r;
}
function renderPlacar(){
  const alvo = document.getElementById("placar"); if (!alvo) return;
  const W = 760, H = 230, esq = 28, topo = 22, base = 36, larg = (W - esq - 10) / episodios.length, max = 9, alt = H - topo - base;
  const y = v => topo + alt - (v / max) * alt;
  let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Dragões com cavaleiro por episódio, Verdes contra Negros">`;
  for (let v = 0; v <= max; v += 3) svg += `<line class="eixo" x1="${esq}" x2="${W - 10}" y1="${y(v)}" y2="${y(v)}"/><text x="${esq - 6}" y="${y(v) + 4}" text-anchor="end">${v}</text>`;
  episodios.forEach((ep, i) => {
    const n = i + 1, c = dragoesNoEpisodio(n), x = esq + i * larg, futuro = modoTempo() && n > episodioAtual, bw = (larg - 6) / 2;
    const titulo = futuro ? "Episódio depois do que você marcou" : `${ep.rotulo}: Verdes ${c.verdes.length} (${c.verdes.join(", ") || "nenhum"}) · Negros ${c.negros.length} (${c.negros.join(", ") || "nenhum"})`;
    svg += `<g class="${futuro ? "futuro" : ""}"><title>${esc(titulo)}</title>`;
    svg += `<rect class="barra-verdes" x="${x + 2}" y="${y(c.verdes.length)}" width="${bw}" height="${alt - (y(c.verdes.length) - topo)}" rx="1"/>`;
    svg += `<rect class="barra-negros" x="${x + 2 + bw + 2}" y="${y(c.negros.length)}" width="${bw}" height="${alt - (y(c.negros.length) - topo)}" rx="1"/>`;
    svg += `<text x="${x + larg / 2}" y="${H - base + 14}" text-anchor="middle">${ep.e}</text></g>`;
    if (ep.e === 1){ svg += `<text class="temporada" x="${x + 2}" y="${H - 6}">TEMPORADA ${ep.t}</text>`; if (i) svg += `<line class="eixo" x1="${x}" x2="${x}" y1="${topo}" y2="${H - base + 18}"/>`; }
  });
  const xa = esq + (episodioAtual - 1) * larg + larg / 2;
  svg += `<line class="marca-atual" x1="${xa}" x2="${xa}" y1="${topo - 6}" y2="${H - base + 18}"/></svg>`;
  svg += `<div class="placar-legenda"><span><i style="background:var(--green)"></i>Verdes</span><span><i style="background:var(--ember)"></i>Negros</span><span>Dragões selvagens e sem cavaleiro não contam.</span></div>`;
  alvo.innerHTML = svg;
}
function renderDragoes(){
  document.getElementById("lista-dragoes").innerHTML = dragoes.map(d => `
    <article class="dragao" id="dragao-${slug(d.nome)}">
      <h3>${esc(d.nome)} <small>${esc(d.ep)}</small></h3>
      <p class="cav"><b>Cavaleiros:</b> ${esc(filtrarTexto(d.cav) || d.cav)}</p>
      <dl>
        <dt class="cdd">A Casa do Dragão</dt><dd>${esc(filtrarTexto(d.cdd) || `Nada até ${epRotulo(episodioAtual)}.`)}</dd>
        <dt class="got">Game of Thrones</dt><dd>${esc(d.got)}</dd>
      </dl>
    </article>`).join("");
}
function tudo(){
  renderPlacar(); renderDragoes();
  document.querySelectorAll("#lista-dragoes .dragao").forEach(el => { if (termoD){ marcar(el, termoD); el.hidden = !normalizar(el.textContent).includes(termoD); } });
  document.getElementById("placar-caixa").hidden = !!termoD;
}
window.buscaLocal = termo => { termoD = termo; tudo(); };
window.addEventListener("episodio", tudo);
tudo();
