const getButtons = document.querySelectorAll(".tecla");
let count = 0;

console.log(getButtons);

function playSounds(idElementAudio) {
  document.querySelector(idElementAudio).play();
}

for (let count = 0; count < getButtons.length; count++) {
  const midiKey = getButtons[count];
  const midi = midiKey.classList[1];

  const idAudio = `#som_${midi}`;

  midiKey.onclick = function () {
    playSounds(idAudio);
  };
}
