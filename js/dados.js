// Dados do infografico Da Danca ao Trono. Texto em portugues com acento; chaves e comentarios sem.
// Gerado a mao; as fotos (mapa `fotos` e `creditos`) sao regravadas por scripts/injetar_fotos.py.

const casas = [
  {
    nome:"Targaryen", sede:"Pedra do Dragão e Porto Real", campo:"#17161c", carga:"#c8362b", sigilo:"🐉",
    lado:"dividida", tipos:["linhagem","profecia","castelo"],
    cdd:[
      "Viserys I, o rei que divide o reino sem querer (T1)",
      "Rhaenyra, herdeira escolhida: toma Porto Real, senta no Trono de Ferro e endurece a cada episódio (T3)",
      "Daemon, o Príncipe Rebelde, tio e marido de Rhaenyra",
      "Rhaenys, a Rainha Que Nunca Foi, morta em Rook's Rest (T2)",
      "Aegon II, Aemond, Helaena e Daeron, filhos de Alicent: Helaena morre na T3; Daeron é proclamado rei por Ormund em Tumbleton",
      "Jacaerys (morto na Goela, T3), Lucerys (morto por Vhagar, T1), Joffrey, Aegon e Viserys, filhos de Rhaenyra",
      "Baela e Rhaena, filhas de Daemon e Laena; Rhaena reivindica o dragão selvagem Sheepstealer (T3)",
      "Jaehaerys I, o Velho Rei, no Grande Conselho que abre a série"
    ],
    got:[
      "Daenerys, Mãe dos Dragões",
      "Viserys III, irmão de Daenerys",
      "Rhaegar e Aerys II, o Rei Louco, nas visões de Bran",
      "Jon Snow, na verdade Aegon, filho de Rhaegar e Lyanna Stark",
      "Meistre Aemon, da Patrulha da Noite"
    ],
    ligacao:"Daenerys, Viserys III, Rhaegar e Jon Snow descendem de Rhaenyra e Daemon pelo filho caçula dos dois, Viserys II (veja a linhagem acima). A profecia que Viserys I sussurra a Rhaenyra, o sonho de Aegon sobre a Canção de Gelo e Fogo, é a mesma que Melisandre persegue em GoT, e na T3 Rhaenyra a usa em praça pública para justificar a coroa. O arco dela, rainha que o povo aclama e depois teme, antecipa o de Daenerys em Porto Real. Do lado dos Verdes, a linha de Alicent no trono acaba na própria Dança."
  },
  {
    nome:"Hightower", sede:"Vilavelha, a Torre Alta · Campina", campo:"#d9d9d6", carga:"#b0332a", sigilo:"🔥",
    lado:"verdes", tipos:["linhagem","castelo"],
    cdd:[
      "Otto Hightower, Mão de três reis; decapitado por Rhaenyra quando Porto Real cai (T3)",
      "Alicent, rainha de Viserys I e mãe de Aegon II: entrega a cidade a Rhaenyra e envenena o próprio filho Aemond em Harrenhal (T3)",
      "Lorde Ormund Hightower, Senhor de Vilavelha: toma Tumbleton, proclama Daeron rei, cunha moedas e morre quando Ulf queima a cidade (T3)",
      "Gwayne, irmão de Alicent: abandona Criston, salva Ormund dos assassinos e liberta Corlys (T2 e T3); Ser Hobert (T2)"
    ],
    got:[
      "Ser Gerold Hightower, o Touro Branco, Lorde Comandante da Guarda Real do Rei Louco: morre na Torre da Alegria lutando contra Ned Stark (T6)",
      "Vilavelha e a Cidadela, onde Sam Tarly estuda para meistre (T6 e T7)"
    ],
    ligacao:"Mesma casa, 170 anos depois, ainda guardando reis Targaryen: Gerold Hightower morre defendendo o segredo de Lyanna e Rhaegar. A Cidadela dos meistres, que forma os Mellos e Orwyles da Dança e o Sam de GoT, fica em Vilavelha, cidade dos Hightower. O vestido verde de Alicent no torneio dá nome ao partido dos Verdes; na T3, é Ormund quem carrega a bandeira verde até o fim."
  },
  {
    nome:"Velaryon", sede:"Driftmark, a Maré Alta · Baía da Água Negra", campo:"#2a7f7a", carga:"#9fc9c6", sigilo:"🌊",
    lado:"negros", tipos:["livros","castelo"],
    cdd:[
      "Corlys, a Serpente do Mar: perde Maré Alta para a Triarquia, naufraga, é capturado por Jon Roxton e libertado por Daeron e Gwayne (T3)",
      "Rhaenys Targaryen, sua esposa (T1 e T2)",
      "Laenor, primeiro marido de Rhaenyra, e Laena, segunda esposa de Daemon (T1)",
      "Vaemond, irmão de Corlys, decapitado por Daemon (T1)",
      "Addam e Alyn de Hull, bastardos de Corlys: Alyn mata Lohar na Goela e vira herdeiro de Driftmark; Addam monta Seasmoke (T3)",
      "Jacaerys, Lucerys e Joffrey, Velaryon no nome, Strong no sangue"
    ],
    got:[
      "Nenhum Velaryon aparece na série",
      "Nos livros, Aurane Waters, bastardo de Driftmark, vira mestre dos navios de Cersei; Monford Velaryon segue Stannis",
      "Pedra do Dragão, vizinha de Driftmark, é a sede de Stannis e depois de Daenerys"
    ],
    ligacao:"A casa sobrevive à Dança pela neta de Corlys: Baela Targaryen, filha de Daemon, casa com Alyn Velaryon, e os Velaryon da época de GoT descendem dos dois. Na TV, a ligação é só geográfica: a frota de Corlys domina o mesmo mar que Stannis e Daenerys cruzam para chegar a Porto Real, e a Goela onde Jace morre é a entrada da Baía da Água Negra."
  },
  {
    nome:"Strong", sede:"Harrenhal · Terras Fluviais", campo:"#3b5aa6", carga:"#b33a2b", sigilo:"🏰",
    lado:"dividida", tipos:["castelo","papel"],
    cdd:[
      "Lyonel Strong, Mão do Rei depois de Otto (T1)",
      "Harwin Quebra-Ossos, pai verdadeiro de Jacaerys, Lucerys e Joffrey (T1)",
      "Larys Pé-Torto, mestre dos sussurros: capturado com Aegon II, entrega Otto a Daemon e, no fim, abandona Aegon (T3)",
      "Ser Simon Strong, castelão de Harrenhal, morto por Aemond (T3)",
      "Alys Rivers, a bruxa de Harrenhal, que diz ter sido amaldiçoada com a imortalidade (T3)"
    ],
    got:[
      "A casa não existe mais em GoT",
      "Harrenhal: Arya serve de copeira a Tywin Lannister (T2)",
      "Mindinho recebe o título de Senhor de Harrenhal (T2); Roose Bolton ocupa o castelo depois (T3)"
    ],
    ligacao:"O castelo é o elo. A série abre com o Grande Conselho em Harrenhal, os Strong são os senhores do lugar e Daemon e Aemond passam temporadas inteiras lá dentro. Em GoT, o mesmo castelo arruinado e “amaldiçoado” é prêmio político. Larys faz exatamente o trabalho de Varys: ouvir tudo e trocar de lado na hora certa. E Alys Rivers, imortal que não envelhece, é a Melisandre da Dança."
  },
  {
    nome:"Lannister", sede:"Rochedo Casterly · Terras Ocidentais", campo:"#a3141c", carga:"#d9a52b", sigilo:"🦁",
    lado:"verdes", tipos:["linhagem","papel"],
    cdd:[
      "Jason Lannister, Senhor do Rochedo, pretendente rejeitado por Rhaenyra: derrotado por Daemon, tem a cabeça entregue por Roderick Dustin (T3)",
      "Tyland Lannister, gêmeo de Jason: jogado ao mar por Lohar na Goela, sobrevive e se junta a Aegon II em Rook's Rest (T3)"
    ],
    got:[
      "Tywin, Cersei, Jaime e Tyrion",
      "Kevan e Lancel Lannister"
    ],
    ligacao:"Tywin descende de Jason. Os gêmeos Jason e Tyland antecipam Jaime e Cersei, e a dupla ambição e dinheiro já está lá: Tyland cuida do ouro da coroa, como Tywin e Tyrion farão, e é o tesouro escondido por ele que deixa Rhaenyra sem dinheiro na T3. Nos livros, Tyland acaba Mão do Rei de Aegon III, o filho de Rhaenyra."
  },
  {
    nome:"Stark", sede:"Winterfell · O Norte", campo:"#8a8f99", carga:"#e6e8ec", sigilo:"🐺",
    lado:"negros", tipos:["linhagem","castelo","profecia"],
    cdd:[
      "Lorde Rickon Stark, que jura lealdade a Rhaenyra como herdeira (T1)",
      "Cregan Stark, Senhor de Winterfell, recebe Jacaerys e o leva ao topo da Muralha (T2)",
      "Na T3 o Norte luta pelos Lobos do Inverno de Roderick Dustin e pelos Manderly, vassalos dos Stark; Cregan fica fora da temporada"
    ],
    got:[
      "Ned, Catelyn, Robb, Sansa, Arya, Bran e Rickon",
      "Jon Snow, criado como bastardo de Ned",
      "Benjen, na Patrulha da Noite, e Lyanna, nas visões de Bran"
    ],
    ligacao:"Ned descende de Cregan, e o nome Rickon volta no caçula dele. Na T2, Jacaerys fecha o Pacto de Gelo e Fogo: uma princesa Targaryen casaria com um Stark. O pacto fica por cumprir até Rhaegar e Lyanna, cujo filho é Jon Snow, gelo e fogo na mesma pessoa. A Muralha e a Patrulha da Noite, cenário de Jon, já aparecem com Cregan e Jacaerys. Nos livros, Cregan ainda casa com Black Aly Blackwood, a arqueira que mata Criston Cole na T3."
  },
  {
    nome:"Baratheon", sede:"Ponta Tempestade · Terras da Tempestade", campo:"#d9a52b", carga:"#1b1a20", sigilo:"🦌",
    lado:"verdes", tipos:["linhagem","castelo"],
    cdd:[
      "Lorde Boremund Baratheon, tio de Rhaenys, aliado dela no Grande Conselho (T1)",
      "Lorde Borros Baratheon, Senhor de Ponta Tempestade, que recebe Aemond e Lucerys na noite em que Lucerys morre (T1), e suas quatro filhas",
      "Na T3, os assassinos que Rhaenyra manda a Tumbleton se disfarçam de enviados Baratheon"
    ],
    got:[
      "Robert, Stannis e Renly",
      "Shireen, filha de Stannis, e Gendry, bastardo de Robert",
      "Joffrey, Tommen e Myrcella, Baratheon só no nome"
    ],
    ligacao:"Robert é bisneto de Aegon V, portanto descende de Rhaenyra e Daemon: é esse “sangue do dragão” que legitima a coroa dele depois da rebelião. Rhaenys, a Rainha Que Nunca Foi, é filha de uma Baratheon. E Ponta Tempestade, onde Lucerys cai, é o castelo que Renly cerca, onde Davos leva Melisandre para parir a sombra (T2) e que Gendry recebe de Daenerys (T8)."
  },
  {
    nome:"Arryn", sede:"Ninho da Águia · O Vale", campo:"#7fb3e0", carga:"#f2f5f9", sigilo:"🦅",
    lado:"negros", tipos:["linhagem","castelo"],
    cdd:[
      "Rainha Aemma Arryn, primeira esposa de Viserys I e mãe de Rhaenyra, morta no parto no primeiro episódio",
      "Lady Jeyne Arryn, a Donzela do Vale: abriga Rhaena e os filhos pequenos de Rhaenyra (T2); manda ouro a Daemon e avisa quando Rhaena foge com Sheepstealer (T3)"
    ],
    got:[
      "Jon Arryn, a Mão do Rei cuja morte abre a série",
      "Lysa Arryn, irmã de Catelyn, e Robin Arryn, o menino da Porta da Lua"
    ],
    ligacao:"Rhaenyra é meio-Arryn. Como Daenerys, Viserys, Rhaegar e Jon Snow descendem dela, todos carregam sangue Arryn. O Ninho da Águia, refúgio dos filhos de Rhaenyra na T2, volta como refúgio de Sansa e prisão de Tyrion em GoT."
  },
  {
    nome:"Tully", sede:"Correrrio · Terras Fluviais", campo:"#2b5fa8", carga:"#b4432c", sigilo:"🐟",
    lado:"negros", tipos:["linhagem"],
    cdd:[
      "Lorde Grover Tully, velho e acamado, Senhor de Correrrio (T2)",
      "Ser Oscar Tully, que leva os senhores do Tridente para Rhaenyra (T2); seu exército embosca Criston Cole e cerca Tumbleton (T3)"
    ],
    got:[
      "Hoster Tully e os filhos Catelyn Stark, Lysa Arryn e Edmure",
      "Brynden Tully, o Peixe Negro"
    ],
    ligacao:"Hoster descende de Oscar. Catelyn é Tully, então os filhos de Ned, de Robb a Rickon, são meio-Tully. As Terras Fluviais que Oscar reúne para Rhaenyra são as mesmas onde Robb vence batalhas e Edmure se casa no Casamento Vermelho."
  },
  {
    nome:"Frey", sede:"As Gêmeas · Terras Fluviais", campo:"#4e6380", carga:"#c9d2de", sigilo:"🌉",
    lado:"negros", tipos:["linhagem","papel","castelo"],
    cdd:[
      "Lorde Forrest e Lady Sabitha Frey, senhores das Gêmeas (T2 e T3)",
      "Jacaerys negocia com eles a travessia do exército de Cregan Stark; os Frey exigem Harrenhal em troca (T2)"
    ],
    got:[
      "Walder Frey e a prole numerosa",
      "O Casamento Vermelho, onde morrem Robb, Catelyn e Talisa (T3)",
      "Arya mata Walder e envenena os Frey (T6 e T7)"
    ],
    ligacao:"Walder descende de Forrest. O roteiro se repete quase igual: um Stark precisa cruzar as Gêmeas para ir à guerra e os Frey cobram caro. Jacaerys promete Harrenhal; Robb promete um casamento. O resultado da segunda promessa todo mundo conhece."
  },
  {
    nome:"Manderly", sede:"Porto Branco · O Norte", campo:"#2e6f6a", carga:"#e8e8e8", sigilo:"🧜",
    lado:"negros", tipos:["linhagem","castelo"],
    cdd:[
      "Ser Torrhen Manderly, mandado pelo pai, Lorde Desmond, para servir Rhaenyra: vira mestre da moeda e leva a culpa pelo cofre vazio (T3)"
    ],
    got:[
      "Lorde Wyman Manderly, Senhor de Porto Branco, entre os lordes que proclamam Jon Snow Rei do Norte (T6)",
      "Nos livros, Wyman é o lorde gordo que engana Frey e Bolton e esconde Rickon Stark"
    ],
    ligacao:"Wyman descende dos Manderly de Torrhen. Porto Branco, a única cidade do Norte, manda homens para o sul pelos Targaryen na Dança e, em GoT, está na sala quando o Norte escolhe Jon. É a casa que sempre fica com os Stark."
  },
  {
    nome:"Royce", sede:"Runestone · O Vale", campo:"#9a6a2a", carga:"#d7b36b", sigilo:"🛡️",
    lado:"neutra", tipos:["linhagem","castelo"],
    cdd:[
      "Lady Rhea Royce, de Runestone, primeira esposa de Daemon, que a chama de “vadia de bronze” e a mata no Vale (T1)",
      "Ser Gerold Royce, primo de Rhea, que acusa Daemon"
    ],
    got:[
      "Ser Waymar Royce, o patrulheiro morto por um Caminhante Branco na primeira cena da série (T1)",
      "Lorde Yohn Royce, o Yohn Bronze, Senhor de Runestone, que treina Robin Arryn e senta no conselho que escolhe Bran rei (T8)"
    ],
    ligacao:"Mesma casa, mesmo castelo. Waymar é filho de Yohn Royce. O apelido de Rhea e o de Yohn vêm da mesma armadura de bronze com runas, símbolo da casa. A Daemon, os Royce devem uma esposa; a GoT, devem a primeira morte da série."
  },
  {
    nome:"Blackwood e Bracken", sede:"Raventree Hall e Stone Hedge · Terras Fluviais", campo:"#1b1a20", carga:"#c99a2e", sigilo:"🌳",
    lado:"dividida", tipos:["linhagem","livros"],
    cdd:[
      "Willem Blackwood mata Jerrel Bracken na apresentação dos pretendentes de Rhaenyra (T1)",
      "A Batalha do Moinho em Chamas: Blackwood pelos Negros, Bracken pelos Verdes (T2)",
      "Alysanne Blackwood, a Black Aly, arqueira que mata Criston Cole com uma flecha quando ele pede um duelo (T3)"
    ],
    got:[
      "A rixa entre as duas casas quase não aparece na série",
      "Nos livros, Aegon V casa com Betha Blackwood; Brynden Rivers, o Corvo de Sangue, é filho de Aegon IV com uma Blackwood; e Black Aly casa com Cregan Stark"
    ],
    ligacao:"Pela avó Betha Blackwood, Daenerys, Jon Snow e até Robert Baratheon têm sangue Blackwood (veja Aegon V na linhagem). Na série, o Corvo de Três Olhos que treina Bran nunca é nomeado; nos livros, é um meio-Blackwood. E a arqueira da T3 vira, nos livros, Senhora de Winterfell ao lado de Cregan."
  },
  {
    nome:"Cole", sede:"Blackhaven · Marcas Dornesas", campo:"#3a3a40", carga:"#8c8c94", sigilo:"⚔️",
    lado:"verdes", tipos:["castelo","papel"],
    cdd:[
      "Ser Criston Cole, o Fazedor de Reis: guarda pessoal de Rhaenyra, depois homem de Alicent, Lorde Comandante da Guarda Real e Mão de Aegon II",
      "Emboscado pelos Tully, desafia Roderick Dustin e Oscar Tully para um duelo e morre com uma flecha de Black Aly Blackwood (T3)",
      "Filho do intendente do Senhor de Blackhaven, sem casa nobre própria"
    ],
    got:[
      "Beric Dondarrion, Senhor de Blackhaven, líder da Irmandade sem Estandartes, morto e ressuscitado seis vezes",
      "A Guarda Real de GoT: Jaime Lannister, o Regicida, e Barristan Selmy"
    ],
    ligacao:"Criston cresceu em Blackhaven, o castelo de Beric Dondarrion. E os dois cavaleiros brancos mais famosos de cada série quebram o mesmo juramento, em sentidos opostos: Criston coroa um rei que não deveria reinar; Jaime mata um rei que não deveria viver."
  },
  {
    nome:"Darklyn", sede:"Duskendale (Valdocaso) · Terras da Coroa", campo:"#2c2c34", carga:"#b9b9c4", sigilo:"🔷",
    lado:"negros", tipos:["livros","papel"],
    cdd:[
      "Ser Steffon Darklyn, Guarda Real fiel a Rhaenyra, que morre queimado tentando montar o dragão Seasmoke (T2)"
    ],
    got:[
      "A casa já não existe em GoT",
      "Nos livros: o Desafio de Duskendale. Lorde Denys Darklyn prende o Rei Louco; Ser Barristan Selmy, conselheiro de Daenerys em GoT, o resgata; Tywin executa a casa inteira"
    ],
    ligacao:"A família que morre por um Targaryen na Dança é a mesma que, um século depois, sequestra outro e é apagada do mapa. É a história que faz a fama de Barristan Selmy, o velho cavaleiro que Daenerys acolhe em GoT."
  },
  {
    nome:"Westerling", sede:"O Penhasco · Terras Ocidentais", campo:"#c9b793", carga:"#f1ebdc", sigilo:"🐚",
    lado:"neutra", tipos:["livros"],
    cdd:[
      "Ser Harrold Westerling, Lorde Comandante da Guarda Real de Viserys I, que renuncia quando Criston Cole é mandado matar Rhaenyra (T1)"
    ],
    got:[
      "Nenhum Westerling aparece na série",
      "Nos livros, Jeyne Westerling, do Penhasco, é a esposa de Robb Stark; a série a trocou por Talisa Maegyr, de Volantis"
    ],
    ligacao:"Ligação só literária. Nos livros, a esposa que custa a Robb a aliança com os Frey é da mesma casa do cavaleiro que se recusa a matar Rhaenyra."
  }
];


