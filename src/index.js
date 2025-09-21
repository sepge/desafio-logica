// Lista de heróis
const herois = [
  { nome: "Aragorn", xp: 950 },
  { nome: "Legolas", xp: 1500 },
  { nome: "Gimli", xp: 4500 },
  { nome: "Frodo", xp: 6000 },
  { nome: "Gandalf", xp: 7500 },
  { nome: "Boromir", xp: 8500 },
  { nome: "Elrond", xp: 9500 },
  { nome: "Galadriel", xp: 12000 }
];

// Laço de repetição para classificar cada herói
for (let i = 0; i < herois.length; i++) {
  const heroi = herois[i];
  let nivel = "";

  // Estrutura de decisão para classificar o herói
  if (heroi.xp < 1000) {
    nivel = "Ferro";
  } else if (heroi.xp <= 2000) {
    nivel = "Bronze";
  } else if (heroi.xp <= 5000) {
    nivel = "Prata";
  } else if (heroi.xp <= 7000) {
    nivel = "Ouro";
  } else if (heroi.xp <= 8000) {
    nivel = "Platina";
  } else if (heroi.xp <= 9000) {
    nivel = "Ascendente";
  } else if (heroi.xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  // Mensagem de saída
  console.log(`O Herói de nome **${heroi.nome}** está no nível de **${nivel}**`);
}
