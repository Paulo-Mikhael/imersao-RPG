function pegarHistoria(prota, historia) {
  let prisao = [
    {
      narrador: "Narrador",
      narrativa: `Você é um ${prota} que vive pacificamente na cidade, até que um dia, enquanto foi à floresta conseguir comida, sem saber, você entrou em um território de goblins, e eles não gostaram de ver você lá. Depois de uma batalha intensa contra um dos moradores, você sucumbe à derrota. Neste momento você se encontra acorrentado numa cela suja e enferrujada, em sua frente está dois guardas goblins.`
    },
    {
      narrador: "Protagonista",
      narrativa: `Vocês aí, eu já disse que eu só queria comer, não tenho interesse em invadir território de monstro feio e sem higiene para ficar numa cela pior ainda.`
    },
    {
      narrador: "Narrador",
      narrativa: `Um dos goblins olha para você com um sorriso no rosto, mostrando suas mandíbulas afiadas, e solta uma provocação para o outro guarda:`
    },
    {
      narrador: "Globin 1",
      narrativa: `HAHAHAHA Você disse que tinha pego um ${prota} poderosissímo que quase te levou a morte, não uma princesa mimada que exala arrogância, o que ela fez? 'Tacou' faísca em você?`
    },
    {
      narrador: "Narrador",
      narrativa: `O parceiro de vigilância, que antes era seu inimigo e estava ansiando por diversão em uma boa luta, olha para você, com um olhar mais decepcionado do que furioso, e apenas responde seu colega verde:`
    },
    {
      narrador: "Globin 2",
      narrativa: `Calado, se você estivesse no meu lugar, teria virado pó lutando contra o mimadinho aí, mas realmente, se eu soubesse que capturei uma coisa com esse tipo de personalidade, teria matado ao invés de chamar o chefe.`
    },
    {
      narrador: "Globin 1",
      narrativa: `Tu fez o que idio...?`
    },
    {
      narrador: "Narrador",
      narrativa: `Antes de seu amigo terminar a bronca, um terceiro goblin, mais alto e com cicatrizes visíveis, entra na cela. Ele parece ser o líder do grupo, você obtém a confirmação ao ver os dois subordinados fazendo reverência.`
    },
    {
      narrador: "Goblin Líder",
      narrativa: `Ouvi dizer que você é um ${prota} famoso. Dizem que você consegue controlar o fogo. Queremos ver isso. Se fizer um bom show, talvez lhe demos um banquete especial.`
    },
    {
      narrador: "Protagonista",
      narrativa: `Um banquete? Com vocês? Prefiro passar fome. Só quero sair dessa imundice de lugar.`
    },
    {
      narrador: "Narrador",
      narrativa: `O líder sorri, revelando dentes afiados. Ele sinaliza para um dos guardas, que retorna o chefe entregando-lhe uma chave. Após isso, de forma sarcástica, o soberano retruca:`
    },
    {
      narrador: "Goblin Líder",
      narrativa: `Mostre-nos o que você pode fazer, e se conseguir, pensarei nessa possibilidade.`
    },
    {
      narrador: "Narrador",
      narrativa: `O líder abre a cela e liberta você das correntes.`
    },
    {
      narrador: "Protagonista",
      narrativa: `Vamos acabar logo com isso.`
    }
  ];
  let floresta = [
    {
      narrador: "Narrador",
      narrativa: `Você e o Rei goblin sobem as escadas, vocês agora estão na floresta que anteriormente, foi seu palco de batalha, e agorá sera denovo, mas você secretamente, está carregando uma poderosa bola de fogo.`
    },
    {
      narrador: "Rei Goblin",
      narrativa: `Você irá perecer nas minh...`
    },
    {
      narrador: "Narrador",
      narrativa: `Antes da lutar sequer começar você acerta ele em cheio`
    },
    {
      narrador: "Protagonista",
      narrativa: `"Só isso?" diz você, olhando para os guardas que o acompanhavam`
    },
    {
      narrador: "Narrador",
      narrativa: `Os goblins apenas trocam olhares entre si, e fogem para o que parece ser a morada deles, porém, logo você percebe que ele foram atrás de reforços. Você se encontra correndo em direção à cidade.`
    },
    {
      narrador: "Narrador",
      narrativa: `Os goblins apenas trocam olhares entre si, e fogem para o que parece ser a morada deles, porém, logo você percebe que ele foram atrás de reforços. Você se encontra correndo em direção à cidade, e, após agumas horas, você chega à um bar.`
    },
  ];
  let bar = [
    {
      narrador: "Narrador",
      narrativa: `Ao abrir a porta do bar você se depara com várias espécies de criaturas bebendo, porém, sem nenhuma confusão aparente, você se aproxima de um grupo de humanos.`
    },
    {
      narrador: "Protagonista",
      narrativa: `"Eae pessoal", diz você casualmente, ignorando seus machucados causados pelo Rei Goblin. "Poderiam me dar uma ajuda? Me perdi na floresta e estou indo pra cidade, porém preciso de uma escolta...", você mostra o braço ferido.`
    },
  ];

  if (historia == "prisao"){
    return prisao;
  } else if (historia == "floresta"){
    return floresta;
  };
}