const eventos = {
  "moinho": {nome:"Batalha do Moinho em Chamas", ep:"T2E3", titulo:"The Burning Mill", onde:"Terras Fluviais, entre Raventree Hall e Stone Hedge", lados:"Blackwood (Negros) contra Bracken (Verdes)",
    descricao:"A rixa de mil anos entre Blackwood e Bracken vira a primeira batalha da Dança: os dois lados se matam num moinho em chamas antes de qualquer dragão aparecer. Daemon, de Harrenhal, passa a recrutar os sobreviventes.", dragoes:""},
  "ponta-tempestade": {nome:"Perseguição sobre Ponta Tempestade", ep:"T1E10", titulo:"The Black Queen", onde:"Baía dos Naufrágios, Ponta Tempestade", lados:"Aemond (Verdes) contra Lucerys (Negros)",
    descricao:"Lucerys vai pedir o apoio de Borros Baratheon e encontra Aemond no salão. Na tempestade, Vhagar persegue Arrax e, escapando ao controle de Aemond, devora dragão e cavaleiro. É a morte que começa a guerra.", dragoes:"Arrax"},
  "rooks-rest": {nome:"Batalha de Rook's Rest", ep:"T2E4", titulo:"The Red Dragon and the Gold", onde:"Rook's Rest, Terras da Coroa", lados:"Verdes (Criston, Aegon II, Aemond) contra Negros (Rhaenys)",
    descricao:"Criston Cole cerca Rook's Rest e Rhaenys voa em Meleys para defender o castelo. Aemond em Vhagar e Aegon em Sunfyre a cercam no ar. Rhaenys escolhe lutar e cai; Aegon e Sunfyre ficam gravemente feridos. Criston desfila a cabeça de Meleys por Porto Real.", dragoes:"Meleys"},
  "goela": {nome:"Batalha da Goela", ep:"T3E1", titulo:"Salt and Sea, Fire and Blood", onde:"A Goela, entrada da Baía da Água Negra", lados:"Negros (frota Velaryon, Vermax, Moondancer, Sheepstealer) contra a Triarquia",
    descricao:"A frota da Triarquia, comandada por Sharako Lohar, ataca a frota Velaryon e saqueia Maré Alta. Jace prende a mãe em Pedra do Dragão e voa com Baela. Rhaena chega em Sheepstealer sem controlá-lo e o dragão ataca os dois lados. Um escorpião derruba Vermax; Jace sobe à tona e morre sob as flechas. Corlys naufraga e Alyn mata Lohar.", dragoes:"Vermax"},
  "lannister": {nome:"Derrota do exército Lannister", ep:"T3E1", titulo:"Salt and Sea, Fire and Blood", onde:"Terras Fluviais", lados:"Negros (Daemon, senhores do Tridente, Lobos do Inverno) contra Verdes (Jason Lannister)",
    descricao:"Daemon, com os senhores do Tridente e os Lobos do Inverno de Roderick Dustin, destrói o exército que Jason Lannister trazia do Rochedo Casterly. Roderick entrega a cabeça de Jason a Daemon.", dragoes:""},
  "porto-real": {nome:"Queda de Porto Real", ep:"T3E2", titulo:"Queen's Landing", onde:"Porto Real", lados:"Negros (Rhaenyra, Daemon, Hugh, Ulf) contra a corte de Aegon II",
    descricao:"Com Luthor Largent entregando a Patrulha da Cidade, Rhaenyra, Daemon, Hugh e Ulf pousam na cidade com quatro dragões. Aegon já fugiu. Larys entrega Otto preso; Rhaenyra o decapita e Daemon decapita Jasper Wylde. Rhaenyra senta no Trono de Ferro.", dragoes:""},
  "harrenhal": {nome:"Retomada de Harrenhal", ep:"T3E2", titulo:"Queen's Landing", onde:"Harrenhal, Terras Fluviais", lados:"Aemond (Verdes) contra a guarnição de Daemon",
    descricao:"Aemond chega a Harrenhal em Vhagar, mata o castelão Simon Strong e, ferido, pede ajuda a Alys Rivers. Addam, Hugh e Ulf, que esperavam para emboscá-lo, já tinham ido embora por conselho de Alys.", dragoes:""},
  "emboscada-tully": {nome:"Emboscada dos Tully", ep:"T3E6", titulo:"Faceless Men", onde:"Terras Fluviais", lados:"Negros (Oscar Tully, Roderick Dustin, Black Aly) contra Verdes (Criston Cole)",
    descricao:"Depois de chegar tarde a uma ponte queimada e ser abandonado por Gwayne, Criston Cole é emboscado pelo exército de Oscar Tully e Roderick Dustin. Pede um duelo aos dois; Alysanne Blackwood o mata com uma flecha antes que alguém aceite.", dragoes:""},
  "tumbleton": {nome:"Batalha de Tumbleton", ep:"T3E8", titulo:"The Treasons at Tumbleton", onde:"Tumbleton, Campina", lados:"Negros (Daemon, Tully, Lobos do Inverno) contra Verdes (Ormund, Daeron, Jon Roxton), com Ulf traindo",
    descricao:"Daemon e o exército Tully cercam a cidade tomada por Ormund, que enfileira crianças nas muralhas para segurar Caraxes. Os Lobos do Inverno escalam as muralhas e Caraxes derruba o portão. Ulf, comprado por Ormund, monta Silverwing e queima tudo, matando os dois lados: Ormund e Roderick morrem lutando um contra o outro e Kat, mulher de Hugh, morre no incêndio. Corlys convence Daemon a recuar; Daeron some.", dragoes:""}
};

