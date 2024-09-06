const bardo = {
  id: "bardo",
  imagem: "bardo.jpg",
  vida: 90,
  ataque: 80,
  mana: 120,
  vitalidade: 30,
  habilidades: [
      { nome: 'Canto Inspirador', dano: 0, custo: 10, efeito: 'Aumenta o ataque de aliados por um turno' },
      { nome: 'Sono', dano: 0, custo: 20, efeito: 'Induz o sono em um alvo' },
      { nome: 'Visão Verdadeira', dano: 0, custo: 25, efeito: 'Permite ver através de ilusões' },
      { nome: 'Flecha Mágica', dano: 15, custo: 30, efeito: 'Dispara uma flecha mágica com um efeito especial' },
      { nome: 'Curar Feridas', dano: 0, custo: 35, efeito: 'Cura um aliado gravemente ferido' }
  ],
  descricao: "O bardo é um mestre da música e da palavra, capaz de inspirar seus aliados e confundir seus inimigos. Seus encantos e melodias possuem o poder de curar feridas, fortalecer os espíritos e revelar verdades ocultas. Com sua lira em mãos, ele viaja por terras distantes, contando histórias e espalhando sua sabedoria. Sua aparência é frequentemente elegante e charmosa, refletindo sua natureza artística e sociável."
};
const arqueiro = {
  id: "arqueiro",
  imagem: "arqueiro.jpg",
  vida: 110,
  ataque: 100,
  mana: 60,
  vitalidade: 90,
  habilidades: [
    { nome: 'Tiro Certeiro', dano: 10, custo: 15, efeito: 'Ataque básico à distância' },
    { nome: 'Chuva de Seta', dano: 4, custo: 25, efeito: 'Dispara várias setas em um alvo' },
    { nome: 'Disparada Rápida', dano: 4, custo: 20, efeito: 'Ataques rápidos e consecutivos' },
    { nome: 'Armadilha', dano: 20, custo: 30, efeito: 'Coloca uma armadilha no chão, causando dano ao inimigo que pisar' },
    { nome: 'Flecha Explosiva', dano: 30, custo: 35, efeito: 'Dispara uma flecha que explode ao atingir o alvo' }
  ],
  descricao: "O arqueiro é um humano que, mesmo frágil, compensa suas capacidades físicas com sua habilidade no arco e flecha, e além de suas flechas normais, ele se equipa com flechas personalizadas, montadas por ele mesmo, que são capazes de realizar efeitos incríveis, como a flecha explosiva, feita com pólvora dos arredores de um vulcão, a extraordinária flecha perseguidora, feita usando a magia de uma 'fada bumerangue', e diversas outras outras flechas."
};
const guerreiro = {
  id: "guerreiro",
  imagem: "guerreiro.jpg",
  vida: 150,
  ataque: 120,
  mana: 50,
  vitalidade: 120,
  habilidades: [
    { nome: 'Golpe Forte', dano: 10, custo: 10, efeito: 'Ataque básico corpo a corpo, causa dano adicional baseado em força' },
    { nome: 'Ataque Circular', dano: 5, custo: 15, efeito: 'Ataca múltiplos inimigos em uma área circular' },
    { nome: 'Proteção', dano: 0, custo: 20, efeito: 'Aumenta a defesa por um curto período' },
    { nome: 'Investida', dano: 20, custo: 25, efeito: 'Corre em direção ao inimigo, causando dano ao impactar' },
    { nome: 'Rugido', dano: 0, custo: 30, efeito: 'Assusta os inimigos, reduzindo temporariamente seu ataque' }
  ],
  descricao: "O guerreiro é a encarnação da força bruta e da coragem indomável. Seu corpo, forjado em batalhas e treinos intensos, é uma arma por si só. Com uma espada em punho, ele enfrenta qualquer desafio com determinação e bravura. Sua armadura, pesada e imponente, protege seu corpo de qualquer golpe, tornando-o um verdadeiro escudo para seus aliados. A experiência em combate lhe confere uma aura de confiança que intimida seus inimigos. Seus olhos, endurecidos pelas batalhas, transmitem uma calma mortal, pronta para explodir em fúria quando necessário."
};
const mago = {
  id: "mago",
  imagem: "mago.jpg",
  vida: 100,
  ataque: 80,
  mana: 150,
  vitalidade: 80,
  habilidades: [
    { nome: 'Bola de Fogo', dano: 50, custo: 20, efeito: 'Dispara uma bola de fogo, causando dano mágico' },
    { nome: 'Orbe do Vazio', dano: 50, custo: 20, efeito: 'Arremessa um "orbe do vazio" nos inimigos' },
    { nome: 'Rajada de Gelo', dano: 0, custo: 25, efeito: 'Congela os inimigos em uma área, reduzindo sua velocidade' },
    { nome: 'Rajada de Fogo', dano: 20, custo: 25, efeito: 'Queima os inimigos em uma área, causando 5 de dano ao longo do tempo' },
    { nome: 'Cura', dano: 0, custo: 35, efeito: 'Cura 30 de vida' }
  ],
  descricao: "O mago é um ser de conhecimento profundo e poder oculto. Através de incantatos ancestrais e um entendimento íntimo das forças da natureza, ele manipula elementos e invoca criaturas de outros planos. Sua fragilidade física é compensada por uma mente ágil e uma vasta gama de feitiços. Seus olhos, geralmente brilhantes e penetrantes, refletem a imensidão do cosmos que ele busca compreender. Com um simples gesto, ele pode conjurar uma tempestade de raios, erguer barreiras impenetráveis ou curar feridas."
};