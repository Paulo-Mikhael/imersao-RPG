let historia = "";
let momento = 0;

function desaparecerBotao() { // Função gerada pelo Gemini
  document.querySelector('.botao-continuar').remove(); 
}

function mostrarBaloes(momentoIndex) {
  let baloesContainer = document.getElementById("baloes-container");
  let balaoNaDireita = "";
  let balao = "";
  let botaoContinuar = `
    <button class="botao-continuar" onclick="desaparecerBotao(); mostrarBaloes(${momento + 1});">
      Continuar história
    </button>
  `;
  historia = pegarHistoria(protaInput.value);

  if (!historia[momentoIndex]) {
    baloesContainer.innerHTML = `
      <article class="balao ${balaoNaDireita}">
        <h1>Continua...</h1>
      </article>
    `;
    return;
  }

  if (historia[momentoIndex].narrador == "Protagonista") {
    balaoNaDireita = "direita";
  };

  balao = `
    <article class="balao ${balaoNaDireita}">
      <h1>${historia[momentoIndex].narrador}</h1>
      <h2>${historia[momentoIndex].narrativa}</h2>
      ${botaoContinuar}
    </article>
  `

  baloesContainer.innerHTML += `${balao}`;

  momento += 1;
}