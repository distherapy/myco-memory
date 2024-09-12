document.addEventListener('DOMContentLoaded', () => {
  nextButton.classList.add('hide');
});
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const mushroomContainerElement = document.getElementById('mushroom-container');
const mushroomElement = document.getElementById('mushroom');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultsElement = document.getElementById('results');
//const mushroomImage = document.getElementById("mushroom-image");
const mhs = new Image(200,200);
mhs.src = 'img/manyheadedslime.jpg';
const bsl = new Image(200,200);
bsl.src = 'img/britishsoldierlichen.png';
const waspmold = new Image(200,200);
waspmold.src = 'img/bgwaspmold0.jpeg';
const bgwaspmold = new Image(200,200);
bgwaspmold.src = 'img/bgwaspmold.jpeg';
const enada = new Image(200,200);
enada.src = 'img/enada.png';
const ppc = new Image(200,200);
ppc.src = 'img/ppc.png';
const cl = new Image(200,200);
cl.src = 'img/chickenlips.png';
const so = new Image(200,200);
so.src = 'img/smokedoysterling.png';
const ge = new Image(200,200);
ge.src = 'img/goldenear.png';
const chrom = new Image(200,200);
chrom.src = 'img/chromosera.png';
const et = new Image(200,200);
et.src = 'img/earthtongue.png';
const ls = new Image(200,200);
ls.src = 'img/lessersulphur.png';
const graylegs = new Image(200,200);
graylegs.src = 'img/graylegs.png';
const rfpc = new Image(200,200);
rfpc.src = 'img/rfpc.png';
const thorn = new Image(200,200);
thorn.src = 'img/thorn.png';
const reddock = new Image(200,200);
reddock.src = 'img/reddock.png';
const sd = new Image(200,200);
sd.src = 'img/sulphurdust.png';
const dryad = new Image(200,200);
dryad.src = 'img/dryad.png';
const ladder = new Image(200,200);
ladder.src = 'img/ladder.png';
const pretzel = new Image(200,200);
pretzel.src = 'img/pretzel.png';
const hc = new Image(200,200);
hc.src = 'img/honeycomb.png';
const fairycup = new Image(200,200);
fairycup.src = 'img/stalkedfairycup.png';

images = [mhs, bsl, waspmold, enada, ppc, cl, so, ge, chrom, et, ls, graylegs, rfpc, thorn, reddock, sd, dryad, ladder, pretzel, hc, fairycup];
const mushrooms = [
	{
		mushroom: images[0],
		answers: [ 
			{ text: 'Many-Headed Slime', correct: true },
			{ text: 'Morel', correct: false },
			{ text: 'Bolete', correct: false },
			{ text: 'Chanterelle', correct: false },
		]
	},
	{
		mushroom: images[1],
		answers: [
			{ text: 'Lipstick Powderhorn', correct: false },
			{ text: 'Red Fruited Pixie Cup', correct: false },
			{ text: 'British Soldier Lichen', correct: true },
			{ text: 'Powdered Funnel Lichen', correct: false },
		]
	},
	{
		mushroom: images[2],
		answers: [ 
			{ text: 'Bulbasauritae', correct: false },
			{ text: 'Wasp Nest Slime Mold', correct: true },
			{ text: 'Red Monster Fungus', correct: false },
			{ text: 'Spring-Ups', correct: false },
		]
	},
	{
		mushroom: images[3],
		answers: [
			{ text: 'Widow Brew', correct: false },
			{ text: 'White Amanita', correct: false },
			{ text: 'Eastern North American Destroying Angel', correct: true },
			{ text: 'Powder Top', correct: false },
		]
	},
	{
		mushroom: images[4],
		answers: [ 
			{ text: 'Pebbled Pixie Cup', correct: true },
			{ text: 'Flaked Laurel', correct: false },
			{ text: 'Glistening Dew Cup', correct: false },
			{ text: 'Jack-in-the-Pulpit', correct: false },
		]
	},
	{
		mushroom: images[5],
		answers: [
			{ text: 'Osprey Farts', correct: false },
			{ text: 'Hen Pecks', correct: false },
			{ text: 'Rooster Fingers', correct: false },
			{ text: 'Chicken Lips', correct: true },
		]
	},
	{
		mushroom: images[6],
		answers: [ 
			{ text: 'Puff Balls', correct: false },
			{ text: 'Smoked Oysterling', correct: true },
			{ text: 'Bolete', correct: false },
			{ text: 'Wood Acne', correct: false },
		]
	},
	{
		mushroom: images[7],
		answers: [
			{ text: 'Forest Jelly', correct: false },
			{ text: 'Jelly Lichen', correct: false },
			{ text: 'Golden Ear', correct: true },
			{ text: 'Jelly Ear', correct: false },
		]
	},
	{
		mushroom: images[8],
		answers: [ 
			{ text: 'Brown Buttons', correct: false },
			{ text: 'Hyalorbilia', correct: false },
			{ text: 'Golden Amanita', correct: false },
			{ text: 'Chromosera', correct: true },
		]
	},
	{
		mushroom: images[9],
		answers: [
			{ text: 'Orange Tree Socks', correct: false },
			{ text: 'Orange Wind Socks', correct: false },
			{ text: 'Irregular Earth Tongue', correct: true },
			{ text: 'Common Earth Socks', correct: false },
		]
	},
	{
		mushroom: images[10],
		answers: [ 
			{ text: 'Lesser Sulphur Cup', correct: true },
			{ text: 'Cup of Sulphur', correct: false },
			{ text: 'Sulphur Sprouts', correct: false },
			{ text: 'Lesser Sulphur Shoots', correct: false },
		]
	},
	{
		mushroom: images[11],
		answers: [
			{ text: 'Lesser Gray Legs', correct: true },
			{ text: 'Wig of Grandmother', correct: false },
			{ text: 'Gray Shorts', correct: false },
			{ text: 'Lesser Gray Shorts', correct: false },
		]
	},	
	{
		mushroom: images[12],
		answers: [
			{ text: 'Cherry Turban', correct: false },
			{ text: 'Strawberry Pixie Cup', correct: false },
			{ text: 'Red-Fruited Pixie Cup', correct: true },
			{ text: 'Strawberry Turban', correct: false },
		]
	},
	{
		mushroom: images[13],
		answers: [ 
			{ text: 'Thorn Lichen', correct: true },
			{ text: 'Horn Lichen', correct: false },
			{ text: 'Pointed Lichen', correct: false },
			{ text: 'Sharp Lichen', correct: false },
		]
	},
	{
		mushroom: images[14],
		answers: [
			{ text: 'Red Spot', correct: false },
			{ text: 'Aged Red Fungus', correct: false },
			{ text: 'Aged Wine Rash', correct: false },
			{ text: 'Red Dock Spot', correct: true },
		]
	},
	{
		mushroom: images[15],
		answers: [ 
			{ text: 'Penicillin', correct: false },
			{ text: 'Tree Mold Lichen', correct: false },
			{ text: 'Sulphur Dust Lichen', correct: true },
			{ text: 'Green Foam Lichen', correct: false },
		]
	},
	{
		mushroom: images[16],
		answers: [
			{ text: 'Druid Bracket', correct: false },
			{ text: 'Pancake Bracket', correct: false },
			{ text: 'Dryad Saddle', correct: true },
			{ text: 'Druid Saddle', correct: false },
		]
	},

]

