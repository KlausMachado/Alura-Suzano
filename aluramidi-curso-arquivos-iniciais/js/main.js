const getButtons = document.querySelectorAll(".tecla");
let count = 0;

console.log(getButtons);

function playSounds(idElementAudio) {
  const element = document.querySelector(idElementAudio);

  if (element && element.localName === `audio`) {
    element.play();
  } else {
    console.log(`Elemento n'ao encontrado`);
  }
}

for (let count = 0; count < getButtons.length; count++) {
  const midiKey = getButtons[count];
  const midi = midiKey.classList[1];
  const idAudio = `#som_${midi}`;

  midiKey.onclick = function () {
    playSounds(idAudio);
  };

  midiKey.onkeydown = function (event) {
    if (event.code === `Space` || event.code === `Enter`) {
      midiKey.classList.add("ativa");
    }
  };

  midiKey.onkeyup = function () {
    midiKey.classList.remove("ativa");
  };
}
