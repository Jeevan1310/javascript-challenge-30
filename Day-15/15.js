// Track information
const tracks = [
    {
      title: "Track 1",
      image: "track1.jpg",
      audio: "track1.mp3"
    },
    {
      title: "Track 2",
      image: "track2.jpg",
      audio: "track2.mp3"
    },
  ];
  
  let currentTrackIndex = 0;
  let audioPlayer = new Audio();
  

  function loadTrack() {
    const currentTrack = tracks[currentTrackIndex];
    document.getElementById("trackImage").src = currentTrack.image;
    audioPlayer.src = currentTrack.audio;
  }
  
  
  function playTrack() {
    audioPlayer.play();
  }
  

  function pauseTrack() {
    audioPlayer.pause();
  }
  

  function skipTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack();
    playTrack();
  }
  

  document.getElementById("playBtn").addEventListener("click", playTrack);
  document.getElementById("pauseBtn").addEventListener("click", pauseTrack);
  document.getElementById("skipBtn").addEventListener("click", skipTrack);
  

  loadTrack();
  playTrack();
  