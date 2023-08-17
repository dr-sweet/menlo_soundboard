const soundboard = document.querySelector(".soundboard");
const toggle = document.getElementById("toggle");
let restartSounds = false;

const soundFiles = [
    "arrnarr.mp3",
    "bestboy.mp3",
    "butt.mp3",
    "deezenuts.mp3",
    "dj.mp3",
    "grand.mp3",
    "idontlikeit.mp3",
    "newthing.mp3",
    "niki.mp3",
    "okkrr.mp3",
    "on.mp3",
    "piss.mp3",
    "puuj.mp3",
    "rutro.mp3",
    "sogud.mp3",
    "sorry.mp3",
    "sss.mp3",
    "wrecked.mp3"
];

toggle.addEventListener("change", () => {
  restartSounds = toggle.checked;
});

soundFiles.forEach(soundFile => {
  const tile = document.createElement("div");
  tile.className = "tile";
  tile.textContent = soundFile.replace(".mp3", ""); // Display name without extension
  
  tile.addEventListener("click", () => {
    const audio = new Audio(`sounds/${soundFile}`);
    
    if (restartSounds) {
      audio.currentTime = 0; // Restart the sound if toggle is on
    }
    
    audio.play();
  });
  
  soundboard.appendChild(tile);
});
