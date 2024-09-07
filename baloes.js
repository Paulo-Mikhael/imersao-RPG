let historia = "";
let momento = 0;
let prisao = true;
let floresta = false;

function desaparecerBotao() { // Função gerada pelo Gemini
  document.querySelector('.botao-continuar').remove(); 
}

function mostrarBaloes(momentoIndex) {
  let balaoNaDireita = "";
  let balao = "";
  let botaoContinuar = `
    <button class="botao-continuar" onclick="desaparecerBotao(); mostrarBaloes(${momento + 1});">
      Continuar história
    </button>
  `;

  if (prisao){
    historia = pegarHistoria(protaInput.value, "prisao");
  } else if (floresta){
    historia = pegarHistoria(protaInput.value, "floresta");
  };

  if (!historia[momentoIndex] && prisao) {
    momento = 0;
    baloesContainer.innerHTML = "";
    mostrarBaloesFloresta();
    return;
  }
  if (!historia[momentoIndex] && floresta) {
    baloesContainer.innerHTML = `
      <article class="balao">
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

function mostrarBaloesFloresta(){
  let containerHistoria = document.getElementById("container-historia");

  prisao = false;
  floresta = true;
  containerHistoria.style.backgroundImage = "url('imagens/floresta-background.jpg')";
  mostrarBaloes(0);
}