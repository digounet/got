// Pagina do mapa: Westeros esquematico com castelos (dourado) e batalhas (vermelho), filtro por temporada.
let temporadaMapa = "todas";
function renderMapa(){
  const alvo = document.getElementById("mapa"); if (!alvo) return;
  let svg = `<svg viewBox="0 0 520 900" role="img" aria-label="Mapa esquemático de Westeros com castelos e batalhas da Dança">`;
  svg += `<rect class="mar" x="0" y="0" width="520" height="900"/><path class="terra" d="${mapaContorno}"/><path class="terra" d="M40,410 L75,395 L95,420 L70,445 Z"/>`;
  svg += `<line class="muralha" x1="130" y1="72" x2="420" y2="72"/>`;
  svg += `<text x="52" y="300" fill="#4a5560" font-size="11" transform="rotate(-80 52 300)">MAR DO POENTE</text><text x="500" y="560" fill="#4a5560" font-size="11" transform="rotate(80 500 560)">MAR ESTREITO</text>`;
  for (const l of mapaLugares){
    if (l.tipo === "muralha"){ svg += `<g class="pino" data-pagina="${l.pagina}"><title>${esc(l.nome)}</title><text x="${l.x}" y="${l.y - 8}" text-anchor="middle">${esc(l.nome)}</text></g>`; continue; }
    const dir = l.x > 400 ? "end" : "start", tx = l.x > 400 ? l.x - 8 : l.x + 8;
    svg += `<g class="pino" ${l.pagina ? `data-pagina="${l.pagina}" tabindex="0" role="link"` : ""}><title>${esc(l.nome)}${l.casa ? " · Casa " + esc(l.casa) : ""}</title><circle cx="${l.x}" cy="${l.y}" r="4"/><text x="${tx}" y="${l.y + 4}" text-anchor="${dir}">${esc(l.nome)}</text></g>`;
  }
  for (const b of mapaBatalhas){
    const e = eventos[b.evento], n = epIndice(e.ep), futuro = modoTempo() && n > episodioAtual, oculto = temporadaMapa !== "todas" && +temporadaMapa !== episodios[n - 1].t;
    svg += `<g class="pino batalha ${futuro ? "futuro" : ""} ${oculto ? "oculto" : ""}" data-evento="${b.evento}" tabindex="0" role="button"><title>${esc(e.nome)} · ${e.ep}</title><circle cx="${b.x}" cy="${b.y}" r="7"/><text x="${b.x}" y="${b.rotulo === "baixo" ? b.y + 19 : b.y - 11}" text-anchor="middle">⚔ ${e.ep}</text></g>`;
  }
  svg += `</svg>`;
  alvo.innerHTML = svg;
  alvo.querySelectorAll(".pino").forEach(g => {
    const agir = () => { if (g.dataset.evento) abrirEvento(g.dataset.evento); else if (g.dataset.pagina) location.href = g.dataset.pagina; };
    g.addEventListener("click", agir); g.addEventListener("keydown", ev => { if (ev.key === "Enter" || ev.key === " "){ ev.preventDefault(); agir(); } });
  });
  const lista = document.getElementById("mapa-batalhas");
  lista.innerHTML = mapaBatalhas.map(b => { const e = eventos[b.evento], n = epIndice(e.ep); return {b, e, n}; })
    .sort((x, y) => x.n - y.n)
    .map(({b, e, n}) => { const futuro = modoTempo() && n > episodioAtual, oculto = temporadaMapa !== "todas" && +temporadaMapa !== episodios[n - 1].t;
      return `<button type="button" class="evento-botao-lista" data-evento="${b.evento}" ${futuro || oculto ? "hidden" : ""}><b>${esc(e.nome)}</b><small>${e.ep} · ${esc(e.onde)}</small></button>`; }).join("");
  lista.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => abrirEvento(btn.dataset.evento)));
}
document.querySelectorAll("#filtro-temporada .filtro").forEach(btn => btn.addEventListener("click", () => {
  temporadaMapa = btn.dataset.temporada;
  document.querySelectorAll("#filtro-temporada .filtro").forEach(b => b.setAttribute("aria-pressed", b === btn ? "true" : "false"));
  renderMapa();
}));
window.addEventListener("episodio", renderMapa);
renderMapa();
