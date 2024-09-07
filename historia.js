function pegarHistoria(prota, historia) {
  let protaImg = "";

  if (prota == "mago") {
    protaImg = "mago-pixel-art.jpeg";
  } else if (prota == "guerreiro") {
    protaImg = "guerreiro-pixel-art.jpeg";
  } else if (prota == "arqueiro") {
    protaImg = "arqueiro-pixel-art.jpeg";
  } else if (prota == "bardo") {
    protaImg = "bardo-pixel-art.jpeg";
  }

  let prisao = [
    {
      narrador: "Narrador",
      narrativa: `Você é um ${prota} que vive pacificamente na cidade, até que um dia, enquanto foi à floresta conseguir comida, sem saber, você entrou em um território de goblins, e eles não gostaram de ver você lá. Depois de uma batalha intensa contra um dos moradores, você sucumbe à derrota. Neste momento você se encontra acorrentado numa cela suja e enferrujada, em sua frente está dois guardas goblins.`,
      imagemUrl: "narrador-pixel-art.jpeg"
    },
    {
      narrador: "Protagonista",
      narrativa: `Vocês aí, eu já disse que eu só queria comer, não tenho interesse em invadir território de monstro feio e sem higiene para ficar numa cela pior ainda.`,
      imagemUrl: protaImg
    },
    {
      narrador: "Narrador",
      narrativa: `Um dos goblins olha para você com um sorriso no rosto, mostrando suas mandíbulas afiadas, e solta uma provocação para o outro guarda:`,
      imagemUrl: "narrador-pixel-art.jpeg"
    },
    {
      narrador: "Goblin 1",
      narrativa: `HAHAHAHA Você disse que tinha pego um ${prota} poderosissímo que quase te levou a morte, não uma princesa mimada que exala arrogância, o que ela fez? 'Tacou' faísca em você?`,
      imagemUrl: "goblin-1-pixel-art.jpeg"
    },
    {
      narrador: "Narrador",
      narrativa: `O parceiro de vigilância, que antes era seu inimigo e estava ansiando por diversão em uma boa luta, olha para você, com um olhar mais decepcionado do que furioso, e apenas responde seu colega verde:`,
      imagemUrl: "narrador-pixel-art.jpeg"
    },
    {
      narrador: "Goblin 2",
      narrativa: `Calado, se você estivesse no meu lugar, teria virado pó lutando contra o mimadinho aí, mas realmente, se eu soubesse que capturei uma coisa com esse tipo de personalidade, teria matado ao invés de chamar o chefe.`,
      imagemUrl: "goblin-2-pixel-art.jpeg"
    },
    {
      narrador: "Goblin 1",
      narrativa: `Tu fez o que idio...?`,
      imagemUrl: "goblin-1-pixel-art.jpeg"
    },
    {
      narrador: "Narrador",
      narrativa: `Antes de seu amigo terminar a bronca, um terceiro goblin, mais alto e com cicatrizes visíveis, entra na cela. Ele parece ser o líder do grupo, você obtém a confirmação ao ver os dois subordinados fazendo reverência.`,
      imagemUrl: "narrador-pixel-art.jpeg"
    },
    {
      narrador: "Rei Goblin",
      narrativa: `Ouvi dizer que você é um ${prota} famoso. Dizem que você consegue controlar o fogo. Queremos ver isso. Se fizer um bom show, talvez lhe demos um banquete especial.`,
      imagemUrl: "rei-goblin-pixel-art.jpeg"
    },
    {
      narrador: "Protagonista",
      narrativa: `Um banquete? Com vocês? Prefiro passar fome. Só quero sair dessa imundice de lugar.`,
      imagemUrl: protaImg
    },
    {
      narrador: "Narrador",
      narrativa: `O líder sorri, revelando dentes afiados. Ele sinaliza para um dos guardas, que retorna o chefe entregando-lhe uma chave. Após isso, de forma sarcástica, o soberano retruca:`,
      imagemUrl: "narrador-pixel-art.jpeg"
    },
    {
      narrador: "Rei Goblin",
      narrativa: `Mostre-nos o que você pode fazer, e se conseguir, pensarei nessa possibilidade.`,
      imagemUrl: "rei-goblin-pixel-art.jpeg"
    },
    {
      narrador: "Narrador",
      narrativa: `O líder abre a cela e liberta você das correntes.`,
      imagemUrl: "narrador-pixel-art.jpeg"
    },
    {
      narrador: "Protagonista",
      narrativa: `Vamos acabar logo com isso.`,
      imagemUrl: protaImg
    }
  ];
  let floresta = [
    {
      narrador: "Narrador",
      narrativa: `Você e o Rei goblin sobem as escadas, vocês agora estão na floresta que denovo, será seu palco de batalha, porém, sem a intenção de prolongar a batalha, ou até mesmo entrar nela, você secretamente carrega uma poderosa bola de fogo.`,
      imagemUrl: "narrador-pixel-art.jpeg"
    },
    {
      narrador: "Rei Goblin",
      narrativa: `Você irá perecer nas minh...`,
      imagemUrl: "rei-goblin-pixel-art.jpeg"
    },
    {
      narrador: "Narrador",
      narrativa: `Antes da lutar sequer começar, você acerta ele em cheio.`,
      imagemUrl: "narrador-pixel-art.jpeg"
    },
    {
      narrador: "Protagonista",
      narrativa: `"Só isso?" diz você, olhando para os guardas que o acompanhavam.`,
      imagemUrl: protaImg
    },
    {
      narrador: "Narrador",
      narrativa: `Os goblins apenas trocam olhares entre si, e fogem para o que parece ser a morada deles, porém, logo você percebe que eles foram atrás de reforços. Você se encontra correndo em direção à cidade, e, após agumas horas, você chega à um bar.`,
      imagemUrl: "narrador-pixel-art.jpeg"
    }
  ];
  let bar = [
    {
      narrador: "Narrador",
      narrativa: `Ao abrir a porta do bar você se depara com várias espécies de criaturas bebendo, porém, sem nenhuma confusão aparente, você se aproxima de um grupo de humanos.`,
      imagemUrl: "narrador-pixel-art.jpeg"
    },
    {
      narrador: "Protagonista",
      narrativa: `"Eae pessoal", diz você casualmente, ignorando seus machucados causados pelo Rei Goblin. "Poderiam me dar uma ajuda? Me meti com um Rei Goblin e estou indo pra cidade, porém preciso de uma escolta...", você mostra o braço ferido.`,
      imagemUrl: protaImg
    },
    {
      narrador: "Humano 1",
      narrativa: `Uma aventura é sempre bem-vinda! Mas e essa história de Rei Goblin? Você não parece tão machucado assim, só alguns arranhões.`,
      imagemUrl: "humano-1-pixel-art.jpeg"
    },
    {
      narrador: "Protagonista",
      narrativa: `Ah, é uma longa história. Adoraria conta-la, mas preciso chegar na cidade.`,
      imagemUrl: protaImg
    },
    {
      narrador: "Humana 2",
      narrativa: `Se você promete contar a história por completo, nós te ajudamos. Mas antes, vamos beber algo para celebrar essa nova aventura!`,
      imagemUrl: "humana-2-pixel-art.jpeg"
    },
    {
      narrador: "Narrador",
      narrativa: `Após algum minutos de conversa e bebidas, você e o grupo de aventureiros se preparam para partir. Com o braço enfaixado e o coração cheio de esperança, você se junta aos seus novos companheiros de jornada.`,
      imagemUrl: "narrador-pixel-art.jpeg"
    },
    {
      narrador: "Humano 1",
      narrativa: `Para a cidade!`,
      imagemUrl: "humano-1-pixel-art.jpeg"
    },
    {
      narrador: "Todos",
      narrativa: `Para a cidade!`,
      imagemUrl: "grupo-aventureiros-pixel-art.jpeg"
    },
    {
      narrador: "Narrador",
      narrativa: `E assim, o grupo saiu do bar, rumo a novas aventuras e perigos, com a promessa de uma longa jornada pela frente.`,
      imagemUrl: "narrador-pixel-art.jpeg"
    }
  ];
  let florestaPt2 = [
    {
      narrador: "Narrador",
      narrativa: `O grupo adentrou a floresta, a luz do sol filtrando-se pelas copas das árvores. O ar era úmido e carregado de um perfume adocicado de flores exóticas.`,
      imagemUrl: "narrador-pixel-art.jpeg"
    },
    {
      narrador: "Humano 1",
      narrativa: `Esta floresta é mais densa do que eu imaginava. Teremos que ter cuidado com as criaturas que habitam por aqui.`,
      imagemUrl: "humano-1-pixel-art.jpeg"
    },
    {
      narrador: "Narrador",
      narrativa: `De repente, um ruído alto os alertou. O goblin raivoso aparece, você o reconhece como um dos guardas.`,
      imagemUrl: "narrador-pixel-art.jpeg"
    },
    {
      narrador: "Protagonista",
      narrativa: `É um dos guardas que me capturou, cuidado!`,
      imagemUrl: protaImg
    },
    {
      narrador: "Humana 2",
      narrativa: `Eu cuido dele! Vocês protejam os flancos!`,
      imagemUrl: "humana-2-pixel-art.jpeg"
    },
    {
      narrador: "Narrador",
      narrativa: `O protagonista desenhou sua espada flamejante e, rapidamente, você e o grupo derrotam o goblin.`,
      imagemUrl: "narrador-pixel-art.jpeg"
    },
    {
      narrador: "Humano 2",
      narrativa: `Tem mais vindo, vários, acho melhor nos apressar-mos para a cidade.`,
      imagemUrl: "humana-2-pixel-art.jpeg"
    },
    {
      narrador: "Narrador",
      narrativa: `Após algumas horas de corrida e, as vezes lutas, vocês chegam no seu destino, o que assusta os goblins fazendo-os recuarem.`,
      imagemUrl: "narrador-pixel-art.jpeg"
    }
  ];
  let cidade = [
    {
      narrador: "Narrador",
      narrativa: `Na cidade de Aethel, você escuta um burburinho incomum que tomava conta da taverna "O Dragão Adormecido". A notícia de uma antiga pirâmide descoberta nas proximidades atraía aventureiros de todas as partes.`,
      imagemUrl: "narrador-pixel-art.jpeg"
    },
    {
      narrador: "Protagonista",
      narrativa: "Já ouvi falar dessa pirâmide. Dizem que ela é guardada por armadilhas mortais e que dentro dela existe um tesouro capaz de ressuscitar os mortos.",
      imagemUrl: protaImg
    },
    {
      narrador: "Humano 1",
      narrativa: "Lendas! Mas quem se importa com lendas? Um tesouro assim pode nos garantir uma vida de luxo!",
      imagemUrl: "humano-1-pixel-art.jpeg"
    },
    {
      narrador: "Humana 2",
      narrativa: "É incrível! Parece saída de um sonho.",
      imagemUrl: "humana-2-pixel-art.jpeg"
    },
    {
      narrador: "Protagonista",
      narrativa: "Vocês podem ir, eu vou descansar aqui, lidar com um exército de goblins já foi o suficiente.",
      imagemUrl: protaImg
      
    },
    {
      narrador: "Humano 1",
      narrativa: "Sem essa, você vai descansar e amanhã nós vamos explorar aquela pirâmide.",
      imagemUrl: "humano-1-pixel-art.jpeg"
    },
    {
      narrador: "Humana 2",
      narrativa: "Isso aí molenga, basta dezenas de goblins atacarem e capturarem você, que estava apenas tentando viver a vida, que você vai desistir?",
      imagemUrl: "humana-2-pixel-art.jpeg"
    },
    {
      narrador: "Narrador",
      narrativa: "Após essa motivação, vocês riem e se despedem, cada um seguindo o caminho para sua casa, ansiando pelo dia seguinte. *Fim*",
      imagemUrl: "narrador-pixel-art.jpeg"
    }
  ];

  if (historia == "prisao") {
    return prisao;
  } else if (historia == "floresta") {
    return floresta;
  } else if (historia == "bar") {
    return bar;
  } else if (historia == "florestaPt2") {
    return florestaPt2;
  } else if (historia == "cidade") {
    return cidade;
  };
}