// Pagina das aliancas: grafo por temporada, com os nos num circulo e as arestas coloridas por tipo.
let temporadaAl = 1;
let noAtivo = null;
function arestasVisiveis(){
  return (aliancasArestas[temporadaAl] || []).filter(a => visivelNoTempo(a.nota));
}
function renderAliancas(){
  const alvo = document.getElementById("aliancas"); if (!alvo) return;
  const maxT = modoTempo() ? episodios[episodioAtual - 1].t : 3;
  document.querySelectorAll("#filtro-temporada-al .filtro").forEach(b => { b.hidden = +b.dataset.temporada > maxT; });
  if (temporadaAl > maxT){ temporadaAl = maxT; document.querySelectorAll("#filtro-temporada-al .filtro").forEach(b => b.setAttribute("aria-pressed", +b.dataset.temporada === temporadaAl ? "true" : "false")); }
  const arestas = arestasVisiveis();
  const fimT = epIndice("T" + temporadaAl), inicioT = epIndice(`T${temporadaAl}E1`);
  const nos = aliancasNos.filter(n => (!n.desde || epIndice(n.desde) <= fimT) && (!n.ate || epIndice(n.ate) >= inicioT));
  const W = 640, H = 560, cx = 320, cy = 285, r = 215, raio = 26;
  const pos = {};
  nos.forEach((n, i) => { const a = -Math.PI / 2 + (i / nos.length) * Math.PI * 2; pos[n.id] = {x: cx + r * Math.cos(a), y: cy + r * Math.sin(a)}; });
  let svg = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Alianças e inimizades na temporada ${temporadaAl}">`;
  arestas.forEach((a, i) => {
    const p = pos[a.a], q = pos[a.b]; if (!p || !q) return;
    const mx = (p.x + q.x) / 2 + (cx - (p.x + q.x) / 2) * 0.25, my = (p.y + q.y) / 2 + (cy - (p.y + q.y) / 2) * 0.25;
    const apagada = noAtivo && a.a !== noAtivo && a.b !== noAtivo, ativa = noAtivo && !apagada;
    svg += `<path class="aresta ${a.tipo} ${apagada ? "apagada" : ""} ${ativa ? "ativa" : ""}" data-i="${i}" d="M${p.x},${p.y} Q${mx},${my} ${q.x},${q.y}"><title>${esc(aliancasTipos[a.tipo])}: ${esc(a.nota)}</title></path>`;
  });
  nos.forEach(n => {
    const p = pos[n.id], f = fotos[n.id], apagado = noAtivo && noAtivo !== n.id && !arestas.some(a => (a.a === noAtivo && a.b === n.id) || (a.b === noAtivo && a.a === n.id));
    svg += `<g class="no ${n.lado} ${apagado ? "apagado" : ""}" data-no="${n.id}" tabindex="0" role="button"><title>${esc(n.nome)}</title>`;
    svg += `<circle class="aro" cx="${p.x}" cy="${p.y}" r="${raio}"/>`;
    if (f) svg += `<clipPath id="clip-${n.id}"><circle cx="${p.x}" cy="${p.y}" r="${raio - 2}"/></clipPath><image href="${f.arquivo}" x="${p.x - raio}" y="${p.y - raio}" width="${raio * 2}" height="${raio * 2}" preserveAspectRatio="xMidYMin slice" clip-path="url(#clip-${n.id})"/>`;
    svg += `<text x="${p.x}" y="${p.y + raio + 14}">${esc(n.nome)}</text></g>`;
  });
  svg += `</svg>`;
  alvo.innerHTML = svg;
  alvo.querySelectorAll(".no").forEach(g => {
    const alternar = () => { noAtivo = noAtivo === g.dataset.no ? null : g.dataset.no; renderAliancas(); };
    g.addEventListener("click", alternar); g.addEventListener("keydown", ev => { if (ev.key === "Enter" || ev.key === " "){ ev.preventDefault(); alternar(); } });
  });
  const lista = document.getElementById("aliancas-lista");
  const nome = id => (aliancasNos.find(n => n.id === id) || {nome:id}).nome;
  const sel = noAtivo ? arestas.filter(a => a.a === noAtivo || a.b === noAtivo) : arestas;
  lista.innerHTML = `<h3>${noAtivo ? nome(noAtivo) + " na temporada " + temporadaAl : "Temporada " + temporadaAl}</h3>` + (sel.length ? sel.map(a => `<p><span class="tipo ${a.tipo}" style="color:var(--${{casado:"gold",aliado:"green",inimigo:"ember",traicao:"violet",rompido:"stone"}[a.tipo]})">${aliancasTipos[a.tipo]}</span><b>${esc(nome(a.a))} e ${esc(nome(a.b))}</b>: ${esc(a.nota)}</p>`).join("") : "<p>Nada registrado até o episódio marcado.</p>");
}
document.querySelectorAll("#filtro-temporada-al .filtro").forEach(btn => btn.addEventListener("click", () => {
  temporadaAl = +btn.dataset.temporada; noAtivo = null;
  document.querySelectorAll("#filtro-temporada-al .filtro").forEach(b => b.setAttribute("aria-pressed", b === btn ? "true" : "false"));
  renderAliancas();
}));
window.addEventListener("episodio", () => { noAtivo = null; renderAliancas(); });
renderAliancas();