const personagens = [
  {nome:"Rhaenyra Targaryen", desde:"T1E1", ep:"A rainha dos Negros", casa:"Targaryen", lado:"negros", dragao:"Syrax", estado:"vivo",
   ate:"Toma Porto Real e senta no Trono de Ferro (T3E2). Executa Otto, serve ratos aos nobres, manda matar o Alto Septão e prende a própria Baela.",
   got:"Ancestral direta de Daenerys, Viserys III e Rhaegar. O arco da rainha aclamada que o povo passa a temer antecipa Daenerys em Porto Real (T8)."},
  {nome:"Daemon Targaryen", desde:"T1E1", ep:"O Príncipe Rebelde", casa:"Targaryen", lado:"negros", dragao:"Caraxes", estado:"vivo",
   ate:"Toma a cidade com Luthor Largent, decapita Jasper Wylde, comanda o cerco de Tumbleton e esconde de Rhaenyra que Rhaena montava Sheepstealer (T3).",
   got:"Ancestral direto de Daenerys e Jon Snow. Nos livros, a espada dele, Irmã Negra, acaba com o Corvo de Sangue."},
  {nome:"Viserys I Targaryen", desde:"T1E1", ep:"O rei que dividiu o reino", casa:"Targaryen", lado:"outros", dragao:"Balerion, depois nenhum", estado:"morto", morte:{ep:"T1E8", onde:"Fortaleza Vermelha, Porto Real", como:"Na cama, consumido pela doença. As últimas palavras, sobre a profecia de Aegon, Alicent entende como um pedido para coroar o filho dela."},
   ate:"Morre no fim da T1 depois de confundir a profecia na cabeça de Alicent.",
   got:"Conta a Rhaenyra o sonho de Aegon: é a profecia do Príncipe Prometido que Melisandre persegue."},
  {nome:"Jacaerys Velaryon", desde:"T1E6", ep:"Jace, herdeiro de Rhaenyra", casa:"Velaryon (Strong)", lado:"negros", dragao:"Vermax", estado:"morto", morte:{ep:"T3E1", onde:"A Goela", como:"Um escorpião da Triarquia acerta Vermax, que afunda. Jace sobe à tona e é morto pelas flechas dos besteiros.", evento:"goela"},
   ate:"Prende a mãe em Pedra do Dragão para lutar no lugar dela. Vermax é abatido por um escorpião e Jace morre sob as flechas da Triarquia na Goela (T3E1).",
   got:"Fecha o Pacto de Gelo e Fogo com Cregan Stark; a união Stark e Targaryen só acontece com Jon Snow."},
  {nome:"Lucerys Velaryon", desde:"T1E6", ep:"Luke", casa:"Velaryon (Strong)", lado:"negros", dragao:"Arrax", estado:"morto", morte:{ep:"T1E10", onde:"Céu de Ponta Tempestade", como:"Vhagar, fora do controle de Aemond, alcança Arrax na tempestade e devora dragão e cavaleiro.", evento:"ponta-tempestade"},
   ate:"Morto por Vhagar sobre Ponta Tempestade (T1E10). A morte dele começa a guerra.",
   got:"Cai sobre o castelo de Robert, Stannis e Gendry."},
  {nome:"Baela Targaryen", desde:"T1E6", ep:"Filha de Daemon e Laena", casa:"Targaryen", lado:"negros", dragao:"Moondancer", estado:"vivo",
   ate:"Salva Jace uma vez na Goela e leva o corpo dele a Pedra do Dragão. Acaba detida por Rhaenyra (T3E8).",
   got:"Nos livros, casa com Alyn Velaryon; os Velaryon da época de GoT descendem dela."},
  {nome:"Rhaena Targaryen", desde:"T1E6", ep:"Filha de Daemon e Laena", casa:"Targaryen", lado:"negros", dragao:"Sheepstealer", estado:"vivo",
   ate:"Reivindica o dragão selvagem Sheepstealer sem dominá-lo; na Goela ele ataca os dois lados e custa Vermax. Foge do Vale, é capturada e levada a Porto Real (T3E7). Herda o papel de Nettles, cortada dos livros.",
   got:"Os ovos que levou ao Vale na T2 podem ser os de Daenerys (veja Dragões)."},
  {nome:"Aegon, o Jovem, e Viserys", desde:"T1E8", ep:"Filhos de Rhaenyra e Daemon", casa:"Targaryen", lado:"negros", dragao:"Stormcloud", estado:"vivo",
   ate:"Escondidos no Vale com Jeyne Arryn desde a T2.",
   got:"Aegon III será rei. Viserys II é o ancestral direto de Daenerys e Jon Snow (veja a linhagem)."},
  {nome:"Rhaenys Targaryen", desde:"T1E1", ep:"A Rainha Que Nunca Foi", casa:"Targaryen", lado:"negros", dragao:"Meleys", estado:"morto", morte:{ep:"T2E4", onde:"Rook's Rest", como:"Cercada no ar por Vhagar e Sunfyre, escolhe lutar em vez de fugir e cai com Meleys.", evento:"rooks-rest"},
   ate:"Morre em Rook's Rest, cercada por Vhagar e Sunfyre (T2E4).",
   got:"Filha de uma Baratheon: o cruzamento de sangue que Robert reivindica."},
  {nome:"Corlys Velaryon", desde:"T1E1", ep:"A Serpente do Mar", casa:"Velaryon", lado:"negros", dragao:"", estado:"vivo",
   ate:"Perde Maré Alta, naufraga, chama os filhos de Rhaenyra de bastardos, é capturado por Jon Roxton, perde um dedo e é libertado por Daeron e Gwayne (T3).",
   got:"Driftmark fica ao lado de Pedra do Dragão, base de Stannis e Daenerys."},
  {nome:"Alyn de Hull", desde:"T2E2", ep:"Herdeiro de Driftmark", casa:"Velaryon", lado:"negros", dragao:"", estado:"vivo",
   ate:"Mata Sharako Lohar na Goela, é nomeado herdeiro por Corlys e mata o Alto Septão a mando de Rhaenyra (T3).",
   got:"Nos livros, Alyn Velaryon vira o grande almirante Targaryen e casa com Baela."},
  {nome:"Addam de Hull", desde:"T2E3", ep:"Semente de dragão", casa:"Velaryon", lado:"negros", dragao:"Seasmoke", estado:"vivo",
   ate:"Armado cavaleiro por Daemon, nunca legitimado por Rhaenyra; caça Aemond com Baela (T3).",
   got:""},
  {nome:"Mysaria", desde:"T1E1", ep:"O Verme Branco", casa:"Sem casa", lado:"negros", dragao:"", estado:"vivo",
   ate:"Mestra dos sussurros de Rhaenyra; descobre a gravidez de Helaena; é demitida e expulsa da cidade (T3E8).",
   got:"Faz o papel de Varys: mestre dos sussurros de origem humilde, vindo de Essos."},
  {nome:"Hugh Hammer", desde:"T2E2", ep:"Semente de dragão, ferreiro", casa:"Sem casa", lado:"negros", dragao:"Vermithor", estado:"vivo",
   ate:"Reivindica Vermithor (T2E8). Na T3, a mulher, Kat, fica presa em Tumbleton e aparece morta depois do incêndio.",
   got:""},
  {nome:"Ulf White", desde:"T2E2", ep:"Semente de dragão", casa:"Sem casa", lado:"verdes", dragao:"Silverwing", estado:"vivo",
   ate:"Humilhado por Daemon, é comprado por Ormund com a promessa de Driftmark e queima Tumbleton com Silverwing, matando Ormund e Roderick (T3E8).",
   got:"Silverwing, nos livros, é dos dragões que sobrevivem à Dança."},
  {nome:"Oscar Tully", desde:"T2E7", ep:"Senhor de Correrrio", casa:"Tully", lado:"negros", dragao:"", estado:"vivo",
   ate:"Lidera o exército do Tridente, embosca Criston Cole e cerca Tumbleton (T3).",
   got:"Ancestral de Hoster, Catelyn, Edmure e do Peixe Negro."},
  {nome:"Roderick Dustin", desde:"T3E1", ep:"Roddy, a Ruína, dos Lobos do Inverno", casa:"Dustin", lado:"negros", dragao:"", estado:"morto", morte:{ep:"T3E8", onde:"Tumbleton", como:"Morre lutando contra Ormund Hightower quando Ulf queima a cidade com Silverwing.", evento:"tumbleton"},
   ate:"Entrega a Daemon a cabeça de Jason Lannister (T3E1); escala as muralhas de Tumbleton e morre no incêndio de Ulf (T3E8).",
   got:"Barrowton: nos livros, Lady Barbrey Dustin, que odeia Ned Stark."},
  {nome:"Torrhen Manderly", desde:"T3E3", ep:"Mestre da moeda", casa:"Manderly", lado:"negros", dragao:"", estado:"vivo",
   ate:"Nomeado por Rhaenyra para levar a culpa pelo cofre vazio (T3E4).",
   got:"Lorde Wyman Manderly está entre os que proclamam Jon Snow Rei do Norte (T6)."},
  {nome:"Alysanne Blackwood", desde:"T3E5", ep:"Black Aly, a arqueira", casa:"Blackwood", lado:"negros", dragao:"", estado:"vivo",
   ate:"Mata Criston Cole com uma flecha quando ele pede um duelo (T3E6).",
   got:"Nos livros, casa com Cregan Stark e vira Senhora de Winterfell."},
  {nome:"Jeyne Arryn", desde:"T2E6", ep:"A Donzela do Vale", casa:"Arryn", lado:"negros", dragao:"", estado:"vivo",
   ate:"Abriga Rhaena e os meninos; manda ouro a Daemon; avisa quando Rhaena foge (T3).",
   got:"O Ninho da Águia de Lysa e Robin, a Porta da Lua."},
  {nome:"Cregan Stark", desde:"T2E1", ep:"Senhor de Winterfell", casa:"Stark", lado:"negros", dragao:"", estado:"vivo",
   ate:"Recebe Jacaerys no topo da Muralha e fecha o Pacto de Gelo e Fogo (T2). Fica fora da T3; o Norte aparece pelos Dustin e Manderly.",
   got:"Ancestral de Ned Stark; o nome Rickon, do pai dele, volta no caçula de Ned."},
  {nome:"Luthor Largent", desde:"T3E2", ep:"Comandante da Patrulha da Cidade", casa:"Sem casa", lado:"negros", dragao:"", estado:"morto", morte:{ep:"T3E5", onde:"Porto Real", como:"Assassinado com vários patrulheiros por homens pagos por Ormund; os corpos aparecem marcados como traidores."},
   ate:"Entrega Porto Real a Daemon e prende os apoiadores dos Verdes; é assassinado com vários patrulheiros por homens pagos por Ormund (T3E5).",
   got:"A Patrulha da Cidade, os mantos dourados de Janos Slynt e, depois, de Bronn."},
  {nome:"Alicent Hightower", desde:"T1E1", ep:"A rainha viúva", casa:"Hightower", lado:"verdes", dragao:"", estado:"vivo",
   ate:"Entrega a cidade a Rhaenyra, falha em fugir com Helaena, aceita matar Aemond em troca da liberdade e o envenena em Harrenhal (T3E7).",
   got:"Dá nome aos Verdes. Ser Gerold Hightower, da casa dela, morre guardando o segredo de Jon Snow (T6)."},
  {nome:"Otto Hightower", desde:"T1E1", ep:"Mão de três reis", casa:"Hightower", lado:"verdes", dragao:"", estado:"morto", morte:{ep:"T3E2", onde:"Porto Real", como:"Preso, é entregue por Larys a Daemon e decapitado por Rhaenyra diante da corte.", evento:"porto-real"},
   ate:"Preso, é entregue por Larys a Daemon e decapitado por Rhaenyra (T3E2).",
   got:"A Mão do Rei que GoT abre enterrando é Jon Arryn; a que acaba no cadafalso é Ned Stark."},
  {nome:"Aegon II Targaryen", desde:"T1E6", ep:"O rei dos Verdes", casa:"Targaryen", lado:"verdes", dragao:"Sunfyre", estado:"vivo",
   ate:"Capturado com Larys, foge, chora o corpo errado de Sunfyre, limpa latrinas em Rook's Rest e é salvo pelo dragão, vivo (T3E7). Manda Aemond buscar Vhagar.",
   got:"Único rei Targaryen que GoT nunca cita. A linha dele acaba sem herdeiros."},
  {nome:"Aemond Targaryen", desde:"T1E6", ep:"O Caolho", casa:"Targaryen", lado:"verdes", dragao:"Vhagar", estado:"vivo",
   ate:"Senta no Trono dizendo que Aegon abdicou, mata Simon Strong, é ferido em Harrenhal e envenenado por Alicent; sobrevive com a ajuda de Alys (T3).",
   got:"Vhagar, a dragoa dele, vira um dos três maiores crânios dos porões (livros)."},
  {nome:"Helaena Targaryen", desde:"T1E6", ep:"A rainha sonhadora", casa:"Targaryen", lado:"verdes", dragao:"Dreamfyre", estado:"morto", morte:{ep:"T3E8", onde:"Fortaleza Vermelha, Porto Real", como:"Grávida e alimentada à força por ordem de Rhaenyra, pula de uma janela. Deixa a tapeçaria de Rhaenyra no trono cercada de fogo e sangue."},
   ate:"Grávida, presa e alimentada à força por Rhaenyra, pula de uma janela (T3E8) e deixa a tapeçaria de Rhaenyra no trono cercada de fogo e sangue.",
   got:"Nos livros, a filha dela, Jaehaera, casa com Aegon III e une os dois lados."},
  {nome:"Daeron Targaryen", desde:"T2E8", ep:"O caçula de Alicent", casa:"Targaryen", lado:"verdes", dragao:"Tessarion", estado:"sumido",
   ate:"Primeiro um impostor, depois o verdadeiro: Ormund o proclama rei em Tumbleton e o obriga a executar um inocente. Liberta Corlys com Gwayne e some no incêndio (T3E8).",
   got:""},
  {nome:"Ormund Hightower", desde:"T3E1", ep:"Senhor de Vilavelha", casa:"Hightower", lado:"verdes", dragao:"", estado:"morto", morte:{ep:"T3E8", onde:"Tumbleton", como:"Morre no incêndio de Silverwing, lutando contra Roderick Dustin, traído pelo Ulf que ele mesmo comprou.", evento:"tumbleton"},
   ate:"Submete-se a Daemon de mentira, toma Tumbleton, cunha moedas com Daeron, compra Ulf e morre queimado por Silverwing (T3E8).",
   got:"Vilavelha e a Cidadela, onde Sam Tarly estuda (T6 e T7)."},
  {nome:"Gwayne Hightower", desde:"T2E1", ep:"Irmão de Alicent", casa:"Hightower", lado:"verdes", dragao:"", estado:"vivo",
   ate:"Abandona Criston, desmascara os assassinos de Rhaenyra, liberta Corlys e não acha Daeron depois do incêndio (T3).",
   got:""},
  {nome:"Criston Cole", desde:"T1E1", ep:"O Fazedor de Reis", casa:"Cole", lado:"verdes", dragao:"", estado:"morto", morte:{ep:"T3E6", onde:"Terras Fluviais", como:"Emboscado pelos Tully, pede um duelo a Roderick e Oscar; Alysanne Blackwood o mata com uma flecha antes que alguém aceite.", evento:"emboscada-tully"},
   ate:"Guerrilha contra os Tully, chega tarde a uma ponte queimada, pede um duelo e morre com a flecha de Black Aly (T3E6).",
   got:"Beric Dondarrion é o senhor de Blackhaven, onde Criston cresceu; Jaime é o outro guarda branco que quebra o juramento."},
  {nome:"Larys Strong", desde:"T1E3", ep:"Pé-Torto", casa:"Strong", lado:"verdes", dragao:"", estado:"vivo",
   ate:"Capturado com Aegon, revela quem são para valer como reféns, entrega Otto a Daemon e abandona Aegon quando a busca por Tyland aperta (T3E7).",
   got:"O Varys da Dança: mestre dos sussurros que escolhe o lado vencedor."},
  {nome:"Alys Rivers", desde:"T2E3", ep:"A bruxa de Harrenhal", casa:"Strong (bastarda)", lado:"outros", dragao:"", estado:"vivo",
   ate:"Salva Aemond, mostra a ele um ninho de ovos escondido e conta que ficou imortal ao falhar em salvar o filho com magia (T3E8).",
   got:"Uma imortal que não envelhece, como Melisandre sob o colar."},
  {nome:"Jason Lannister", desde:"T1E3", ep:"Senhor do Rochedo", casa:"Lannister", lado:"verdes", dragao:"", estado:"morto", morte:{ep:"T3E1", onde:"Terras Fluviais", como:"O exército dele é destruído por Daemon e pelos Lobos do Inverno; Roderick Dustin entrega a cabeça a Daemon.", evento:"lannister"},
   ate:"Derrotado por Daemon; Roderick Dustin entrega a cabeça dele (T3E1).",
   got:"Ancestral de Tywin. Gêmeo, como Jaime e Cersei."},
  {nome:"Tyland Lannister", desde:"T1E1", ep:"Mestre da moeda de Aegon II", casa:"Lannister", lado:"verdes", dragao:"", estado:"vivo",
   ate:"Jogado ao mar por Lohar, sobrevive, esconde o tesouro da coroa e se junta a Aegon em Rook's Rest (T3).",
   got:"Nos livros, vira Mão de Aegon III: o Lannister cuidando do ouro, como Tywin."},
  {nome:"Jon Roxton", desde:"T3E6", ep:"O Audaz", casa:"Roxton", lado:"verdes", dragao:"", estado:"vivo",
   ate:"Captura Corlys e duela com Daemon até Ulf interromper (T3E8).",
   got:""},
  {nome:"Sharako Lohar", desde:"T2E8", ep:"Almirante da Triarquia", casa:"Triarquia", lado:"outros", dragao:"", estado:"morto", morte:{ep:"T3E1", onde:"A Goela", como:"Depois de afundar o navio de Corlys, é morto por Alyn de Hull.", evento:"goela"},
   ate:"Saqueia Maré Alta, afunda o navio de Corlys e morre pelas mãos de Alyn (T3E1).",
   got:"A Triarquia (Myr, Lys e Tyrosh) são as Cidades Livres que Daenerys atravessa em Essos."},
  {nome:"Simon Strong", desde:"T2E3", ep:"Castelão de Harrenhal", casa:"Strong", lado:"negros", dragao:"", estado:"morto", morte:{ep:"T3E2", onde:"Harrenhal", como:"Morto por Aemond na chegada de Vhagar ao castelo.", evento:"harrenhal"},
   ate:"Mantém Harrenhal para Daemon (T2) e é morto por Aemond na chegada de Vhagar (T3E2).",
   got:"Harrenhal, onde Arya serve Tywin (T2)."},
  {nome:"Jasper Wylde", desde:"T2E1", ep:"Ironrod, mestre das leis", casa:"Wylde", lado:"verdes", dragao:"", estado:"morto", morte:{ep:"T3E2", onde:"Porto Real", como:"Decapitado por Daemon na queda da cidade, depois de tentar estuprar Alicent.", evento:"porto-real"},
   ate:"Tenta estuprar Alicent, é preso por Orwyle e decapitado por Daemon (T3E2).",
   got:""}
];


