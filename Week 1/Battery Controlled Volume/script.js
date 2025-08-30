const video = document.getElementById("player");
video.src ="LEBRON JAMES DANCING SALSA.mp4"
video.play();


navigator.getBattery().then(battery => {

  function updateVolume() {
    video.volume = battery.level;


    document.getElementById("status").innerText = 
      `Battery: ${Math.floor(battery.level*100)}% → Volume: ${Math.floor(video.volume*100)}%`;
  }


  updateVolume();


  battery.addEventListener("levelchange", updateVolume);
  battery.addEventListener("chargingchange", updateVolume);
  setInterval(updateVolume, 100);
});
