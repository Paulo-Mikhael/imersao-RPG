let personagens = [mago, guerreiro, arqueiro, bardo];
let containerPrincipal = document.getElementById("container-principal");
let containerHistoria = document.getElementById("container-historia");
let protaInput = document.getElementById("prota-input");
let conteudoInicial = "";

function iniciarHistoria(personagem){
  containerPrincipal.remove();
  containerHistoria.style.display = "block";
  protaInput.value = personagem;
};

function prepararTelaInicial() {
  let tags = "";

  for (let personagem of personagens) {
    tags += `    
    <div class="personagem-container" onclick="abrirTelaDeAtributos('${personagem.id}')">
      <img src="imagens/${personagem.imagem}" alt="">
    </div>
    `
  };

  tags = `<div class="personagens-container">${tags}</div>`;

  conteudoInicial = `<h1>Escolha uma classe para continuar a história:</h1>${tags}`;
  containerPrincipal.innerHTML += tags;
}

function abrirTelaDeAtributos(id) {
  let magoId = personagens[0].id;
  let guerreiroId = personagens[1].id;
  let arqueiroId = personagens[2].id;
  let necromanteId = personagens[3].id;

  if (id == magoId) {
    renderizarTelaDeAtributo("mago");
  };
  if (id == guerreiroId) {
    renderizarTelaDeAtributo("guerreiro");
  };
  if (id == arqueiroId) {
    renderizarTelaDeAtributo("arqueiro");
  };
  if (id == necromanteId) {
    renderizarTelaDeAtributo("necromante");
  };
}

function renderizarTelaDeAtributo(personagem) {
  let containerTelaAtributos = "";
  let telaAtributos = "";
  let personagemIndex = 0;
  let habilidades = "";
  let botaoIniciar = "";

  if (personagem == "mago") {
    personagemIndex = 0;
  }
  if (personagem == "guerreiro") {
    personagemIndex = 1;
  }
  if (personagem == "arqueiro") {
    personagemIndex = 2;
  }
  if (personagem == "necromante") {
    personagemIndex = 3;
  }
  if (personagem == "") {
    containerPrincipal.innerHTML = conteudoInicial;
    return;
  };

  telaAtributos = `
      <span class="texto-atributos">
        <h2>
          ${personagens[personagemIndex].id}
        </h2>
        <h3>
          ${personagens[personagemIndex].descricao}
        </h3>
        <span class="status-atributos">
          <p>
            <img src="imagens/coracao.png" alt="">
            Vida: ${personagens[personagemIndex].vida}
          </p>
          <p>
            <img src="imagens/ataque.png" alt="">
            Ataque: ${personagens[personagemIndex].ataque}
          </p>
          <p>
            <img src="imagens/pocao.png" alt="">
            Mana: ${personagens[personagemIndex].mana}
          </p>
          <p>
            <img src="imagens/felicidade.png" alt="">
            Vitalidade: ${personagens[personagemIndex].vitalidade}
          </p>
        </span>
    `

  for (let habilidade of personagens[personagemIndex].habilidades) {
    habilidades += `
      <div class="habilidade">
        <p class="habilidade-titulo">${habilidade.nome}</p>
        <p>Dano: ${habilidade.dano}</p>
        <p>Custo: ${habilidade.custo}</p>
        <p>Efeito: ${habilidade.efeito}</p>
      </div>
    `
  };

  telaAtributos += `
      <span class="habilidades-atributos">
        ${habilidades}
      </span>
    </span>
  `;

  telaAtributos += `
      <figure class="imagem-atributos">
        <img src="imagens/${personagens[personagemIndex].imagem}" alt="">
      </figure>
    `;

  botaoIniciar = `
    <button onclick="iniciarHistoria('${personagens[personagemIndex].id}'); mostrarBaloes(0);" class="botao-comecar">
      Iniciar Aventura!
    </button>
  `

  containerTelaAtributos = `
    <div class="janela-atributos" id="atributos-popup">
      <img src="imagens/sair-icone.png" class="botao-sair" onclick="renderizarTelaDeAtributo('')" alt="botão vermelho com um X no meio, para fechar a tela de atributos do personagem">
      ${telaAtributos}
    </div>
    ${botaoIniciar}
  `;

  containerPrincipal.innerHTML += containerTelaAtributos;
};

prepararTelaInicial(); // Chamando função para redenrizar os personagens ao iniciar a aplicação