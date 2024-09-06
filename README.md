# Imersão RPG

## O que faz?
### Este código JavaScript cria uma interface de usuário básica para um jogo de RPG (Role-Playing Game). A aplicação permite ao jogador:

* Selecionar um personagem: Ao iniciar o jogo, o usuário é apresentado com uma lista de personagens, cada um com sua própria imagem.
* Visualizar atributos: Ao clicar em um personagem, uma nova tela é exibida com os atributos, habilidades e uma descrição detalhada do personagem.
* Iniciar a aventura: Um botão "Iniciar Aventura!" é apresentado após a seleção do personagem, sinalizando o início da jornada do jogador no mundo do RPG.

## Estrutura do código:
* Array personagens: Armazena informações sobre cada personagem, incluindo nome, imagem, atributos (vida, ataque, mana, vitalidade) e habilidades.
* Função prepararTelaInicial(): Cria a interface inicial, exibindo os personagens disponíveis para seleção.
* Função abrirTelaDeAtributos(): Ao clicar em um personagem, esta função renderiza a tela de atributos correspondente.
* Função renderizarTelaDeAtributo(): Cria o HTML para a tela de atributos, exibindo as informações do personagem selecionado.

## Rodando Localmente:
### Pré-requisitos:

* Um navegador web moderno (Chrome, Firefox, Edge, etc.).
* Um editor de código (Visual Studio Code, Sublime Text, etc.).
* Conhecimento básico de HTML, CSS e JavaScript.

### Instruções:

* Crie um novo arquivo HTML:
* Cole o código JavaScript fornecido dentro da tag <script> no seu arquivo HTML.
* Crie as divs e classes necessárias para estilizar a interface com CSS.
* Inclua as imagens dos personagens e ícones na mesma pasta do seu arquivo HTML.
* Abra o arquivo HTML no seu navegador:
* Dê um duplo clique no arquivo HTML para abri-lo no seu navegador padrão.
* A página do jogo deve carregar e exibir a tela inicial com os personagens.