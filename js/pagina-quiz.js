// Quiz "de que lado voce estaria?": 8 perguntas, resultado com lado e personagem, cartao em canvas.
const respostas = new Array(quiz.length).fill(null);
function renderQuiz(){
  document.getElementById("quiz").innerHTML = quiz.map((q, i) => `
    <section class="pergunta" id="pergunta-${i + 1}">
      <h3><span>${i + 1}/${quiz.length}</span>${esc(q.pergunta)}</h3>
      <div class="opcoes" role="group" aria-label="Pergunta ${i + 1}">${q.opcoes.map((o, k) => `<button type="button" class="opcao" data-p="${i}" data-o="${k}" aria-pressed="${respostas[i] === k}">${esc(o.texto)}</button>`).join("")}</div>
    </section>`).join("");
  atualizarProgresso();
}
function atualizarProgresso(){
  const feitas = respostas.filter(r => r !== null).length;
  document.getElementById("quiz-progresso").textContent = feitas < quiz.length ? `${feitas} de ${quiz.length} respondidas` : "Todas respondidas. Veja o resultado abaixo.";
  if (feitas === quiz.length) mostrarResultado();
}
document.getElementById("quiz").addEventListener("click", ev => {
  const b = ev.target.closest(".opcao"); if (!b) return;
  respostas[+b.dataset.p] = +b.dataset.o;
  b.parentElement.querySelectorAll(".opcao").forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
  atualizarProgresso();
});
function calcular(){
  const lados = {verdes:0, negros:0}, quem = {};
  respostas.forEach((r, i) => { const o = quiz[i].opcoes[r]; lados[o.lado]++; quem[o.quem] = (quem[o.quem] || 0) + 1; });
  const lado = lados.negros >= lados.verdes ? "negros" : "verdes";
  const candidatos = Object.entries(quem).sort((a, b) => b[1] - a[1]);
  const doLado = candidatos.find(([id]) => (personagens.find(p => slug(p.nome) === id) || {}).lado === lado) || candidatos[0];
  return {lado, lados, perfil: doLado[0]};
}
function mostrarResultado(){
  const r = calcular(), perfil = quizPerfis[r.perfil], f = fotos[r.perfil];
  const caixa = document.getElementById("resultado");
  caixa.className = `resultado ativo ${r.lado}`;
  document.getElementById("res-lado").textContent = r.lado === "negros" ? "Você estaria com os Negros" : "Você estaria com os Verdes";
  document.getElementById("res-nome").textContent = `Como ${perfil.nome}`;
  document.getElementById("res-frase").textContent = perfil.frase;
  document.getElementById("res-placar").textContent = `Negros ${r.lados.negros} × ${r.lados.verdes} Verdes`;
  const img = document.getElementById("res-foto"); if (f){ img.src = f.arquivo; img.hidden = false; } else img.hidden = true;
  desenharCartao(r, perfil, f);
  flash(caixa);
}
function desenharCartao(r, perfil, f){
  const c = document.getElementById("res-cartao"), ctx = c.getContext("2d"); c.width = 1200; c.height = 630;
  const cor = r.lado === "negros" ? "#d1452f" : "#4f9a63";
  ctx.fillStyle = "#0d0b0c"; ctx.fillRect(0, 0, 1200, 630);
  const g = ctx.createRadialGradient(200, 0, 0, 200, 0, 700); g.addColorStop(0, r.lado === "negros" ? "rgba(209,69,47,.4)" : "rgba(79,154,99,.4)"); g.addColorStop(1, "rgba(0,0,0,0)"); ctx.fillStyle = g; ctx.fillRect(0, 0, 1200, 630);
  const texto = () => {
    ctx.fillStyle = cor; ctx.font = "600 22px Cinzel, Georgia, serif"; ctx.fillText("DE QUE LADO VOCÊ ESTARIA NA DANÇA DOS DRAGÕES?", 72, 80);
    ctx.fillStyle = "#e9e0d2"; ctx.font = "700 64px Cinzel, Georgia, serif"; ctx.fillText(r.lado === "negros" ? "Com os Negros" : "Com os Verdes", 72, 170);
    ctx.font = "400 34px 'Source Serif 4', Georgia, serif"; ctx.fillText(`como ${perfil.nome}`, 72, 225);
    ctx.fillStyle = "#a3968b"; ctx.font = "italic 400 26px 'Source Serif 4', Georgia, serif";
    const palavras = perfil.frase.split(" "); let linha = "", y = 290;
    for (const p of palavras){ const t = linha + p + " "; if (ctx.measureText(t).width > 720){ ctx.fillText(linha, 72, y); linha = p + " "; y += 36; } else linha = t; }
    ctx.fillText(linha, 72, y);
    ctx.fillStyle = "#caa353"; ctx.font = "600 22px Cinzel, Georgia, serif"; ctx.fillText("DIGOUNET.GITHUB.IO/GOT/QUIZ.HTML", 72, 570);
  };
  if (f){
    const img = new Image(); img.onload = () => { ctx.save(); ctx.beginPath(); ctx.arc(980, 315, 170, 0, Math.PI * 2); ctx.closePath(); ctx.clip(); const s = Math.max(340 / img.width, 340 / img.height); ctx.drawImage(img, 980 - img.width * s / 2, 145, img.width * s, img.height * s); ctx.restore(); ctx.lineWidth = 6; ctx.strokeStyle = cor; ctx.beginPath(); ctx.arc(980, 315, 170, 0, Math.PI * 2); ctx.stroke(); texto(); };
    img.src = f.arquivo;
  } else texto();
}
document.getElementById("res-baixar").addEventListener("click", () => {
  const c = document.getElementById("res-cartao");
  try { const a = document.createElement("a"); a.download = "meu-lado-na-danca.png"; a.href = c.toDataURL("image/png"); a.click(); } catch (e) { alert("Não deu para gerar a imagem neste navegador."); }
});
document.getElementById("res-copiar").addEventListener("click", async () => {
  const r = calcular(), perfil = quizPerfis[r.perfil];
  const texto = `Na Dança dos Dragões eu estaria com os ${r.lado === "negros" ? "Negros" : "Verdes"}, como ${perfil.nome}. ${perfil.frase} Descubra o seu lado: https://digounet.github.io/got/quiz.html`;
  const ok = document.getElementById("res-ok");
  try { if (navigator.share){ await navigator.share({text: texto}); ok.textContent = "Compartilhado."; } else { await navigator.clipboard.writeText(texto); ok.textContent = "Texto copiado."; } }
  catch (e) { try { await navigator.clipboard.writeText(texto); ok.textContent = "Texto copiado."; } catch (e2) { ok.textContent = "Não deu para copiar; selecione o texto acima."; } }
  ok.hidden = false; setTimeout(() => { ok.hidden = true; }, 3000);
});
document.getElementById("res-refazer").addEventListener("click", () => { respostas.fill(null); document.getElementById("resultado").className = "resultado"; renderQuiz(); window.scrollTo({top: document.getElementById("quiz").offsetTop - 120, behavior: "smooth"}); });
renderQuiz();