const dragoes = [
  {nome:"Balerion", ep:"o Terror Negro", cav:"Aegon, o Conquistador; depois Viserys I",
   cdd:"Morto antes da série. Viserys I conta a profecia a Rhaenyra sob o crânio dele (T1).",
   got:"O crânio nos porões: Arya se esconde atrás dele (T1); Cersei testa o escorpião nele (T7)."},
  {nome:"Vhagar", ep:"a última da Conquista", cav:"Visenya; Laena Velaryon; Aemond",
   cdd:"Mata Arrax e Lucerys (T1), Meleys e Rhaenys em Rook's Rest (T2). Leva Aemond ferido a Harrenhal; Aegon manda buscá-la de volta (T3).",
   got:"Nos livros, o crânio dela está entre os três maiores do porão, com Balerion e Meraxes."},
  {nome:"Caraxes", ep:"o Verme Sangrento", cav:"Daemon",
   cdd:"Toma Harrenhal (T2). Leva Daemon até Rhaena, fere Sheepstealer e derruba o portão de Tumbleton (T3).",
   got:"Sem ligação direta com GoT."},
  {nome:"Syrax", ep:"a dragoa de Rhaenyra", cav:"Rhaenyra",
   cdd:"Leva Rhaenyra a Porto Real para tomar o trono (T3).",
   got:"O Fosso dos Dragões, casa dela, é a ruína onde Daenerys e Cersei se encontram (T7)."},
  {nome:"Meleys", ep:"a Rainha Vermelha", cav:"Rhaenys",
   cdd:"Morta em Rook's Rest por Vhagar e Sunfyre (T2). Criston desfila a cabeça dela por Porto Real.",
   got:"A cabeça é o primeiro troféu da Dança, do tipo que lota o porão de Robert."},
  {nome:"Sunfyre", ep:"o Dourado", cav:"Aegon II",
   cdd:"Ferido em Rook's Rest (T2). Aegon chora o corpo errado (T3E4); Sunfyre reaparece e salva Aegon dos soldados (T3E7).",
   got:"Sem ligação direta com GoT."},
  {nome:"Vermithor", ep:"a Fúria de Bronze", cav:"Jaehaerys I; Hugh Hammer",
   cdd:"Reivindicado por Hugh no fim da T2. Voa com Rhaenyra sobre Porto Real (T3).",
   got:"Sem ligação direta com GoT."},
  {nome:"Silverwing", ep:"Asa de Prata", cav:"Rainha Alysanne; Ulf White",
   cdd:"Reivindicada por Ulf (T2). Queima Tumbleton quando ele muda de lado (T3E8).",
   got:"Nos livros, é dos dragões que sobrevivem à Dança."},
  {nome:"Seasmoke", ep:"Fumaça do Mar", cav:"Laenor Velaryon; Addam de Hull",
   cdd:"Escolhe Addam depois de queimar Steffon Darklyn (T2). Luta na Goela (T3).",
   got:"Sem ligação direta com GoT."},
  {nome:"Dreamfyre", ep:"Fogo de Sonho", cav:"Helaena",
   cdd:"Nunca vai à guerra. Fica sem cavaleira quando Helaena morre (T3E8).",
   got:"Uma leitura da própria série: ovos de Dreamfyre seriam os ovos de Daenerys. Veja “Os ovos do Vale”."},
  {nome:"Vermax", ep:"o dragão de Jace", cav:"Jacaerys",
   cdd:"Abatido por um escorpião da Triarquia e afogado na Goela (T3E1).",
   got:"O escorpião faz com ele o que o de Qyburn faz com Rhaegal (T8)."},
  {nome:"Arrax", ep:"o dragão de Luke", cav:"Lucerys",
   cdd:"Morto por Vhagar sobre Ponta Tempestade (T1E10).",
   got:"Cai sobre o castelo de Renly, Davos e Gendry."},
  {nome:"Moondancer", ep:"Dançarina da Lua", cav:"Baela",
   cdd:"Salva Jace uma vez na Goela (T3E1); caça Aemond com Seasmoke (T3).",
   got:"Sem ligação direta com GoT."},
  {nome:"Tessarion", ep:"a Rainha Azul", cav:"Daeron",
   cdd:"Presa dentro das muralhas de Tumbleton por Ormund (T3).",
   got:"Sem ligação direta com GoT."},
  {nome:"Sheepstealer", ep:"Ladrão de Ovelhas, selvagem", cav:"Rhaena",
   cdd:"Rhaena o monta sem dominá-lo; ataca os dois lados na Goela e é ferido por Caraxes (T3). Nos livros, a cavaleira é Nettles, cortada da série.",
   got:"Sem ligação direta com GoT."},
  {nome:"Morning", ep:"Manhã", cav:"Rhaena (o ovo dela)",
   cdd:"O ovo que choca no fim da T2.",
   got:"Nos livros, Morning é dos últimos dragões; os dois menores crânios do porão são dos filhotes finais."},
  {nome:"Os ovos do Vale", ep:"quatro ovos", cav:"Rhaena os leva ao Ninho da Águia (T2E3)",
   cdd:"A diretora Geeta Patel disse que três deles viram os ovos de Daenerys; Ryan Condal chamou isso de “um futuro possível”. Na T3, Alys mostra a Aemond outro ninho escondido em Harrenhal.",
   got:"Illyrio dá três ovos a Daenerys e eles chocam na pira de Drogo: Drogon, Rhaegal e Viserion (T1)."},
  {nome:"Drogon, Rhaegal e Viserion", ep:"os dragões de GoT", cav:"Daenerys; Jon Snow monta Rhaegal",
   cdd:"Os nomes homenageiam Drogo, Rhaegar e Viserys, o irmão e o marido de Daenerys e o irmão de Rhaenyra na linhagem.",
   got:"Viserion vira dragão de gelo e derruba a Muralha (T7); Rhaegal cai ao escorpião (T8); Drogon derrete o Trono de Ferro (T8)."}
];


const dragoesTempo = [
  {nome:"Syrax", trechos:[{de:"T1E1", ate:null, lado:"negros"}]},
  {nome:"Caraxes", trechos:[{de:"T1E1", ate:null, lado:"negros"}]},
  {nome:"Meleys", trechos:[{de:"T1E1", ate:"T2E4", lado:"negros"}]},
  {nome:"Seasmoke", trechos:[{de:"T1E1", ate:"T1E7", lado:"negros"},{de:"T2E6", ate:null, lado:"negros"}]},
  {nome:"Vhagar", trechos:[{de:"T1E6", ate:"T1E6", lado:"negros"},{de:"T1E7", ate:null, lado:"verdes"}]},
  {nome:"Sunfyre", trechos:[{de:"T1E6", ate:"T2E4", lado:"verdes"},{de:"T3E7", ate:null, lado:"verdes"}]},
  {nome:"Dreamfyre", trechos:[{de:"T1E6", ate:"T3E8", lado:"verdes"}]},
  {nome:"Vermax", trechos:[{de:"T1E6", ate:"T3E1", lado:"negros"}]},
  {nome:"Arrax", trechos:[{de:"T1E6", ate:"T1E10", lado:"negros"}]},
  {nome:"Tyraxes", trechos:[{de:"T1E8", ate:null, lado:"negros"}]},
  {nome:"Moondancer", trechos:[{de:"T2E1", ate:null, lado:"negros"}]},
  {nome:"Vermithor", trechos:[{de:"T2E8", ate:null, lado:"negros"}]},
  {nome:"Silverwing", trechos:[{de:"T2E8", ate:"T3E7", lado:"negros"},{de:"T3E8", ate:null, lado:"verdes"}]},
  {nome:"Tessarion", trechos:[{de:"T2E8", ate:null, lado:"verdes"}]},
  {nome:"Sheepstealer", trechos:[{de:"T3E1", ate:"T3E7", lado:"negros"}]}
];

const sugestoes = [
  "Targaryen","Hightower","Velaryon","Strong","Lannister","Stark","Baratheon","Arryn","Tully","Frey","Royce","Blackwood","Bracken","Cole","Darklyn","Westerling","Beesbury","Cargyll","Celtigar","Lonmouth","Marbrand","Greyjoy","Tyrell","Martell","Dondarrion",
  "Rhaenyra","Daemon","Viserys I","Viserys II","Alicent","Otto Hightower","Gwayne","Aegon II","Aemond","Helaena","Daeron","Jaehaerys","Rhaenys","Corlys","Laenor","Laena","Vaemond","Addam de Hull","Alyn","Jacaerys","Lucerys","Joffrey","Baela","Rhaena","Aemma Arryn","Jeyne Arryn","Criston Cole","Harwin","Larys","Lyonel","Simon Strong","Alys Rivers","Jason Lannister","Tyland","Cregan Stark","Rickon Stark","Borros","Boremund","Grover Tully","Oscar Tully","Forrest Frey","Sabitha Frey","Rhea Royce","Gerold Royce","Steffon Darklyn","Harrold Westerling","Lyman Beesbury","Erryk","Arryk","Willem Blackwood","Samwell Blackwood","Amos Bracken","Mysaria","Seasmoke","Meleys","Vhagar","Caraxes",
  "Daenerys","Jon Snow","Rhaegar","Aerys","Rei Louco","Lyanna","Elia Martell","Meistre Aemon","Aegon V","Egg","Betha Blackwood","Corvo de Sangue","Corvo de Três Olhos","Ned Stark","Catelyn","Robb","Sansa","Arya","Bran","Benjen","Tywin","Cersei","Jaime","Tyrion","Kevan","Lancel","Robert Baratheon","Stannis","Renly","Shireen","Gendry","Tommen","Myrcella","Jon Arryn","Lysa","Robin Arryn","Hoster Tully","Edmure","Peixe Negro","Walder Frey","Talisa","Yohn Royce","Waymar Royce","Beric Dondarrion","Barristan Selmy","Gerold Hightower","Sam Tarly","Varys","Mindinho","Melisandre","Davos","Qyburn","Oberyn","Doran","Ellaria","Theon","Yara","Euron","Balon","Olenna","Margaery","Loras","Rei da Noite","Caminhante Branco","Caminhantes Brancos","Longa Noite","Filhos da Floresta","Craster","Último Herói","Velha Nan","Bloodmoon","vidro de dragão","Outros",
  "Harrenhal","Pedra do Dragão","Ponta Tempestade","Ninho da Águia","Correrrio","As Gêmeas","Runestone","Blackhaven","Vilavelha","Cidadela","Winterfell","Muralha","Porto Real","Driftmark","Fosso dos Dragões","Mesa Pintada","Trono de Ferro","Balerion","adaga","Patrulha da Noite","Guarda Real","Mão do Rei","Torre da Alegria","Casamento Vermelho","Pacto de Gelo e Fogo","Príncipe Prometido","Verdes","Negros",
  "Ormund Hightower","Roderick Dustin","Lobos do Inverno","Torrhen Manderly","Black Aly","Alysanne Blackwood","Luthor Largent","Adrian Redfort","Jon Roxton","Sharako Lohar","Triarquia","Kat","Alto Septão","Jaehaera","Tumbleton","Goela","Rook's Rest","Batalha da Goela","Batalha de Tumbleton","Batalha de Rook's Rest","Queda de Porto Real","Emboscada dos Tully","Maré Alta","Porto Branco","Barrowton",
  "Syrax","Sunfyre","Vermithor","Silverwing","Seasmoke","Dreamfyre","Vermax","Arrax","Moondancer","Tessarion","Sheepstealer","Morning","Drogon","Rhaegal","Viserion","ovos","Nettles"
];

