"use strict";

window.addEventListener("load", () => {
  document.getElementById("loader").classList.remove("active");
  document.body.classList.remove("cutY");
  const msg = "En vue du peu de temps disponible à la création de ce site web. celui-ci reste assez médiocre, nos excuses...";
  alert(msg);
})

const musicPath = "music.mp3";
const audio = new Audio(musicPath);
audio.loop = true;
window.addEventListener("mousemove", () => {
  audio.play();
});