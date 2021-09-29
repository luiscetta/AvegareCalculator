const card1 = {
  image: "https://f.i.uol.com.br/fotografia/2014/05/02/389026-400x600-1.jpeg",
  name: "Chapolin Colorado",
  attributes: {
    attack: 9,
    defense: 6,
    magic: 2
  }
};

const card2 = {
  image: "https://pbs.twimg.com/media/ERTpY0AX0AkGE9O.png",
  name: "Tripa Seca",
  attributes: {
    attack: 6,
    defense: 4,
    magic: 3
  }
};

const card3 = {
  image: "https://pbs.twimg.com/media/Ds-VUliWsAEciyj.jpg",
  name: "Super Sam",
  attributes: {
    attack: 7,
    defense: 5,
    magic: 4
  }
};

const card4 = {
  image: "https://pbs.twimg.com/media/De-cUgcXcAAg6N3.jpg",
  name: "Quase Nada",
  attributes: {
    attack: 4,
    defense: 2,
    magic: 5
  }
};

const card5 = {
  image:
    "https://i.pinimg.com/originals/ae/07/d4/ae07d4c8352442915160d495f3267cca.jpg",
  name: "Pirata Alma Negra",
  attributes: {
    attack: 5,
    defense: 7,
    magic: 1
  }
};

const card6 = {
  image:
    "https://opoderosochofer.files.wordpress.com/2014/12/vlcsnap-2014-12-28-22h47m29s210.png",
  name: "Bebê Jupteriano",
  attributes: {
    attack: 8,
    defense: 8,
    magic: 7
  }
};

let cards = [card1, card2, card3, card4, card5, card6];

let cardCpu;
let cardPlayer;

function drawCards() {
  let indexCardCpu = parseInt(Math.random() * 6);
  cardCpu = cards[indexCardCpu];

  let indexCardPlayer = parseInt(Math.random() * 6);

  while (indexCardCpu == indexCardPlayer) {
    indexCardPlayer = parseInt(Math.random() * 6);
  }

  cardPlayer = cards[indexCardPlayer];
  console.log(cardPlayer);

  document.getElementById("btnDraw").disabled = true;
  document.getElementById("btnPlay").disabled = false;

  displayCardPlayer();
}

function getSelectedAttribute() {
  let radioAttributes = document.getElementsByName("attribute");

  for (let i = 0; i < radioAttributes.length; i++) {
    if (radioAttributes[i].checked == true) {
      return radioAttributes[i].value;
    }
  }
}

function play() {
  const selectedAttribute = getSelectedAttribute();
  const resultElement = document.getElementById("result");
  let valuePlayerCard = cardPlayer.attributes[selectedAttribute];
  let valueCpuCard = cardCpu.attributes[selectedAttribute];

  if (valuePlayerCard > valueCpuCard) {
    resultElement.innerHTML = "<p class='final-result'> Você venceu! </p>";
  } else if (valueCpuCard > valuePlayerCard) {
    resultElement.innerHTML = "<p class='final-result'> Você perdeu! </p>";
  } else if (selectedAttribute == null) {
    alert("Escolha um atributo");
  } else {
    resultElement.innerHTML = "<p class='final-result'> Empatou! </p>";
  }

  document.getElementById("btnPlay").disabled = true;
  displayCardCpu();
}

function displayCardPlayer() {
  const divCardPlayer = document.getElementById("card-player");
  divCardPlayer.style.backgroundImage = `url(${cardPlayer.image})`;
  const frame =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  const tagHTML = "<div id='opcoes' class='card-status'>";

  let optionsText = "";
  for (let attribute in cardPlayer.attributes) {
    optionsText +=
      "<input type='radio' name='attribute' value='" +
      attribute +
      "'>" +
      attribute +
      " " +
      cardPlayer.attributes[attribute] +
      "<br>";
  }

  const name = `<p class="card-subtitle">${cardPlayer.name}</p>`;

  divCardPlayer.innerHTML = frame + name + tagHTML + optionsText + "</div>";
}

function displayCardCpu() {
  const divCardCpu = document.getElementById("card-cpu");
  divCardCpu.style.backgroundImage = `url(${cardCpu.image})`;
  const frame =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  const tagHTML = "<div id='opcoes' class='card-status'>";

  let optionsText = "";
  for (let attribute in cardCpu.attributes) {
    optionsText +=
      "<p type='text' name='attribute' value='" +
      attribute +
      "'>" +
      attribute +
      " " +
      cardCpu.attributes[attribute] +
      "</p>";
  }

  const name = `<p class="card-subtitle">${cardCpu.name}</p>`;

  divCardCpu.innerHTML = frame + name + tagHTML + optionsText + "</div>";
}

// 