let historia = "";
let momento = 0;
let prisao = true;
let floresta = false;
let bar = false;
let florestaPt2 = false;
let cidade = false;

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
  } else if (bar){
    historia = pegarHistoria(protaInput.value, "bar");
  } else if (florestaPt2){
    historia = pegarHistoria(protaInput.value, "florestaPt2");
  } else if (cidade){
    historia = pegarHistoria(protaInput.value, "cidade");
  };

  if (!historia[momentoIndex] && prisao) {
    momento = 0;
    baloesContainer.innerHTML = "";
    mostrarBaloesFloresta();
    return;
  }
  else if (!historia[momentoIndex] && floresta) {
    momento = 0;
    baloesContainer.innerHTML = "";
    mostrarBaloesBar();
    return;
  }
  else if (!historia[momentoIndex] && bar) {
    momento = 0;
    baloesContainer.innerHTML = "";
    mostrarBaloesFlorestaPt2();
    return;
  }
  else if (!historia[momentoIndex] && florestaPt2) {
    momento = 0;
    baloesContainer.innerHTML = "";
    mostrarBaloesCidade();
    return;
  }
  else if (!historia[momentoIndex] && cidade) {
    terminarHistoria();
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
    <img id="icone-personagem" src="personagens/${historia[momentoIndex].imagemUrl}" alt="icone do personagem atual no diálogo">
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
function mostrarBaloesBar(){
  let containerHistoria = document.getElementById("container-historia");
  floresta = false;
  bar = true;
  containerHistoria.style.backgroundImage = "url('imagens/bar-background.jpg')";
  mostrarBaloes(0);
}
function mostrarBaloesFlorestaPt2(){
  let containerHistoria = document.getElementById("container-historia");
  bar = false;
  florestaPt2 = true;
  containerHistoria.style.backgroundImage = "url('imagens/floresta-background.jpg')";
  mostrarBaloes(0);
}
function mostrarBaloesCidade(){
  let containerHistoria = document.getElementById("container-historia");
  florestaPt2 = false;
  cidade = true;
  containerHistoria.style.backgroundImage = "url('imagens/cidade-background.jpg')";
  mostrarBaloes(0);
}
function terminarHistoria(){
  let containerHistoria = document.getElementById("container-historia");
  let containerFinal = document.getElementById("container-fim");
  containerHistoria.style.display = "none";
  containerFinal.style.display = "flex";
};