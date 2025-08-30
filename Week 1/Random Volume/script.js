const video = document.getElementById("player");
video.src = "LEBRON JAMES DANCING SALSA.mp4";
video.play();

const button = document.getElementById("AdjustButton");
const volumeText = document.getElementById("volume");

function setRandomVolume() {
  let vol = Math.random(); 
  video.volume = vol;
  volumeText.innerText = `Volume: ${Math.floor(vol*100)}%`;
}

button.addEventListener("click", setRandomVolume);
