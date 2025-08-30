const video = document.getElementById("player");
video.src="LEBRON JAMES DANCING SALSA.mp4";
video.play();

let volume = 0.5;
video.volume = volume;

const keySequence = ["KeyW", "KeyA", "KeyS", "KeyD"];
let currentStep = 0;

document.addEventListener("keydown", e => {
  if (e.code === keySequence[currentStep]) {
    volume += 0.03;
    currentStep = (currentStep + 1) % keySequence.length;
    document.getElementById("sequence").innerText = `Next key: ${keySequence[currentStep].replace("Key","")}`;
  } else {
    volume -= 0.05;
  }

  volume = Math.max(0, Math.min(1, volume));
  video.volume = volume;
  document.getElementById("volume").innerText = `Volume: ${Math.floor(volume*100)}%`;
});


setInterval(() => {
  volume = Math.max(0, volume - 0.01);
  video.volume = volume;
  document.getElementById("volume").innerText = `Volume: ${Math.floor(volume*100)}%`;
}, 1000);