let shuffledMushrooms;
let currentMushroomIndex;
let score = 0; 
startButton.addEventListener('click', beginMycoMem);

function beginMycoMem() {
  startButton.classList.add('hide');
  shuffledMushrooms = mushrooms.sort(() => Math.random() - .5);
  currentMushroomIndex = 0;
  mushroomContainerElement.classList.remove('hide');
  setNextMushroom();
}
function showMushroom(mushroom) {
  mushroomElement.innerHTML = "<img src=" + mushroom.mushroom.src + " />";
  mushroom.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
          button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', () => selectAnswer(button));
      answerButtonsElement.appendChild(button);
  });
}
function selectAnswer(selectedButton) {
  Array.from(answerButtonsElement.children).forEach(button => {
      button.disabled = true;
      setStatusClass(button, button.dataset.correct);
  });

  const correct = selectedButton.dataset.correct;
  setStatusClass(selectedButton, correct);
  setTimeout(() => {
      if (shuffledMushroom.length > currentMushroomIndex + 1) {
          nextButton.classList.remove('hide');
      } else {
          completeMycoMem();
      }
  }, 1000);
}
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
      element.classList.add('correct');
  } else {
      element.classList.add('incorrect');
  }
}
function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('incorrect');
}
nextButton.addEventListener('click', () => {
  currentMushroomIndex++;
  setNextMushroom();
});
function setNextMushroom() {
  resetState();
  showMushroom(shuffledMushrooms[currentMushroomIndex]);
}
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(selectedButton) {
  Array.from(answerButtonsElement.children).forEach(button => {
      button.disabled = true;
      setStatusClass(button, button.dataset.correct);
  });

  const correct = selectedButton.dataset.correct;
  if (correct) {
      score++;
  }
  setStatusClass(selectedButton, correct);

  setTimeout(() => {
      if (shuffledMushrooms.length > currentMushroomIndex + 1) {
          nextButton.classList.remove('hide');
      } else {
          completeMycoMem();
      }
  }, 1000);
 
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
      element.classList.add('correct');
  } else {
      element.classList.add('incorrect');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('incorrect');
}

function completeMycoMem() {
  mushroomContainerElement.classList.add('hide');
  nextButton.classList.add('hide');
  resultsElement.classList.remove('hide');
  resultsElement.innerHTML = `
      <h2><font color="ffffff"><center>Accuracy: ${score} out of ${shuffledMushrooms.length}</p></center></h2>
      <center><button onclick="restartMycoMem()">Retake</button> or you can <button onclick="window.close()">Exit</button></center>`;
}

function restartMycoMem() {
  resultsElement.classList.add('hide');
  score = 0;
  currentMushroomIndex = 0;
  beginMycoMem();
}