// fotos:inicio
const fotos = {"addam-de-hull": {"arquivo": "img/addam-de-hull.webp"}, "aegon-ii-targaryen": {"arquivo": "img/aegon-ii-targaryen.webp"}, "aemond-targaryen": {"arquivo": "img/aemond-targaryen.webp"}, "alicent-hightower": {"arquivo": "img/alicent-hightower.webp"}, "alyn-de-hull": {"arquivo": "img/alyn-de-hull.webp"}, "alys-rivers": {"arquivo": "img/alys-rivers.webp"}, "alysanne-blackwood": {"arquivo": "img/alysanne-blackwood.webp"}, "baela-targaryen": {"arquivo": "img/baela-targaryen.webp"}, "corlys-velaryon": {"arquivo": "img/corlys-velaryon.webp"}, "cregan-stark": {"arquivo": "img/cregan-stark.webp"}, "criston-cole": {"arquivo": "img/criston-cole.webp"}, "daemon-targaryen": {"arquivo": "img/daemon-targaryen.webp"}, "daeron-targaryen": {"arquivo": "img/daeron-targaryen.webp"}, "gwayne-hightower": {"arquivo": "img/gwayne-hightower.webp"}, "helaena-targaryen": {"arquivo": "img/helaena-targaryen.webp"}, "hugh-hammer": {"arquivo": "img/hugh-hammer.webp"}, "jacaerys-velaryon": {"arquivo": "img/jacaerys-velaryon.webp"}, "jason-lannister": {"arquivo": "img/jason-lannister.webp"}, "jasper-wylde": {"arquivo": "img/jasper-wylde.webp"}, "jeyne-arryn": {"arquivo": "img/jeyne-arryn.webp"}, "jon-roxton": {"arquivo": "img/jon-roxton.webp"}, "larys-strong": {"arquivo": "img/larys-strong.webp"}, "lucerys-velaryon": {"arquivo": "img/lucerys-velaryon.webp"}, "luthor-largent": {"arquivo": "img/luthor-largent.webp"}, "mysaria": {"arquivo": "img/mysaria.webp"}, "ormund-hightower": {"arquivo": "img/ormund-hightower.webp"}, "oscar-tully": {"arquivo": "img/oscar-tully.webp"}, "otto-hightower": {"arquivo": "img/otto-hightower.webp"}, "rhaena-targaryen": {"arquivo": "img/rhaena-targaryen.webp"}, "rhaenyra-targaryen": {"arquivo": "img/rhaenyra-targaryen.webp"}, "rhaenys-targaryen": {"arquivo": "img/rhaenys-targaryen.webp"}, "roderick-dustin": {"arquivo": "img/roderick-dustin.webp"}, "sharako-lohar": {"arquivo": "img/sharako-lohar.webp"}, "simon-strong": {"arquivo": "img/simon-strong.webp"}, "torrhen-manderly": {"arquivo": "img/torrhen-manderly.webp"}, "tyland-lannister": {"arquivo": "img/tyland-lannister.webp"}, "ulf-white": {"arquivo": "img/ulf-white.webp"}, "viserys-i-targaryen": {"arquivo": "img/viserys-i-targaryen.webp"}};
// fotos:fim
// creditos:inicio
const creditos = [{"personagem": "Addam de Hull", "pagina": "Addam of Hull", "fonte": "https://gameofthrones.fandom.com/wiki/Addam_of_Hull", "imagem": "Addam_of_Hull-303.jpg"}, {"personagem": "Aegon II Targaryen", "pagina": "Aegon II Targaryen", "fonte": "https://gameofthrones.fandom.com/wiki/Aegon_II_Targaryen", "imagem": "Aegon_302_Profile.jpg"}, {"personagem": "Aemond Targaryen", "pagina": "Aemond Targaryen", "fonte": "https://gameofthrones.fandom.com/wiki/Aemond_Targaryen", "imagem": "Aemond_Targaryen-301.jpg"}, {"personagem": "Alicent Hightower", "pagina": "Alicent Hightower", "fonte": "https://gameofthrones.fandom.com/wiki/Alicent_Hightower", "imagem": "AlicentASfASInfobox.PNG"}, {"personagem": "Alyn de Hull", "pagina": "Alyn of Hull", "fonte": "https://gameofthrones.fandom.com/wiki/Alyn_of_Hull", "imagem": "Alyn_of_Hull-305.jpg"}, {"personagem": "Alys Rivers", "pagina": "Alys Rivers", "fonte": "https://gameofthrones.fandom.com/wiki/Alys_Rivers", "imagem": "Alys_Rivers-304.jpg"}, {"personagem": "Alysanne Blackwood", "pagina": "Alysanne Blackwood", "fonte": "https://gameofthrones.fandom.com/wiki/Alysanne_Blackwood", "imagem": "Black_Aly_Blackwood.jpg"}, {"personagem": "Baela Targaryen", "pagina": "Baela Targaryen", "fonte": "https://gameofthrones.fandom.com/wiki/Baela_Targaryen", "imagem": "BaelaTargaryen2x03.PNG"}, {"personagem": "Corlys Velaryon", "pagina": "Corlys Velaryon", "fonte": "https://gameofthrones.fandom.com/wiki/Corlys_Velaryon", "imagem": "Corlys_Velaryon_S2.jpg"}, {"personagem": "Cregan Stark", "pagina": "Cregan Stark", "fonte": "https://gameofthrones.fandom.com/wiki/Cregan_Stark", "imagem": "Cregan-portrait.png"}, {"personagem": "Criston Cole", "pagina": "Criston Cole", "fonte": "https://gameofthrones.fandom.com/wiki/Criston_Cole", "imagem": "Criston_Cole-306.jpg"}, {"personagem": "Daemon Targaryen", "pagina": "Daemon Targaryen", "fonte": "https://gameofthrones.fandom.com/wiki/Daemon_Targaryen", "imagem": "Daemon_S3_Profile.png"}, {"personagem": "Daeron Targaryen", "pagina": "Daeron Targaryen", "fonte": "https://gameofthrones.fandom.com/wiki/Daeron_Targaryen", "imagem": "Daeron_Targaryen-306.jpg"}, {"personagem": "Gwayne Hightower", "pagina": "Gwayne Hightower", "fonte": "https://gameofthrones.fandom.com/wiki/Gwayne_Hightower", "imagem": "GwayneHightowerADoD.PNG"}, {"personagem": "Helaena Targaryen", "pagina": "Helaena Targaryen", "fonte": "https://gameofthrones.fandom.com/wiki/Helaena_Targaryen", "imagem": "Helaena_Targaryen-301.jpg"}, {"personagem": "Hugh Hammer", "pagina": "Hugh Hammer", "fonte": "https://gameofthrones.fandom.com/wiki/Hugh_Hammer", "imagem": "Hugh_Hammer-302.jpg"}, {"personagem": "Jacaerys Velaryon", "pagina": "Jacaerys Velaryon", "fonte": "https://gameofthrones.fandom.com/wiki/Jacaerys_Velaryon", "imagem": "Jacaerys-206.jpeg"}, {"personagem": "Jason Lannister", "pagina": "Jason Lannister", "fonte": "https://gameofthrones.fandom.com/wiki/Jason_Lannister", "imagem": "Jason_Lannister_Official_Guide.jpg"}, {"personagem": "Jasper Wylde", "pagina": "Jasper Wylde", "fonte": "https://gameofthrones.fandom.com/wiki/Jasper_Wylde", "imagem": "Jasper_Wylde_201.png"}, {"personagem": "Jeyne Arryn", "pagina": "Jeyne Arryn", "fonte": "https://gameofthrones.fandom.com/wiki/Jeyne_Arryn", "imagem": "Lady_Jeyne_Arryn.jpg"}, {"personagem": "Jon Roxton", "pagina": "Jon Roxton", "fonte": "https://gameofthrones.fandom.com/wiki/Jon_Roxton", "imagem": "Bold_Jon_301.png"}, {"personagem": "Larys Strong", "pagina": "Larys Strong", "fonte": "https://gameofthrones.fandom.com/wiki/Larys_Strong", "imagem": "Larys_Strong_S2.jpg"}, {"personagem": "Lucerys Velaryon", "pagina": "Lucerys Velaryon", "fonte": "https://gameofthrones.fandom.com/wiki/Lucerys_Velaryon", "imagem": "Lucerys_Velaryon_Official_Guide_2.jpg"}, {"personagem": "Luthor Largent", "pagina": "Luthor Largent", "fonte": "https://gameofthrones.fandom.com/wiki/Luthor_Largent", "imagem": "Luthor_Largent.png"}, {"personagem": "Mysaria", "pagina": "Mysaria", "fonte": "https://gameofthrones.fandom.com/wiki/Mysaria", "imagem": "305_Mysaria_Still.jpg"}, {"personagem": "Ormund Hightower", "pagina": "Ormund Hightower", "fonte": "https://gameofthrones.fandom.com/wiki/Ormund_Hightower", "imagem": "Ormund_Hightower-306.jpg"}, {"personagem": "Oscar Tully", "pagina": "Oscar Tully", "fonte": "https://gameofthrones.fandom.com/wiki/Oscar_Tully", "imagem": "Oscar_Tully_infobox.jpg"}, {"personagem": "Otto Hightower", "pagina": "Otto Hightower", "fonte": "https://gameofthrones.fandom.com/wiki/Otto_Hightower", "imagem": "Otto_Hightower-302.jpg"}, {"personagem": "Rhaena Targaryen", "pagina": "Rhaena Targaryen", "fonte": "https://gameofthrones.fandom.com/wiki/Rhaena_Targaryen", "imagem": "Rhaena_Targaryen-304.jpg"}, {"personagem": "Rhaenyra Targaryen", "pagina": "Rhaenyra Targaryen", "fonte": "https://gameofthrones.fandom.com/wiki/Rhaenyra_Targaryen", "imagem": "Rhaenyra_308.png"}, {"personagem": "Rhaenys Targaryen", "pagina": "Rhaenys Targaryen", "fonte": "https://gameofthrones.fandom.com/wiki/Rhaenys_Targaryen", "imagem": "Rhaenys_Targaryen1.png"}, {"personagem": "Roderick Dustin", "pagina": "Roderick Dustin", "fonte": "https://gameofthrones.fandom.com/wiki/Roderick_Dustin", "imagem": "Roderick_Dustin-305.jpg"}, {"personagem": "Sharako Lohar", "pagina": "Sharako Lohar", "fonte": "https://gameofthrones.fandom.com/wiki/Sharako_Lohar", "imagem": "Sharako_Lohar-301.jpg"}, {"personagem": "Simon Strong", "pagina": "Simon Strong", "fonte": "https://gameofthrones.fandom.com/wiki/Simon_Strong", "imagem": "Simon_Strong-302.jpg"}, {"personagem": "Torrhen Manderly", "pagina": "Torrhen Manderly", "fonte": "https://gameofthrones.fandom.com/wiki/Torrhen_Manderly", "imagem": "Torrhen_Manderly_profile.png"}, {"personagem": "Tyland Lannister", "pagina": "Tyland Lannister", "fonte": "https://gameofthrones.fandom.com/wiki/Tyland_Lannister", "imagem": "Tyland_Lannister-301.jpg"}, {"personagem": "Ulf White", "pagina": "Ulf White", "fonte": "https://gameofthrones.fandom.com/wiki/Ulf_White", "imagem": "Ulf_White-302.jpg"}, {"personagem": "Viserys I Targaryen", "pagina": "Viserys I Targaryen", "fonte": "https://gameofthrones.fandom.com/wiki/Viserys_I_Targaryen", "imagem": "Viserys_I_Targaryen_Official_Guide.jpg"}];
// creditos:fim

// ---------- Linha do tempo do topo ----------
const marcos = [
  {ano:"101 DC", fato:"Grande Conselho em Harrenhal. Viserys I é escolhido herdeiro.", serie:"A Casa do Dragão começa", tipo:"fogo"},
  {ano:"129 a 131 DC", fato:"A Dança dos Dragões: Verdes contra Negros. A 3ª temporada vai da Batalha da Goela à queima de Tumbleton; a 4ª, anunciada como a última, fecha a guerra.", serie:"Temporadas 2 e 3", tipo:"fogo"},
  {ano:"283 DC", fato:"Rebelião de Robert. Jaime mata o Rei Louco. Daenerys nasce no ano seguinte.", serie:"Passado de GoT", tipo:"gelo"},
  {ano:"298 DC", fato:"Jon Arryn morre e Ned Stark vira Mão do Rei.", serie:"Game of Thrones começa", tipo:"gelo"}
];

// ---------- Linhagem de Rhaenyra a Daenerys ----------
const linhagem = [
  {n:1, era:"cdd", nome:"Rhaenyra Targaryen ⚭ Daemon Targaryen", sub:"A rainha dos Negros e o Príncipe Rebelde. Tio e sobrinha, casados na T1.", nota:{b:"Por que o filho caçula?", t:"O mais velho, Aegon III, reina depois da Dança, mas sua linha acaba em dois reis sem filhos, Daeron I e Baelor I. A coroa passa ao irmão mais novo."}},
  {n:2, era:"cdd", nome:"Viserys II", sub:"É o pequeno Viserys da T2, o menino que Rhaenyra manda para o Ninho da Águia. Reina só um ano."},
  {n:3, era:"entre", nome:"Aegon IV, o Indigno", sub:"Legitima todos os bastardos no leito de morte e planta um século de rebeliões Blackfyre.", nota:{b:"Ramo lateral:", t:"Brynden Rivers, o Corvo de Sangue, filho de Aegon IV com Melissa Blackwood. Nos livros, é o Corvo de Três Olhos que treina Bran. Na série, o personagem nunca é nomeado."}},
  {n:4, era:"entre", nome:"Daeron II, o Bom ⚭ Myriah Martell", sub:"Dorne entra nos Sete Reinos por esse casamento, não por conquista. Daí o sangue Martell em Daenerys."},
  {n:5, era:"entre", nome:"Maekar I", sub:"Pai de dois nomes importantes para GoT.", irmaos:[{b:"Aemon", t:"o Meistre Aemon de Castelo Negro, conselheiro de Jon Snow em GoT. Recusou a coroa."},{b:"Aegon V, o Egg", t:"segue a linha abaixo."}]},
  {n:6, era:"entre", nome:"Aegon V, o Egg ⚭ Betha Blackwood", sub:"O escudeiro de Dunk nas novelas do Cavaleiro Andante. Morre no incêndio de Solarestival.", nota:{b:"Ramo Baratheon:", t:"a filha Rhaelle casa com Ormund Baratheon. O neto deles é Steffon, pai de Robert, Stannis e Renly. É esse “sangue do dragão” que legitima Robert no trono."}},
  {n:7, era:"entre", nome:"Jaehaerys II ⚭ Shaera Targaryen", sub:"Irmão e irmã, de volta ao costume valiriano."},
  {n:8, era:"got", nome:"Aerys II, o Rei Louco ⚭ Rhaella", sub:"Aparece nas visões de Bran; morto por Jaime Lannister. “Queimem todos.”"},
  {n:9, era:"got", nome:"Os filhos de Aerys", irmaos:[{b:"Rhaegar", t:"casa com Elia Martell, depois com Lyanna Stark em segredo."},{b:"Viserys III", t:"a coroa de ouro derretido."},{b:"Daenerys", t:"nasce em Pedra do Dragão na noite da tempestade."}]},
  {n:10, era:"got", nome:"Jon Snow, batizado Aegon Targaryen", sub:"Filho de Rhaegar e Lyanna Stark. Gelo e fogo na mesma pessoa, como o Pacto de Gelo e Fogo da T2 prometia."}
];

