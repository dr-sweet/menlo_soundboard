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
  stopAndPlay = toggle.checked;
});

const audioElements = {}; // Store audio elements for each sound file

soundFiles.forEach(soundFile => {
  const tile = document.createElement("div");
  tile.className = "tile";
  tile.textContent = soundFile.replace(".mp3", ""); // Display name without extension
  
  const audio = new Audio(`sounds/${soundFile}`);
  audioElements[soundFile] = audio;

  tile.addEventListener("click", () => {
    if (stopAndPlay && audio.currentTime > 0 && !audio.paused) {
      // If toggle is on and audio is playing, stop and play from the beginning
      audio.pause();
      audio.currentTime = 0;
    }
    if (!stopAndPlay) {
      // If toggle is off, allow simultaneous playback of multiple instances
      const newAudio = new Audio(`sounds/${soundFile}`);
      newAudio.play();
    }
    audio.play();
  });
  
  soundboard.appendChild(tile);
});

// Initialize the soundboard with toggle off
toggle.checked = false;
