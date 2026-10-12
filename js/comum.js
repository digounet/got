// Codigo compartilhado por todas as paginas: utilidades, controle de episodio (modo sem spoiler),
// busca global, dialogos (lupa de foto e popup de batalha) e as brasas do topo.

// ---------- utilidades ----------
function esc(s){ return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function normalizar(t){ return String(t).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }
function slug(t){ return normalizar(t).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function iniciais(nome){ return nome.split(/[\s,]+/).filter(x => /^[A-ZÀ-Ú]/.test(x)).slice(0, 2).map(x => x[0]).join(""); }
function flash(el){
  if (!el) return;
  const suave = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: suave ? "smooth" : "auto", block: "start" });
  el.classList.remove("flash"); void el.offsetWidth; el.classList.add("flash");
  setTimeout(() => el.classList.remove("flash"), 1600);
}
// Envolve em <mark> cada ocorrencia do termo (ja normalizado) nos nos de texto do elemento.
function marcar(raiz, termo){
  const andador = document.createTreeWalker(raiz, NodeFilter.SHOW_TEXT, {
    acceptNode(n){
      const pai = n.parentElement;
      if (!pai || pai.closest("[aria-hidden], mark, option, script, style")) return NodeFilter.FILTER_REJECT;
      return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  const nos = []; while (andador.nextNode()) nos.push(andador.currentNode);
  let achou = false;
  for (const no of nos){
    const txt = no.nodeValue; let norm = ""; const mapa = [];
    for (let i = 0; i < txt.length; i++){ const n = normalizar(txt[i]); for (let k = 0; k < n.length; k++){ norm += n[k]; mapa.push(i); } }
    let idx = norm.indexOf(termo); if (idx < 0) continue;
    achou = true; const frag = document.createDocumentFragment(); let ultimo = 0;
    while (idx >= 0){
      const ini = mapa[idx], fim = mapa[idx + termo.length - 1] + 1;
      frag.appendChild(document.createTextNode(txt.slice(ultimo, ini)));
      const m = document.createElement("mark"); m.textContent = txt.slice(ini, fim); frag.appendChild(m);
      ultimo = fim; idx = norm.indexOf(termo, idx + termo.length);
    }
    frag.appendChild(document.createTextNode(txt.slice(ultimo)));
    no.parentNode.replaceChild(frag, no);
  }
  return achou;
}

// ---------- rotulos ----------
const rotuloLado = {verdes:"Verdes", negros:"Negros", dividida:"Dividida", neutra:"Neutra", outros:"Outros"};
const rotuloTipo = {linhagem:"Linhagem", castelo:"Mesmo castelo", papel:"Mesmo papel", profecia:"Profecia e objetos", livros:"Só nos livros", nenhuma:"Sem ligação"};
const rotuloEstado = {vivo:"vivo", morto:"† morto", sumido:"? desaparecido"};

// ---------- tempo: ultimo episodio visto ----------
const temporadas = {1:10, 2:8, 3:8};
const episodios = [];
Object.entries(temporadas).forEach(([t, n]) => { for (let e = 1; e <= n; e++) episodios.push({t:+t, e, rotulo:`T${t}E${e}`}); });
function epIndice(rotulo){
  const m = /T(\d)(?:E(\d+))?/.exec(rotulo || ""); if (!m) return 0;
  const t = +m[1], e = m[2] ? +m[2] : temporadas[t];
  return episodios.findIndex(x => x.t === t && x.e === e) + 1;
}
function epRotulo(n){ return episodios[n - 1] ? episodios[n - 1].rotulo : "T3E8"; }
let episodioAtual = episodios.length;
try { const g = localStorage.getItem("episodioAtual"); if (g && +g >= 1 && +g <= episodios.length) episodioAtual = +g; } catch (e) {}
// ?ep=T2E4 na URL vale mais que o salvo: e o jeito de levar o progresso para outro aparelho
try { const q = new URLSearchParams(location.search).get("ep"); const i = q ? epIndice(q) : 0; if (i){ episodioAtual = i; localStorage.setItem("episodioAtual", String(i)); } } catch (e) {}
function modoTempo(){ return episodioAtual < episodios.length; }
function epMaximo(texto){ let max = 0; for (const m of String(texto).matchAll(/T(\d)(?:E(\d+))?/g)){ const i = epIndice(m[0]); if (i > max) max = i; } return max; }
function visivelNoTempo(texto){ return !modoTempo() || epMaximo(texto) <= episodioAtual; }
function filtrarTexto(texto){
  if (!modoTempo()) return texto;
  return String(texto).split(/(?<=[.!?])\s+/).filter(f => epMaximo(f) <= episodioAtual).join(" ").trim();
}
function estadoNoTempo(p){
  if (!modoTempo()) return p.estado;
  if (p.morte && epIndice(p.morte.ep) <= episodioAtual) return "morto";
  return "vivo";
}

// ---------- fotos ----------
function foto(p){
  const f = (typeof fotos !== "undefined") && fotos[slug(p.nome)];
  if (f) return `<button class="foto-botao" type="button" data-src="${f.arquivo}" data-nome="${esc(p.nome)}" data-ep="${esc(p.ep || "")}" aria-label="Ampliar foto de ${esc(p.nome)}"><img class="foto" src="${f.arquivo}" width="56" height="56" loading="lazy" alt="${esc(p.nome)} em A Casa do Dragão"></button>`;
  return `<div class="foto foto-vazia" aria-hidden="true">${esc(iniciais(p.nome))}</div>`;
}

// ---------- dialogos: lupa de foto e popup de batalha ----------
(function dialogos(){
  const previa = document.getElementById("previa"), lupa = document.getElementById("lupa"), dialogo = document.getElementById("evento");
  if (!previa || !lupa || !dialogo) return;
  const previaImg = document.getElementById("previa-img"), previaLeg = document.getElementById("previa-legenda");
  const lupaImg = document.getElementById("lupa-img"), lupaLeg = document.getElementById("lupa-legenda");
  const temHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  let ultimoFoco = null, focoAntesDoEvento = null;
  function posicionar(botao){
    const r = botao.getBoundingClientRect(), largura = previa.offsetWidth || 240, altura = previa.offsetHeight || 340;
    let x = r.right + 12, y = r.top - 24;
    if (x + largura > window.innerWidth - 16) x = Math.max(16, r.left - largura - 12);
    if (y + altura > window.innerHeight - 16) y = Math.max(16, window.innerHeight - altura - 16);
    if (y < 16) y = 16;
    previa.style.left = x + "px"; previa.style.top = y + "px";
  }
  function mostrarPrevia(b){ if (!lupa.hidden) return; previaImg.src = b.dataset.src; previaImg.alt = b.dataset.nome; previaLeg.textContent = b.dataset.nome; previa.hidden = false; posicionar(b); }
  function esconderPrevia(){ previa.hidden = true; }
  if (temHover){
    document.addEventListener("mouseover", ev => { const b = ev.target.closest(".foto-botao"); if (b) mostrarPrevia(b); });
    document.addEventListener("mouseout", ev => { const b = ev.target.closest(".foto-botao"); if (b && !b.contains(ev.relatedTarget)) esconderPrevia(); });
    window.addEventListener("scroll", esconderPrevia, {passive: true});
  }
  document.addEventListener("focusin", ev => { const b = ev.target.closest(".foto-botao"); if (b) mostrarPrevia(b); });
  document.addEventListener("focusout", ev => { const b = ev.target.closest(".foto-botao"); if (b) esconderPrevia(); });
  function abrirLupa(b){
    esconderPrevia(); lupaImg.src = b.dataset.src; lupaImg.alt = b.dataset.nome;
    lupaLeg.innerHTML = esc(b.dataset.nome) + (b.dataset.ep ? `<small>${esc(b.dataset.ep)}</small>` : "");
    ultimoFoco = b; lupa.hidden = false; document.body.style.overflow = "hidden"; document.getElementById("lupa-fechar").focus();
  }
  function fecharLupa(){ if (lupa.hidden) return; lupa.hidden = true; document.body.style.overflow = ""; if (ultimoFoco) ultimoFoco.focus({preventScroll: true}); }
  window.abrirEvento = function(id){
    const e = eventos[id]; if (!e) return;
    document.getElementById("evento-ep").textContent = `${e.ep} · ${e.titulo}`;
    document.getElementById("evento-titulo").textContent = e.nome;
    document.getElementById("evento-onde").textContent = e.onde;
    document.getElementById("evento-lados").textContent = e.lados;
    document.getElementById("evento-descricao").textContent = e.descricao;
    const mortos = personagens.filter(p => p.morte && p.morte.evento === id);
    const naPagina = document.body.classList.contains("pagina-personagens");
    document.getElementById("evento-mortos").innerHTML = mortos.map(p => {
      const f = fotos[slug(p.nome)], alvo = `personagem-${slug(p.nome)}`;
      const destino = naPagina ? `#${alvo}` : `personagens.html#${alvo}`;
      return `<li><a href="${destino}" data-alvo="${naPagina ? alvo : ""}">${f ? `<img src="${f.arquivo}" alt="">` : ""}<span><b>${esc(p.nome)}</b><br><small>${esc(p.morte.como)}</small></span></a></li>`;
    }).join("") || "<li>Nenhum personagem com cartão morre aqui.</li>";
    const dr = document.getElementById("evento-dragoes"); dr.textContent = e.dragoes ? `Dragões mortos: ${e.dragoes}.` : ""; dr.hidden = !e.dragoes;
    focoAntesDoEvento = document.activeElement; dialogo.hidden = false; document.body.style.overflow = "hidden"; document.getElementById("evento-fechar").focus();
  };
  function fecharEvento(){ if (dialogo.hidden) return; dialogo.hidden = true; document.body.style.overflow = ""; if (focoAntesDoEvento && focoAntesDoEvento.focus) focoAntesDoEvento.focus({preventScroll: true}); }
  window.fecharEvento = fecharEvento;
  document.addEventListener("click", ev => {
    const f = ev.target.closest(".foto-botao"); if (f){ ev.preventDefault(); abrirLupa(f); return; }
    const b = ev.target.closest(".evento-botao"); if (b){ abrirEvento(b.dataset.evento); return; }
  });
  lupa.addEventListener("click", fecharLupa);
  dialogo.addEventListener("click", ev => {
    const morto = ev.target.closest("[data-alvo]");
    if (morto && morto.dataset.alvo){ ev.preventDefault(); fecharEvento(); flash(document.getElementById(morto.dataset.alvo)); return; }
    if (ev.target === dialogo || ev.target.closest("#evento-fechar")) fecharEvento();
  });
  document.addEventListener("keydown", ev => { if (ev.key === "Escape"){ fecharLupa(); fecharEvento(); } });
})();

// ---------- busca global ----------
function textoPersonagem(p){
  const partes = [p.nome, p.ep, p.casa, p.dragao, filtrarTexto(p.ate), p.got];
  if (p.morte && (!modoTempo() || epIndice(p.morte.ep) <= episodioAtual)) partes.push(p.morte.ep, p.morte.onde, p.morte.como);
  return partes.filter(Boolean).join(" ");
}
function construirIndice(){
  const itens = [];
  const add = (pagina, id, onde, rotulo, texto) => { if (texto && texto.trim()) itens.push({pagina, id, onde, rotulo, norm: normalizar(rotulo + " " + texto)}); };
  casas.forEach(c => add("casas.html", "casa-" + slug(c.nome), "Casa", c.nome, [c.sede, ...c.cdd.filter(visivelNoTempo), ...c.got, filtrarTexto(c.ligacao)].join(" ")));
  casasMenores.forEach(c => add("casas.html", "menor-" + slug(c.nome), "Casa menor", c.nome, filtrarTexto(c.texto) + " " + c.nota));
  casasAusentes.forEach(c => add("casas.html", "ausente-" + slug(c.nome), "Fica de fora", c.nome, c.texto + " " + c.nota));
  personagens.forEach(p => { if (!modoTempo() || epIndice(p.desde) <= episodioAtual) add("personagens.html", "personagem-" + slug(p.nome), "Personagem", p.nome, textoPersonagem(p)); });
  dragoes.forEach(d => add("dragoes.html", "dragao-" + slug(d.nome), "Dragão", d.nome, [d.ep, filtrarTexto(d.cav), filtrarTexto(d.cdd), d.got].join(" ")));
  Object.entries(eventos).forEach(([id, e]) => { if (visivelNoTempo(e.ep)) add("mapa.html", "batalha-" + id, "Batalha", e.nome, [e.ep, e.titulo, e.onde, e.lados, e.descricao].join(" ")); });
  lugares.forEach(l => add("lugares.html", "lugar-" + l.id, "Lugar ou objeto", l.nome, [l.intro, ...l.partes.map(x => filtrarTexto(x.texto))].join(" ")));
  nomesRepetidos.forEach(n => add("linhagem.html", "nome-" + slug(n.nome), "Nomes repetidos", n.nome, filtrarTexto(n.texto)));
  linhagem.forEach(n => add("linhagem.html", "linhagem-" + n.n, "Linhagem", n.nome, [n.sub, n.nota && n.nota.t, ...(n.irmaos || []).map(i => i.b + " " + i.t)].filter(Boolean).join(" ")));
  livroSerie.forEach(l => { if (visivelNoTempo(l.serie)) add("livro.html", "livro-" + slug(l.tema), "Livro × série", l.tema, l.livro + " " + l.serie); });
  Object.entries(resumos).forEach(([t, frases]) => { if (visivelNoTempo("T" + t)) add("antes-da-t4.html", "resumo-t" + t, "Resumo", "Temporada " + t, frases.join(" ")); });
  if (!modoTempo()) add("antes-da-t4.html", "pendencias", "Antes da T4", "O que fica em aberto", pendencias.join(" "));
  return itens;
}
let indiceBusca = null;
(function buscaGlobal(){
  const campo = document.getElementById("busca-global"), painel = document.getElementById("busca-painel");
  if (!campo || !painel) return;
  const aqui = location.pathname.split("/").pop() || "index.html";
  let temporizador = null;
  function executar(){
    const bruto = campo.value.trim(), termo = normalizar(bruto).replace(/\s+/g, " ");
    if (window.buscaLocal) window.buscaLocal(termo);
    if (!termo){ painel.hidden = true; painel.innerHTML = ""; return; }
    if (!indiceBusca) indiceBusca = construirIndice();
    const achados = indiceBusca.filter(i => i.norm.includes(termo)).slice(0, 40);
    if (!achados.length){ painel.innerHTML = `<p class="nada">Nada para «${esc(bruto)}». Tente só o primeiro nome, o nome da casa ou do castelo.</p>`; painel.hidden = false; return; }
    const grupos = {};
    achados.forEach(a => { (grupos[a.pagina] = grupos[a.pagina] || []).push(a); });
    const nomePagina = {"casas.html":"Casas","personagens.html":"Personagens","dragoes.html":"Dragões","mapa.html":"Mapa e batalhas","lugares.html":"Lugares e objetos","linhagem.html":"Linhagem e nomes","livro.html":"Livro × série","antes-da-t4.html":"Antes da T4"};
    painel.innerHTML = Object.entries(grupos).map(([pag, lista]) => `<div class="grupo"><b>${nomePagina[pag] || pag}${pag === aqui ? " · nesta página" : ""}</b>${lista.map(a => `<a href="${pag === aqui ? "" : pag}#${a.id}">${esc(a.rotulo)} <small>${esc(a.onde)}</small></a>`).join("")}</div>`).join("");
    painel.hidden = false;
  }
  campo.addEventListener("input", () => { clearTimeout(temporizador); temporizador = setTimeout(executar, 140); });
  campo.addEventListener("keydown", ev => { if (ev.key === "Escape"){ campo.value = ""; executar(); } });
  document.addEventListener("click", ev => { if (!ev.target.closest(".campo")) painel.hidden = true; });
  campo.addEventListener("focus", () => { if (campo.value.trim() && painel.innerHTML) painel.hidden = false; });
  painel.addEventListener("click", ev => {
    const a = ev.target.closest("a"); if (!a) return;
    if (a.getAttribute("href").startsWith("#")){ ev.preventDefault(); painel.hidden = true; const alvo = document.getElementById(a.getAttribute("href").slice(1)); if (alvo && alvo.hidden) { campo.value = ""; executar(); } flash(alvo); history.replaceState(null, "", a.getAttribute("href")); }
  });
  window.reindexarBusca = () => { indiceBusca = null; if (campo.value.trim()) executar(); };
  if (campo.value) executar();
})();

// ---------- controle de episodio ----------
(function controleEpisodio(){
  const faixa = document.getElementById("controle-episodio"), saida = document.getElementById("episodio-rotulo"), aviso = document.getElementById("tempo-aviso");
  if (!faixa) return;
  faixa.max = episodios.length; faixa.value = episodioAtual;
  function mostrar(){
    const r = epRotulo(episodioAtual);
    saida.textContent = modoTempo() ? r : "tudo";
    if (aviso){ aviso.hidden = !modoTempo(); document.getElementById("tempo-aviso-ep").textContent = r; }
    document.body.classList.toggle("modo-tempo", modoTempo());
  }
  faixa.addEventListener("input", () => { episodioAtual = +faixa.value; mostrar(); });
  faixa.addEventListener("change", () => {
    episodioAtual = +faixa.value;
    try { localStorage.setItem("episodioAtual", String(episodioAtual)); } catch (e) {}
    mostrar();
    window.dispatchEvent(new Event("episodio"));
    if (window.reindexarBusca) window.reindexarBusca();
  });
  const copiar = document.getElementById("tempo-link");
  if (copiar) copiar.addEventListener("click", async () => {
    const url = location.origin + location.pathname + "?ep=" + epRotulo(episodioAtual);
    try { await navigator.clipboard.writeText(url); copiar.textContent = "Link copiado"; } catch (e) { copiar.textContent = url; }
    setTimeout(() => { copiar.textContent = "Copiar link com meu progresso"; }, 3000);
  });
  mostrar();
})();

// ---------- menu ativo, ancora e brasas ----------
(function navegacao(){
  const aqui = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".menu a").forEach(a => { if ((a.getAttribute("href") || "") === aqui) a.classList.add("ativo"); });
  window.addEventListener("load", () => {
    if (location.hash){
      const id = location.hash.slice(1), alvo = document.getElementById(id);
      if (alvo) setTimeout(() => flash(alvo), 50);
      else if (id.startsWith("batalha-") && window.abrirEvento) setTimeout(() => abrirEvento(id.slice(8)), 50);
    }
  });
})();
(function brasas(){
  const tela = document.getElementById("brasas");
  if (!tela || !tela.getContext) return;
  const ctx = tela.getContext("2d");
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w = 0, h = 0, particulas = [], animando = false;
  function medir(){ const r = tela.parentElement.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2); w = Math.max(1, Math.floor(r.width)); h = Math.max(1, Math.floor(r.height)); tela.width = Math.floor(w * dpr); tela.height = Math.floor(h * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
  function nova(inicial){ const gelo = Math.random() < 0.42; return { gelo, x: Math.random() * w, y: inicial ? Math.random() * h : (gelo ? -6 : h + 6), r: gelo ? 0.9 + Math.random() * 1.7 : 0.8 + Math.random() * 1.8, vy: gelo ? 0.08 + Math.random() * 0.22 : 0.15 + Math.random() * 0.35, vx: (Math.random() - 0.5) * 0.25, fase: Math.random() * Math.PI * 2 }; }
  function desenhar(t){
    ctx.clearRect(0, 0, w, h);
    for (const p of particulas){
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
      if (p.gelo){ const b = 0.5 + 0.5 * Math.abs(Math.sin(p.fase + t / 1400)); g.addColorStop(0, "rgba(235,246,255," + (0.95 * b) + ")"); g.addColorStop(0.4, "rgba(143,182,216," + (0.5 * b) + ")"); g.addColorStop(1, "rgba(143,182,216,0)"); }
      else { const b = 0.35 + 0.65 * Math.abs(Math.sin(p.fase + t / 900)); g.addColorStop(0, "rgba(255,180,120," + (0.9 * b) + ")"); g.addColorStop(0.4, "rgba(209,69,47," + (0.5 * b) + ")"); g.addColorStop(1, "rgba(209,69,47,0)"); }
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2); ctx.fill();
    }
  }
  function passo(t){ if (!animando) return; for (let i = 0; i < particulas.length; i++){ const p = particulas[i]; p.y += p.gelo ? p.vy : -p.vy; p.x += p.vx + Math.sin(t / 1500 + p.fase) * (p.gelo ? 0.25 : 0.15); if (p.y < -8 || p.y > h + 8 || p.x < -8 || p.x > w + 8) particulas[i] = nova(false); } desenhar(t); requestAnimationFrame(passo); }
  function iniciar(){ medir(); particulas = Array.from({length: Math.round(Math.min(90, Math.max(30, w / 14)))}, () => nova(true)); if (reduzir){ desenhar(0); return; } if (!animando){ animando = true; requestAnimationFrame(passo); } }
  window.addEventListener("resize", () => { medir(); if (reduzir) desenhar(0); });
  document.addEventListener("visibilitychange", () => { if (reduzir) return; if (document.hidden) animando = false; else if (!animando){ animando = true; requestAnimationFrame(passo); } });
  iniciar();
})();
