
const video = document.querySelector('#video');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const backward = document.querySelector('#backward');
const forward = document.querySelector('#forward');

play.addEventListener('click', handlePlay);
pause.addEventListener('click', handlePause);


function handlePlay() {
  video.play();
  play.hidden = true;
  pause.hidden = false;
  console.log('Le diste click al boton de play');
}

function handlePause() {
  video.pause();
  play.hidden = false;
  pause.hidden = true;
  console.log('Le diste click al boton de pause');
}

backward.addEventListener('click', handleBackward );

function handleBackward() {
  video.currentTime -= 10;
  console.log('Para atras 10 segundos', video.currentTime);
}

forward.addEventListener('click', handleForward);

function handleForward() {
  video.currentTime = video.currentTime + 10;
  console.log('Para adelante 10 segundos', video.currentTime);
}

const progress = document.querySelector('#progress');
video.addEventListener('loadedmetadata', handleLoaded );
video.addEventListener('timeupdate', handleTimeUpdate);

function handleLoaded() {
  progress.max = video.duration;
  console.log('Ha cargado mi video', video.duration);
}

function handleTimeUpdate() {
  progress.value = video.currentTime;
  // console.log('Tiempo actual', video.currentTime);
}

progress.addEventListener('input', handleInput);

function handleInput() {
  video.currentTime = progress.value;
  console.log(progress.value);
}