// ---------- Nomes repetidos ----------
const nomesRepetidos = [
  {nome:"Aegon", texto:"Aegon, o Conquistador, fundou a dinastia e teve o sonho da profecia; Aegon II é o filho de Alicent coroado pelos Verdes; Aegon, o Jovem, é o filho de Rhaenyra com Daemon, escondido no Vale, que os livros chamam de Aegon III. Em Game of Thrones, Jon Snow nasce Aegon."},
  {nome:"Viserys", texto:"Viserys I é o rei que morre no fim da T1; o pequeno Viserys é o filho caçula de Rhaenyra e Daemon, futuro Viserys II e ancestral de Daenerys. O Viserys de Game of Thrones, irmão de Daenerys, é o terceiro."},
  {nome:"Rhaena, Rhaenys e Rhaenyra", texto:"Rhaena é a filha de Daemon com Laena, que monta Sheepstealer na T3; Rhaenys é a Rainha Que Nunca Foi, mulher de Corlys, morta em Rook's Rest na T2. Rhaenyra é a protagonista. Três nomes, três pessoas."},
  {nome:"Jaehaerys", texto:"Jaehaerys I é o Velho Rei do primeiro episódio; o pequeno Jaehaerys é o filho de Aegon II e Helaena, morto na T2 (“Sangue e Queijo”). Jaehaera é a irmã gêmea dele."},
  {nome:"Aemon e Aemond", texto:"Aemon é o filho de Jaehaerys I, pai de Rhaenys, morto antes da série; Aemond é o filho caolho de Alicent, cavaleiro de Vhagar. Em Game of Thrones, o Meistre Aemon é outro ainda, da linhagem."},
  {nome:"Daemon e Daeron", texto:"Daemon é o Príncipe Rebelde, marido de Rhaenyra; Daeron é o caçula de Alicent, criado em Vilavelha, cavaleiro de Tessarion."},
  {nome:"Laena e Laenor", texto:"Irmãos Velaryon, filhos de Corlys e Rhaenys. Laena casa com Daemon e morre na T1; Laenor casa com Rhaenyra e some fingindo a própria morte."},
  {nome:"Os bastardos “de Hull” e “Rivers”", texto:"Addam e Alyn de Hull são filhos ilegítimos de Corlys; Alys Rivers é bastarda das Terras Fluviais, por isso o sobrenome Rivers, como “Snow” no Norte e “Waters” na Coroa."}
];

// ---------- Lugares e objetos ----------
const lugares = [
  {id:"longa-noite", largo:true, nome:"A Longa Noite e os Caminhantes Brancos", intro:"Só a série de TV explica de onde eles vêm. Os livros, até agora, têm apenas lendas. É a ameaça que atravessa as duas séries sem aparecer em nenhuma cena de A Casa do Dragão.", partes:[
    {tipo:"cdd", rotulo:"A Casa do Dragão", texto:"O sonho de Aegon, que Viserys I conta a Rhaenyra sob o crânio de Balerion, fala de um inverno terrível vindo do norte distante que trará o fim do mundo dos homens. É por isso que, na profecia, um Targaryen precisa estar no Trono de Ferro quando ele chegar (T1). No topo da Muralha, Cregan Stark diz a Jacaerys que ela não foi erguida contra selvagens nem contra a neve, e sim contra a morte (T2)."},
    {tipo:"got", rotulo:"Game of Thrones", texto:"Na visão de Bran, os Filhos da Floresta criam o primeiro Caminhante cravando vidro de dragão no coração de um Primeiro Homem amarrado a um represeiro: ele vira o Rei da Noite. Era uma arma contra os homens, e escapou do controle. O Rei da Noite transforma os filhos de Craster com um toque, quer apagar a memória do mundo, que é Bran, e cai com todos os seus quando Arya o mata com a adaga valiriana. O vidro de dragão que o criou é o que o destrói."},
    {tipo:"livros", rotulo:"Nos livros", texto:"Os Outros surgem na Longa Noite, há uns oito mil anos, sem origem confirmada. George R. R. Martin diz que não são mortos-vivos, e sim “outra forma de vida”, elegante e perigosa. Restam as lendas da Velha Nan: o Rei da Noite dos livros, 13º Lorde Comandante da Patrulha da Noite, que casou com uma mulher de olhos azuis como estrelas e talvez fosse um Stark; e o Último Herói, que procurou os Filhos para vencer os Outros. A HBO filmou um piloto sobre a Longa Noite, “Bloodmoon”, e o cancelou em 2019."}]},
  {id:"adaga", nome:"A adaga de aço valiriano", partes:[
    {tipo:"cdd", rotulo:"A Casa do Dragão", texto:"Viserys I mostra a Rhaenyra a inscrição escondida com a profecia de Aegon, o Conquistador (T1). A adaga passa a Alicent e depois a Aegon II."},
    {tipo:"got", rotulo:"Game of Thrones", texto:"É a arma do atentado contra Bran. Mindinho a devolve a Bran, Bran a dá a Arya e Arya mata o Rei da Noite com ela."}]},
  {id:"fosso", nome:"O Fosso dos Dragões", partes:[
    {tipo:"cdd", rotulo:"A Casa do Dragão", texto:"Palco da coroação de Aegon II. Rhaenys irrompe pelo chão montada em Meleys (T1E9)."},
    {tipo:"got", rotulo:"Game of Thrones", texto:"Só restam ruínas. É ali que Daenerys, Jon e Cersei se encontram para ver o morto-vivo."}]},
  {id:"mesa-pintada", nome:"Pedra do Dragão e a Mesa Pintada", partes:[
    {tipo:"cdd", rotulo:"A Casa do Dragão", texto:"Sede de Rhaenyra. O conselho dos Negros planeja a guerra sobre a mesa esculpida por Aegon."},
    {tipo:"got", rotulo:"Game of Thrones", texto:"Stannis e Melisandre; depois Daenerys e Jon sobre a mesma mesa. O vidro de dragão da ilha vira arma contra os Caminhantes."}]},
  {id:"balerion", nome:"O crânio de Balerion", partes:[
    {tipo:"cdd", rotulo:"A Casa do Dragão", texto:"Viserys I conta a Rhaenyra o sonho de Aegon sob o crânio do Terror Negro (T1E1)."},
    {tipo:"got", rotulo:"Game of Thrones", texto:"Arya se esconde entre os crânios nos porões. Cersei e Qyburn testam o escorpião nele."}]},
  {id:"trono", nome:"O Trono de Ferro", partes:[
    {tipo:"cdd", rotulo:"A Casa do Dragão", texto:"Enorme, com milhares de lâminas, e corta Viserys I sempre que ele senta. Rhaenyra senta nele na T3."},
    {tipo:"got", rotulo:"Game of Thrones", texto:"O mesmo trono, menor, pelo qual Aerys, Robert, Joffrey, Cersei e Daenerys brigam até Drogon derretê-lo."}]},
  {id:"muralha", nome:"A Muralha", partes:[
    {tipo:"cdd", rotulo:"A Casa do Dragão", texto:"Jacaerys e Cregan Stark conversam no topo dela sobre o que ela protege (T2E1)."},
    {tipo:"got", rotulo:"Game of Thrones", texto:"Lar de Jon Snow e da Patrulha da Noite. Os Caminhantes Brancos a derrubam com Viserion."}]}
];

// ---------- Casas menores e ausentes ----------
const casasMenores = [
  {nome:"Beesbury", texto:"Lorde Lyman Beesbury, mestre da moeda, é a primeira morte da Dança: Criston Cole o mata no Conselho Verde (T1E9).", nota:"Sem ligação com GoT."},
  {nome:"Cargyll", texto:"Ser Erryk (Negros) e Ser Arryk (Verdes), gêmeos da Guarda Real que se matam em Pedra do Dragão (T2E2).", nota:"Sem ligação com GoT."},
  {nome:"Wylde", texto:"Lorde Jasper Wylde, o Ironrod, mestre das leis de Aegon II: tenta estuprar Alicent e é decapitado por Daemon na queda de Porto Real (T3E2).", nota:"Sem ligação com GoT."},
  {nome:"Dustin", texto:"Ser Roderick Dustin, Roddy, a Ruína, Senhor de Barrowton: lidera os Lobos do Inverno por Rhaenyra, entrega a cabeça de Jason Lannister (T3E1) e morre em Tumbleton (T3E8).", nota:"Só nos livros: Lady Barbrey Dustin, de Barrowton, que odeia Ned Stark por não ter trazido o corpo do marido de volta."},
  {nome:"Redfort", texto:"Ser Adrian Redfort, cavaleiro do Vale pelos Negros, escolta Alicent a Harrenhal e é morto por Aemond (T3E7).", nota:"Só nos livros: os Redfort do Vale; Mychel Redfort é o escudeiro por quem Mya Stone se apaixona."},
  {nome:"Roxton", texto:"Ser Jon Roxton, o Audaz, cavaleiro dos Verdes: captura Corlys (T3E6) e duela com Daemon em Tumbleton (T3E8).", nota:"Sem ligação com GoT."},
  {nome:"Caswell", texto:"Lorde Caswell é enforcado por Criston Cole ao tentar sair de Porto Real para avisar Rhaenyra (T2E1).", nota:"Sem ligação com GoT."},
  {nome:"Celtigar", texto:"Lorde Bartimos Celtigar, da Ilha da Garra, senta no Conselho Negro (T1E10).", nota:"Só nos livros: os Celtigar seguem Stannis e depois se curvam a Joffrey."},
  {nome:"Lonmouth", texto:"Ser Joffrey Lonmouth, o Cavaleiro dos Beijos, amante de Laenor, morto por Criston no banquete de casamento de Rhaenyra (T1E5).", nota:"Só nos livros: Richard Lonmouth é escudeiro de Robert Baratheon."},
  {nome:"Marbrand", texto:"Ser Lorent Marbrand, Guarda Real de Rhaenyra (T2).", nota:"Só nos livros: Addam Marbrand é vassalo de Tywin e amigo de Jaime."}
];
const casasAusentes = [
  {nome:"Greyjoy", texto:"Nenhum Greyjoy aparece na série. Nos livros, Dalton Greyjoy, o Kraken Vermelho, saqueia as terras Lannister pelos Negros.", nota:"Em GoT: Balon, Theon, Yara e Euron."},
  {nome:"Tyrell", texto:"Jardim de Cima fica de fora da guerra na série. Nos livros, o Senhor Tyrell é uma criança e a casa se mantém neutra.", nota:"Em GoT: Olenna, Margaery, Loras e Mace."},
  {nome:"Martell", texto:"Dorne é um reino independente nessa época. Só entra nos Sete Reinos pelo casamento de Daeron II com Myriah Martell, na linhagem.", nota:"Em GoT: Oberyn, Doran, Ellaria e Elia, a esposa de Rhaegar."}
];

