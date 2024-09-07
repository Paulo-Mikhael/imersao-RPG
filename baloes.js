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

  if (prisao) {
    historia = pegarHistoria(protaInput.value, "prisao");
  } else if (floresta) {
    historia = pegarHistoria(protaInput.value, "floresta");
  } else if (bar) {
    historia = pegarHistoria(protaInput.value, "bar");
  } else if (florestaPt2) {
    historia = pegarHistoria(protaInput.value, "florestaPt2");
  } else if (cidade) {
    historia = pegarHistoria(protaInput.value, "cidade");
  };

  if (!historia[momentoIndex] && prisao) {
    mostrarBaloesFloresta();
    return;
  }
  else if (!historia[momentoIndex] && floresta) {
    mostrarBaloesBar();
    return;
  }
  else if (!historia[momentoIndex] && bar) {
    mostrarBaloesFlorestaPt2();
    return;
  }
  else if (!historia[momentoIndex] && florestaPt2) {
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

function resetarHistoria() {
  momento = 0;
  baloesContainer.innerHTML = "";
  mostrarBaloes(0);
}

function mostrarBaloesPrisao() {
  let containerHistoria = document.getElementById("container-historia");
  prisao = true;
  floresta = false;
  bar = false;
  florestaPt2 = false;
  cidade = false;
  containerHistoria.style.backgroundImage = "url('imagens/prisao-background.jpg')";
  resetarHistoria();
}
function mostrarBaloesFloresta() {
  let containerHistoria = document.getElementById("container-historia");
  prisao = false;
  floresta = true;
  bar = false;
  florestaPt2 = false;
  cidade = false;
  containerHistoria.style.backgroundImage = "url('imagens/floresta-background.jpg')";
  resetarHistoria();
}
function mostrarBaloesBar() {
  let containerHistoria = document.getElementById("container-historia");
  prisao = false;
  floresta = false;
  bar = true;
  florestaPt2 = false;
  cidade = false;
  containerHistoria.style.backgroundImage = "url('imagens/bar-background.jpg')";
  resetarHistoria();
}
function mostrarBaloesFlorestaPt2() {
  let containerHistoria = document.getElementById("container-historia");
  prisao = false;
  floresta = false;
  bar = false;
  florestaPt2 = true;
  cidade = false;
  containerHistoria.style.backgroundImage = "url('imagens/floresta-background.jpg')";
  resetarHistoria();
}
function mostrarBaloesCidade() {
  let containerHistoria = document.getElementById("container-historia");
  prisao = false;
  floresta = false;
  bar = false;
  florestaPt2 = false;
  cidade = true;
  containerHistoria.style.backgroundImage = "url('imagens/cidade-background.jpg')";
  resetarHistoria();
}
function terminarHistoria() {
  let containerHistoria = document.getElementById("container-historia");
  let containerFinal = document.getElementById("container-fim");
  containerHistoria.style.display = "none";
  containerFinal.style.display = "flex";
};