// Pagina "antes da T4": resumos por temporada, pendencias e texto para copiar.
function renderAntes(){
  const tAtual = episodios[episodioAtual - 1].t, eAtual = episodios[episodioAtual - 1].e;
  document.getElementById("lista-resumos").innerHTML = [1, 2, 3].map(t => {
    const completa = !modoTempo() || t < tAtual || (t === tAtual && eAtual === temporadas[t]);
    return `<section class="resumo" id="resumo-t${t}"><h3>Temporada ${t}</h3>${completa ? `<ol>${resumos[t].map(f => `<li>${esc(f)}</li>`).join("")}</ol>` : `<p class="vazio">${t > tAtual ? "Você ainda não chegou nessa temporada." : "Termine a temporada para ver o resumo."}</p>`}</section>`;
  }).join("");
  const pend = document.getElementById("pendencias");
  pend.hidden = modoTempo();
  document.getElementById("lista-pendencias").innerHTML = pendencias.map(p => `<li>${esc(p)}</li>`).join("");
}
document.getElementById("copiar-resumo").addEventListener("click", async () => {
  const texto = [1, 2, 3].map(t => `TEMPORADA ${t}\n` + resumos[t].map((f, i) => `${i + 1}. ${f}`).join("\n")).join("\n\n") + "\n\nO QUE FICA EM ABERTO\n" + pendencias.map(p => "- " + p).join("\n") + "\n\nhttps://digounet.github.io/got/antes-da-t4.html";
  const ok = document.getElementById("copiado");
  try { await navigator.clipboard.writeText(texto); ok.textContent = "Resumo copiado."; }
  catch (e) { ok.textContent = "Não deu para copiar automaticamente; selecione o texto da página."; }
  ok.hidden = false; setTimeout(() => { ok.hidden = true; }, 3000);
});
window.buscaLocal = termo => { renderAntes(); if (termo) document.querySelectorAll("#lista-resumos li, #lista-pendencias li").forEach(el => { marcar(el, termo); el.hidden = !normalizar(el.textContent).includes(termo); }); };
window.addEventListener("episodio", renderAntes);
renderAntes();