// ---------- Livro x serie ----------
const livroSerie = [
  {tema:"Nettles e Sheepstealer", livro:"Nettles, uma menina das docas, doma Sheepstealer alimentando-o com ovelhas e luta na Goela sem perder o controle do dragão.", serie:"A personagem foi cortada. Rhaena fica com Sheepstealer, não o domina, e o descontrole dele custa Vermax na Goela (T3E1)."},
  {tema:"A morte de Jacaerys", livro:"Vermax é abatido sobre a Goela; Jace cai no mar e é morto por besteiros da Triarquia.", serie:"Mesmo resultado, com o escorpião derrubando Vermax e o fogo amigo de Sheepstealer no caminho (T3E1)."},
  {tema:"Alicent e Aemond", livro:"Alicent fica presa em Porto Real depois da queda da cidade. Aemond reina em Harrenhal com Alys Rivers e não é envenenado.", serie:"Rhaenyra oferece a liberdade a Alicent em troca da morte de Aemond; ela o envenena em Harrenhal e ele sobrevive (T3E7)."},
  {tema:"Alys Rivers", livro:"Uma ama de leite e bruxa de Harrenhal, muito mais velha do que aparenta; nada de imortalidade dita com todas as letras.", serie:"Alys conta que ficou imortal ao falhar em salvar o filho com magia (T3E8)."},
  {tema:"Daeron Targaryen", livro:"Daeron marcha com o exército de Ormund desde o começo, em Tessarion, e é querido pelos soldados.", serie:"Primeiro um impostor usado por Ormund, depois o verdadeiro, proclamado rei em Tumbleton (T3)."},
  {tema:"A morte de Criston Cole", livro:"No “Baile do Carniceiro”, cercado, Criston pede combate singular e é morto por flechas, entre elas a de Black Aly Blackwood.", serie:"Fiel ao livro, trocando o cerco pela emboscada depois da ponte queimada (T3E6)."},
  {tema:"A morte de Otto", livro:"Rhaenyra manda executar Otto Hightower ao tomar Porto Real.", serie:"Igual, com Larys entregando Otto a Daemon e Rhaenyra decapitando-o em pessoa (T3E2)."},
  {tema:"A morte de Helaena", livro:"Helaena pula da janela depois da morte do filho Maelor; o povo culpa Rhaenyra e se revolta.", serie:"Helaena, grávida, pula depois da alimentação forçada; Maelor não existe na série (T3E8)."},
  {tema:"Tumbleton", livro:"Ormund e Roderick Dustin se matam; Ulf e Hugh, os “Dois Traidores”, mudam de lado e queimam a cidade.", serie:"Até o fim da T3 só Ulf trai; Hugh perde a mulher, Kat, no incêndio (T3E8)."},
  {tema:"Simon Strong", livro:"Aemond executa Simon Strong e os Strong de Harrenhal ao tomar o castelo.", serie:"Igual, logo na chegada de Vhagar (T3E2)."},
  {tema:"Luthor Largent", livro:"Comandante da Patrulha da Cidade desde os tempos em que Daemon a comandava; morre na revolta de Porto Real.", serie:"Entrega a cidade a Daemon e é assassinado por homens pagos por Ormund (T3E5)."},
  {tema:"Os ovos de Daenerys", livro:"A origem dos três ovos que Illyrio dá a Daenerys nunca é explicada.", serie:"Os ovos que Rhaena leva ao Vale (T2E3) são sugeridos como os de Daenerys; o showrunner chama isso de “um futuro possível”."}
];
const livroAlem = [
  {tema:"Daemon e Aemond", texto:"Nos livros, os dois duelam sobre o Olho de Deus: Caraxes e Vhagar morrem, Daemon some e o corpo de Aemond é achado anos depois com a Irmã Negra atravessada no olho."},
  {tema:"Rhaenyra", texto:"Rhaenyra perde Porto Real numa revolta, foge para Pedra do Dragão e é devorada por Sunfyre diante do filho Aegon, por ordem de Aegon II."},
  {tema:"Aegon II", texto:"Aegon II reina meio ano e morre envenenado; a corte coroa Aegon III, filho de Rhaenyra, e o casa com Jaehaera, filha de Helaena."},
  {tema:"Cregan Stark", texto:"Cregan chega a Porto Real depois do fim da guerra e governa por um dia, a “Hora do Lobo”, julgando os traidores. Casa com Black Aly Blackwood."},
  {tema:"Baela e Alyn", texto:"Baela casa com Alyn Velaryon, que vira o grande almirante Targaryen; os Velaryon de Game of Thrones descendem dos dois."},
  {tema:"Os dragões", texto:"A Dança mata quase todos os dragões. Silverwing, Sheepstealer e Morning sobrevivem; os últimos dragões morrem no reinado de Aegon III."}
];

// ---------- Antes da T4 ----------
const resumos = {
  1:["O Grande Conselho de Harrenhal escolhe Viserys como herdeiro de Jaehaerys I, passando por cima de Rhaenys, a Rainha Que Nunca Foi.",
     "A rainha Aemma morre no parto e Viserys nomeia a filha Rhaenyra herdeira, deixando o irmão Daemon de lado.",
     "Viserys conta a Rhaenyra o sonho de Aegon: a Canção de Gelo e Fogo e a necessidade de um Targaryen no trono quando o inverno chegar.",
     "Viserys se casa com Alicent Hightower, amiga de infância de Rhaenyra, e tem com ela Aegon, Helaena, Aemond e Daeron.",
     "Rhaenyra casa com Laenor Velaryon, mas os três filhos, Jacaerys, Lucerys e Joffrey, são de Harwin Strong, e a corte sabe.",
     "Criston Cole, rejeitado por Rhaenyra, mata Joffrey Lonmouth no banquete e passa para o lado de Alicent.",
     "Daemon casa com Laena Velaryon; depois da morte dela, Aemond reivindica Vhagar e perde o olho na briga com os sobrinhos.",
     "Rhaenyra e Daemon se casam em Pedra do Dragão depois de forjar a morte de Laenor.",
     "Viserys morre e Alicent entende as últimas palavras dele como um pedido para coroar Aegon; Otto e Criston coroam Aegon II no Fosso dos Dragões, e Rhaenys irrompe com Meleys.",
     "Em Ponta Tempestade, Vhagar devora Lucerys e Arrax; a guerra começa."],
  2:["Daemon manda matar Aemond por vingança e os assassinos, “Sangue e Queijo”, matam o pequeno Jaehaerys, filho de Aegon II.",
     "Os gêmeos Cargyll, um de cada lado, se matam em Pedra do Dragão.",
     "Blackwood e Bracken abrem a guerra nas Terras Fluviais na Batalha do Moinho em Chamas.",
     "Daemon toma Harrenhal e passa a temporada preso em visões com Alys Rivers.",
     "Rhaenys morre em Rook's Rest; Aegon II e Sunfyre ficam destruídos e Aemond assume como regente.",
     "Rhaenyra recruta sementes de dragão: Addam monta Seasmoke, Hugh reivindica Vermithor e Ulf, Silverwing.",
     "Jacaerys fecha o Pacto de Gelo e Fogo com Cregan Stark e garante a travessia das Gêmeas prometendo Harrenhal aos Frey.",
     "Rhaena leva os filhos pequenos de Rhaenyra e quatro ovos para o Vale; um deles choca no fim da temporada.",
     "Alicent se encontra em segredo com Rhaenyra e aceita entregar a cidade em troca da vida dos filhos; Aegon foge com Larys.",
     "Daemon volta a Pedra do Dragão e se ajoelha para Rhaenyra; os exércitos se movem para a guerra."],
  3:["Na Batalha da Goela, a Triarquia saqueia Maré Alta, Jacaerys morre e Alyn mata Lohar; Rhaena domina Sheepstealer pela metade.",
     "Daemon destrói o exército de Jason Lannister com os Lobos do Inverno de Roderick Dustin.",
     "Rhaenyra toma Porto Real, decapita Otto e senta no Trono de Ferro; Aegon foge e Aemond chega a Harrenhal ferido.",
     "Ormund Hightower finge submissão, toma Tumbleton, proclama rei um Daeron que primeiro era impostor e cunha moedas.",
     "O cofre está vazio: Rhaenyra serve ratos aos nobres, distribui comida com Mysaria e faz Torrhen Manderly de bode expiatório.",
     "Criston Cole é abandonado por Gwayne e morre pela flecha de Black Aly Blackwood numa emboscada dos Tully.",
     "Alicent aceita matar Aemond em troca da liberdade, envenena-o em Harrenhal e foge; Aemond sobrevive com Alys.",
     "Sunfyre reaparece e salva Aegon; Ormund compra Ulf com a promessa de Driftmark.",
     "Daemon encontra Rhaena com Sheepstealer e esconde isso de Rhaenyra; o dragão é ferido por Caraxes e Rhaena é levada a Porto Real.",
     "Ulf queima Tumbleton, Ormund e Roderick morrem, Helaena se mata e Rhaenyra, cada vez mais implacável, manda matar o Alto Septão."]
};
const pendencias = [
  "Daeron sumiu no incêndio de Tumbleton; Tessarion continua presa lá.",
  "Aemond, envenenado e vivo, foi mandado por Aegon buscar Vhagar.",
  "Aegon II e Sunfyre estão de volta; o povo começa a chamá-lo de verdadeiro rei.",
  "Ulf tem Silverwing e já traiu os dois lados.",
  "Rhaena está presa em Porto Real e Sheepstealer, ferido.",
  "Os ovos do Vale e o ninho de Harrenhal continuam sem dono.",
  "Corlys e Rhaenyra brigados, Mysaria expulsa, Baela detida: o lado Negro está rachado.",
  "Cregan Stark ainda não desceu com o exército do Norte."
];

// ---------- Quiz ----------
const quiz = [
  {pergunta:"O rei te nomeia herdeira e metade do reino resmunga. Você:", opcoes:[
    {texto:"Governa e deixa o reino se acostumar.", lado:"negros", quem:"rhaenyra-targaryen"},
    {texto:"Casa, faz filhos e cala a corte com uma linhagem.", lado:"verdes", quem:"alicent-hightower"},
    {texto:"Queima quem resmungar.", lado:"negros", quem:"daemon-targaryen"}]},
  {pergunta:"Seu irmão fez uma besteira que pode custar a guerra:", opcoes:[
    {texto:"Protege ele e resolve em silêncio.", lado:"verdes", quem:"alicent-hightower"},
    {texto:"Leva ao conselho e deixa o reino decidir.", lado:"negros", quem:"corlys-velaryon"},
    {texto:"Usa a besteira a seu favor.", lado:"verdes", quem:"aemond-targaryen"}]},
  {pergunta:"Um dragão sem cavaleiro aparece na praia:", opcoes:[
    {texto:"Monta na hora, sem pensar.", lado:"negros", quem:"daemon-targaryen"},
    {texto:"Deixa para quem tem o sangue certo.", lado:"verdes", quem:"otto-hightower"},
    {texto:"Manda um plebeu tentar primeiro.", lado:"negros", quem:"mysaria"}]},
  {pergunta:"Juramento ou família?", opcoes:[
    {texto:"Juramento. Palavra dada é dívida.", lado:"negros", quem:"cregan-stark"},
    {texto:"Família. O resto é detalhe.", lado:"verdes", quem:"alicent-hightower"},
    {texto:"O que der mais poder no fim do dia.", lado:"verdes", quem:"larys-strong"}]},
  {pergunta:"A cidade tem fome e o cofre está vazio:", opcoes:[
    {texto:"Serve ratos aos nobres que esconderam comida.", lado:"negros", quem:"rhaenyra-targaryen"},
    {texto:"Esconde o tesouro e espera o vento mudar.", lado:"verdes", quem:"tyland-lannister"},
    {texto:"Abre os celeiros do seu próprio castelo.", lado:"negros", quem:"corlys-velaryon"}]},
  {pergunta:"Alguém insulta seus filhos na frente da corte:", opcoes:[
    {texto:"Quem falou perde o olho.", lado:"negros", quem:"rhaenyra-targaryen"},
    {texto:"Engole, sorri e anota o nome.", lado:"verdes", quem:"alicent-hightower"},
    {texto:"Alguém morre de madrugada, sem rastro.", lado:"verdes", quem:"larys-strong"}]},
  {pergunta:"Como você luta uma guerra?", opcoes:[
    {texto:"De dragão, de frente, primeiro a chegar.", lado:"negros", quem:"daemon-targaryen"},
    {texto:"Com exército, cerco e paciência.", lado:"verdes", quem:"ormund-hightower"},
    {texto:"Com cartas, boatos e sussurros.", lado:"negros", quem:"mysaria"}]},
  {pergunta:"E o trono, no fim de tudo?", opcoes:[
    {texto:"Sento e governo.", lado:"negros", quem:"rhaenyra-targaryen"},
    {texto:"Coloco um filho e governo por ele.", lado:"verdes", quem:"otto-hightower"},
    {texto:"Divido o reino e evito a guerra.", lado:"verdes", quem:"daeron-targaryen"}]}
];
const quizPerfis = {
  "rhaenyra-targaryen":{nome:"Rhaenyra Targaryen", frase:"Você toma o que é seu e lida com as consequências depois."},
  "daemon-targaryen":{nome:"Daemon Targaryen", frase:"Você resolve as coisas em cima de um dragão, e pergunta depois."},
  "alicent-hightower":{nome:"Alicent Hightower", frase:"Você sobrevive a qualquer corte: paciência, família e memória longa."},
  "otto-hightower":{nome:"Otto Hightower", frase:"Você joga o jogo longo e prefere governar por trás do trono."},
  "corlys-velaryon":{nome:"Corlys Velaryon", frase:"Você pensa em legado: navios, ouro e um nome que dure."},
  "aemond-targaryen":{nome:"Aemond Targaryen", frase:"Você transforma cada afronta em combustível."},
  "mysaria":{nome:"Mysaria", frase:"Você vence com informação, não com espada."},
  "larys-strong":{nome:"Larys Strong", frase:"Você sabe o que todos escondem e cobra por isso."},
  "cregan-stark":{nome:"Cregan Stark", frase:"Você cumpre a palavra, custe o inverno que custar."},
  "tyland-lannister":{nome:"Tyland Lannister", frase:"Você guarda o ouro e sobrevive a todos os reis."},
  "ormund-hightower":{nome:"Ormund Hightower", frase:"Você acredita em exércitos grandes e promessas pequenas."},
  "daeron-targaryen":{nome:"Daeron Targaryen", frase:"Você preferia não estar na guerra, mas faz o que precisa."}
};

// ---------- Mapa esquematico de Westeros (viewBox 0 0 520 900) ----------
const mapaContorno = "M150,40 L380,40 L430,80 L440,150 L400,170 L420,230 L470,260 L450,330 L400,350 L430,420 L470,470 L480,560 L440,620 L480,700 L460,790 L400,840 L300,860 L230,830 L190,780 L150,720 L120,650 L160,600 L130,520 L90,470 L130,420 L100,380 L120,300 L90,250 L110,180 L130,110 Z";
const mapaLugares = [
  {nome:"A Muralha", x:275, y:72, tipo:"muralha", pagina:"lugares.html#lugar-muralha"},
  {nome:"Winterfell", x:270, y:190, casa:"Stark", pagina:"casas.html#casa-stark"},
  {nome:"Porto Branco", x:360, y:250, casa:"Manderly", pagina:"casas.html#casa-manderly"},
  {nome:"Barrowton", x:235, y:262, casa:"Dustin", pagina:"casas.html#menor-dustin"},
  {nome:"As Gêmeas", x:290, y:380, casa:"Frey", pagina:"casas.html#casa-frey"},
  {nome:"Ninho da Águia", x:405, y:400, casa:"Arryn", pagina:"casas.html#casa-arryn"},
  {nome:"Runestone", x:440, y:430, casa:"Royce", pagina:"casas.html#casa-royce"},
  {nome:"Correrrio", x:235, y:470, casa:"Tully", pagina:"casas.html#casa-tully"},
  {nome:"Raventree Hall", x:262, y:440, casa:"Blackwood", pagina:"casas.html#casa-blackwood-e-bracken"},
  {nome:"Harrenhal", x:305, y:485, casa:"Strong", pagina:"casas.html#casa-strong"},
  {nome:"Rochedo Casterly", x:150, y:515, casa:"Lannister", pagina:"casas.html#casa-lannister"},
  {nome:"Porto Real", x:352, y:562, casa:"Targaryen", pagina:"casas.html#casa-targaryen"},
  {nome:"Rook's Rest", x:378, y:522, casa:"Staunton"},
  {nome:"Duskendale", x:395, y:542, casa:"Darklyn", pagina:"casas.html#casa-darklyn"},
  {nome:"Pedra do Dragão", x:445, y:560, casa:"Targaryen", pagina:"lugares.html#lugar-mesa-pintada"},
  {nome:"Driftmark", x:432, y:588, casa:"Velaryon", pagina:"casas.html#casa-velaryon"},
  {nome:"Tumbleton", x:285, y:595, casa:"Footly"},
  {nome:"Jardim de Cima", x:238, y:645, casa:"Tyrell", pagina:"casas.html#ausente-tyrell"},
  {nome:"Vilavelha", x:198, y:705, casa:"Hightower", pagina:"casas.html#casa-hightower"},
  {nome:"Ponta Tempestade", x:402, y:652, casa:"Baratheon", pagina:"casas.html#casa-baratheon"},
  {nome:"Blackhaven", x:362, y:702, casa:"Dondarrion", pagina:"casas.html#casa-cole"},
  {nome:"Lançasolar", x:420, y:820, casa:"Martell", pagina:"casas.html#ausente-martell"}
];
const mapaBatalhas = [
  {evento:"ponta-tempestade", x:424, y:634},
  {evento:"moinho", x:246, y:426},
  {evento:"rooks-rest", x:386, y:508},
  {evento:"goela", x:462, y:606},
  {evento:"lannister", x:200, y:492},
  {evento:"porto-real", x:376, y:584, rotulo:"baixo"},
  {evento:"harrenhal", x:322, y:470},
  {evento:"emboscada-tully", x:270, y:522, rotulo:"baixo"},
  {evento:"tumbleton", x:296, y:582}
];

// ---------- Grafo de aliancas ----------
const aliancasNos = [
  {id:"rhaenyra-targaryen", nome:"Rhaenyra", lado:"negros"},
  {id:"daemon-targaryen", nome:"Daemon", lado:"negros"},
  {id:"corlys-velaryon", nome:"Corlys", lado:"negros"},
  {id:"rhaenys-targaryen", nome:"Rhaenys", lado:"negros", ate:"T2E4"},
  {id:"jacaerys-velaryon", nome:"Jacaerys", lado:"negros", ate:"T3E1"},
  {id:"mysaria", nome:"Mysaria", lado:"negros"},
  {id:"ulf-white", nome:"Ulf", lado:"negros", desde:"T2E2"},
  {id:"alicent-hightower", nome:"Alicent", lado:"verdes"},
  {id:"otto-hightower", nome:"Otto", lado:"verdes", ate:"T3E2"},
  {id:"aegon-ii-targaryen", nome:"Aegon II", lado:"verdes"},
  {id:"aemond-targaryen", nome:"Aemond", lado:"verdes"},
  {id:"helaena-targaryen", nome:"Helaena", lado:"verdes", ate:"T3E8"},
  {id:"criston-cole", nome:"Criston", lado:"verdes", ate:"T3E6"},
  {id:"larys-strong", nome:"Larys", lado:"verdes"},
  {id:"ormund-hightower", nome:"Ormund", lado:"verdes", desde:"T3E1", ate:"T3E8"}
];
const aliancasTipos = {casado:"Casados", aliado:"Aliados", inimigo:"Inimigos", traicao:"Traição", rompido:"Rompidos"};
const aliancasArestas = {
  1:[
    {a:"rhaenyra-targaryen", b:"daemon-targaryen", tipo:"casado", nota:"Casam em Pedra do Dragão (T1E7)"},
    {a:"rhaenyra-targaryen", b:"alicent-hightower", tipo:"rompido", nota:"Amigas de infância que a corte separa"},
    {a:"alicent-hightower", b:"otto-hightower", tipo:"aliado", nota:"Pai e filha, o eixo dos Verdes"},
    {a:"alicent-hightower", b:"criston-cole", tipo:"aliado", nota:"Criston troca Rhaenyra por Alicent (T1E5)"},
    {a:"rhaenyra-targaryen", b:"criston-cole", tipo:"inimigo", nota:"Rejeitado, vira o inimigo mais fiel"},
    {a:"corlys-velaryon", b:"rhaenys-targaryen", tipo:"casado", nota:"A Serpente do Mar e a Rainha Que Nunca Foi"},
    {a:"corlys-velaryon", b:"rhaenyra-targaryen", tipo:"aliado", nota:"Driftmark fecha com os Negros (T1E10)"},
    {a:"larys-strong", b:"alicent-hightower", tipo:"aliado", nota:"O incêndio de Harrenhal a serviço dela (T1E6)"},
    {a:"aegon-ii-targaryen", b:"helaena-targaryen", tipo:"casado", nota:"Irmãos casados pela mãe"},
    {a:"otto-hightower", b:"daemon-targaryen", tipo:"inimigo", nota:"Ódio desde o primeiro conselho"},
    {a:"mysaria", b:"daemon-targaryen", tipo:"rompido", nota:"Amante abandonada que vira o Verme Branco"},
    {a:"aemond-targaryen", b:"rhaenyra-targaryen", tipo:"inimigo", nota:"O olho perdido e Lucerys morto (T1E10)"},
    {a:"jacaerys-velaryon", b:"aemond-targaryen", tipo:"inimigo", nota:"A briga em Driftmark em que Aemond perde o olho (T1E7)"}
  ],
  2:[
    {a:"rhaenyra-targaryen", b:"daemon-targaryen", tipo:"rompido", nota:"Separados pela guerra; ele só se ajoelha em T2E8"},
    {a:"rhaenyra-targaryen", b:"mysaria", tipo:"aliado", nota:"Mysaria vira a mestra dos sussurros dela"},
    {a:"otto-hightower", b:"aegon-ii-targaryen", tipo:"rompido", nota:"Aegon demite o avô (T2E2)"},
    {a:"criston-cole", b:"aegon-ii-targaryen", tipo:"aliado", nota:"Criston vira Mão do Rei"},
    {a:"aemond-targaryen", b:"aegon-ii-targaryen", tipo:"traicao", nota:"Vhagar queima o irmão em Rook's Rest (T2E4)"},
    {a:"alicent-hightower", b:"criston-cole", tipo:"casado", nota:"Amantes em segredo"},
    {a:"corlys-velaryon", b:"rhaenyra-targaryen", tipo:"aliado", nota:"Corlys vira Mão da Rainha"},
    {a:"larys-strong", b:"aegon-ii-targaryen", tipo:"aliado", nota:"Larys tira Aegon da cidade (T2E8)"},
    {a:"alicent-hightower", b:"rhaenyra-targaryen", tipo:"aliado", nota:"Encontro secreto: Alicent entrega a cidade (T2E8)"},
    {a:"ulf-white", b:"rhaenyra-targaryen", tipo:"aliado", nota:"Semente de dragão jurada a ela (T2E7)"},
    {a:"rhaenys-targaryen", b:"rhaenyra-targaryen", tipo:"aliado", nota:"Morre por ela em Rook's Rest (T2E4)"},
    {a:"jacaerys-velaryon", b:"rhaenyra-targaryen", tipo:"aliado", nota:"Herdeiro e embaixador no Norte"},
    {a:"helaena-targaryen", b:"aemond-targaryen", tipo:"rompido", nota:"Ela o acusa de ter deixado o irmão queimar"}
  ],
  3:[
    {a:"alicent-hightower", b:"rhaenyra-targaryen", tipo:"rompido", nota:"Entrega a cidade e vira prisioneira (T3E2)"},
    {a:"alicent-hightower", b:"aemond-targaryen", tipo:"traicao", nota:"Alicent envenena o filho (T3E7)"},
    {a:"ulf-white", b:"rhaenyra-targaryen", tipo:"traicao", nota:"Comprado por Ormund com Driftmark (T3E7)"},
    {a:"ulf-white", b:"ormund-hightower", tipo:"traicao", nota:"Queima Tumbleton com Ormund dentro (T3E8)"},
    {a:"larys-strong", b:"aegon-ii-targaryen", tipo:"rompido", nota:"Abandona Aegon na fuga (T3E7)"},
    {a:"corlys-velaryon", b:"rhaenyra-targaryen", tipo:"rompido", nota:"Chama os filhos dela de bastardos (T3E3)"},
    {a:"daemon-targaryen", b:"rhaenyra-targaryen", tipo:"rompido", nota:"Daemon esconde Rhaena e Sheepstealer (T3E4)"},
    {a:"mysaria", b:"rhaenyra-targaryen", tipo:"rompido", nota:"Demitida e expulsa (T3E8)"},
    {a:"ormund-hightower", b:"aegon-ii-targaryen", tipo:"traicao", nota:"Proclama Daeron rei no lugar de Aegon (T3E5)"},
    {a:"criston-cole", b:"ormund-hightower", tipo:"aliado", nota:"Os dois exércitos dos Verdes"},
    {a:"otto-hightower", b:"larys-strong", tipo:"traicao", nota:"Larys entrega Otto a Daemon (T3E2)"},
    {a:"aegon-ii-targaryen", b:"aemond-targaryen", tipo:"aliado", nota:"Aegon pede a Aemond que busque Vhagar (T3E8)"},
    {a:"daemon-targaryen", b:"otto-hightower", tipo:"inimigo", nota:"Daemon decapita Jasper; Rhaenyra, Otto (T3E2)"},
    {a:"jacaerys-velaryon", b:"rhaenyra-targaryen", tipo:"rompido", nota:"Prende a mãe para lutar no lugar dela e morre (T3E1)"}
  ]
};

// ---------- Arvore genealogica (viewBox 0 0 1000 620) ----------
const arvoreNos = [
  {id:"jaehaerys", nome:"Jaehaerys I ⚭ Alysanne", x:500, y:40, lado:"neutra"},
  {id:"baelon", nome:"Baelon", x:300, y:130, lado:"neutra"},
  {id:"aemon-velho", nome:"Aemon", x:790, y:130, lado:"neutra"},
  {id:"aemma", nome:"Aemma Arryn", x:70, y:220, lado:"neutra"},
  {id:"viserys", nome:"Viserys I", x:190, y:220, lado:"neutra", pers:"viserys-i-targaryen"},
  {id:"alicent", nome:"Alicent Hightower", x:330, y:220, lado:"verdes", pers:"alicent-hightower"},
  {id:"daemon", nome:"Daemon", x:500, y:220, lado:"negros", pers:"daemon-targaryen"},
  {id:"rhaenys", nome:"Rhaenys ⚭ Corlys", x:790, y:220, lado:"negros", pers:"rhaenys-targaryen"},
  {id:"rhaenyra", nome:"Rhaenyra", x:100, y:330, lado:"negros", pers:"rhaenyra-targaryen"},
  {id:"aegon2", nome:"Aegon II", x:235, y:330, lado:"verdes", pers:"aegon-ii-targaryen"},
  {id:"helaena", nome:"Helaena", x:350, y:330, lado:"verdes", pers:"helaena-targaryen"},
  {id:"aemond", nome:"Aemond", x:465, y:330, lado:"verdes", pers:"aemond-targaryen"},
  {id:"daeron", nome:"Daeron", x:580, y:330, lado:"verdes", pers:"daeron-targaryen"},
  {id:"laena", nome:"Laena", x:730, y:330, lado:"negros"},
  {id:"laenor", nome:"Laenor", x:870, y:330, lado:"negros"},
  {id:"jace", nome:"Jacaerys", x:50, y:460, lado:"negros", pers:"jacaerys-velaryon"},
  {id:"luke", nome:"Lucerys", x:140, y:460, lado:"negros", pers:"lucerys-velaryon"},
  {id:"joffrey", nome:"Joffrey", x:230, y:460, lado:"negros"},
  {id:"aegon3", nome:"Aegon, o Jovem", x:335, y:460, lado:"negros", pers:"aegon-o-jovem-e-viserys"},
  {id:"viserys2", nome:"Viserys II", x:445, y:460, lado:"negros", pers:"aegon-o-jovem-e-viserys"},
  {id:"jaehaera", nome:"Jaehaerys, Jaehaera e Maelor", x:610, y:460, lado:"verdes"},
  {id:"baela", nome:"Baela", x:770, y:460, lado:"negros", pers:"baela-targaryen"},
  {id:"rhaena", nome:"Rhaena", x:870, y:460, lado:"negros", pers:"rhaena-targaryen"},
  {id:"daenerys", nome:"Daenerys, Viserys III, Rhaegar e Jon Snow", x:445, y:580, lado:"gelo"}
];
// xDesce: por onde a linha dos filhos desce (corredor livre entre caixas); yBus: altura do barramento
const arvoreCasamentos = [
  {a:"aemma", b:"viserys", filhos:["rhaenyra"], xDesce:130, yBus:296},
  {a:"viserys", b:"alicent", filhos:["aegon2","helaena","aemond","daeron"], xDesce:260, yBus:304},
  {a:"rhaenyra", b:"laenor", filhos:["jace","luke","joffrey"], nota:"Pai verdadeiro: Harwin Strong", tracejado:true, arco:true, xDesce:100, yBus:404},
  {a:"rhaenyra", b:"daemon", filhos:["aegon3","viserys2"], xDesce:167, yBus:418},
  {a:"daemon", b:"laena", filhos:["baela","rhaena"], xDesce:655, yBus:418},
  {a:"aegon2", b:"helaena", filhos:["jaehaera"], xDesce:292, yBus:432}
];
const arvoreFilhos = [
  {pai:"jaehaerys", filhos:["baelon","aemon-velho"], yBus:95},
  {pai:"baelon", filhos:["viserys","daemon"], yBus:180},
  {pai:"aemon-velho", filhos:["rhaenys"], yBus:180},
  {pai:"rhaenys", filhos:["laena","laenor"], yBus:296},
  {pai:"viserys2", filhos:["daenerys"], tracejado:true, nota:"oito gerações", yBus:530}
];
