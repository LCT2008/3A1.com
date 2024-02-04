document.addEventListener("DOMContentLoaded", function() {
    var videoContainer1 = document.getElementById("videoContainer1");
    var videoContainer2 = document.getElementById("videoContainer2");
    var videoContainer3 = document.getElementById("videoContainer3");
    var videoContainer4 = document.getElementById("videoContainer4");
    var videoContainer5 = document.getElementById("videoContainer5");
    var videoContainer6 = document.getElementById("videoContainer6");

    var video1 = document.getElementById("video1");
    var video2 = document.getElementById("video2");
    var video3 = document.getElementById("video3");
    var video4 = document.getElementById("video4");
    var video5 = document.getElementById("video5");
    var video6 = document.getElementById("video6");

    const videoplay = [
        video1,
        video2,
        video3,
        video4,
        video5,
        video6
    ];

    var playButton = document.getElementById("playButton");

    playButton.addEventListener("click", function(event) {
      event.stopPropagation();
      var videorun = videoplay[(Math.floor(Math.random() * videoplay.length))];
      if (videorun === video1) {
        videoContainer1.style.display = "block";
        video1.load();
        video1.play();
        video1.muted = false;
        video1.loop = true;
      }
      else if (videorun === video2) {
        videoContainer2.style.display = "block";
        video2.load();
        video2.play();
        video2.muted = false;
        video2.loop = true;
      }
      else if (videorun === video3) {
        videoContainer3.style.display = "block";
        video3.load();
        video3.play();
        video3.muted = false;
        video3.loop = true;
      }
      else if (videorun === video4) {
        videoContainer4.style.display = "block";
        video4.load();
        video4.play();
        video4.muted = false;
        video4.loop = true;
      }
      else if (videorun === video5) {
        videoContainer5.style.display = "block";
        video5.load();
        video5.play();
        video5.muted = false;
        video5.loop = true;
      }
      else if (videorun === video6) {
        videoContainer6.style.display = "block";
        video6.load();
        video6.play();
        video6.muted = false;
        video6.loop = true;
      }
    });

    videoContainer1.addEventListener("click", function() {
      video1.pause();
      video1.currentTime = 0;
      video1.muted = true;
      videoContainer1.style.display = "none";
      video2.pause();
      video2.currentTime = 0;
      video2.muted = true;
      videoContainer2.style.display = "none";
      video3.pause();
      video3.currentTime = 0;
      video3.muted = true;
      videoContainer3.style.display = "none";
      video4.pause();
      video4.currentTime = 0;
      video4.muted = true;
      videoContainer4.style.display = "none";
      video5.pause();
      video5.currentTime = 0;
      video5.muted = true;
      videoContainer5.style.display = "none";
      video6.pause();
      video6.currentTime = 0;
      video6.muted = true;
      videoContainer6.style.display = "none";
    });
    videoContainer2.addEventListener("click", function() {
        video1.pause();
        video1.currentTime = 0;
        video1.muted = true;
        videoContainer1.style.display = "none";
        video2.pause();
        video2.currentTime = 0;
        video2.muted = true;
        videoContainer2.style.display = "none";
        video3.pause();
        video3.currentTime = 0;
        video3.muted = true;
        videoContainer3.style.display = "none";
        video4.pause();
        video4.currentTime = 0;
        video4.muted = true;
        videoContainer4.style.display = "none";
        video5.pause();
        video5.currentTime = 0;
        video5.muted = true;
        videoContainer5.style.display = "none";
        video6.pause();
        video6.currentTime = 0;
        video6.muted = true;
        videoContainer6.style.display = "none";
      });
      videoContainer3.addEventListener("click", function() {
        video1.pause();
        video1.currentTime = 0;
        video1.muted = true;
        videoContainer1.style.display = "none";
        video2.pause();
        video2.currentTime = 0;
        video2.muted = true;
        videoContainer2.style.display = "none";
        video3.pause();
        video3.currentTime = 0;
        video3.muted = true;
        videoContainer3.style.display = "none";
        video4.pause();
        video4.currentTime = 0;
        video4.muted = true;
        videoContainer4.style.display = "none";
        video5.pause();
        video5.currentTime = 0;
        video5.muted = true;
        videoContainer5.style.display = "none";
        video6.pause();
        video6.currentTime = 0;
        video6.muted = true;
        videoContainer6.style.display = "none";
      });
      videoContainer4.addEventListener("click", function() {
        video1.pause();
        video1.currentTime = 0;
        video1.muted = true;
        videoContainer1.style.display = "none";
        video2.pause();
        video2.currentTime = 0;
        video2.muted = true;
        videoContainer2.style.display = "none";
        video3.pause();
        video3.currentTime = 0;
        video3.muted = true;
        videoContainer3.style.display = "none";
        video4.pause();
        video4.currentTime = 0;
        video4.muted = true;
        videoContainer4.style.display = "none";
        video5.pause();
        video5.currentTime = 0;
        video5.muted = true;
        videoContainer5.style.display = "none";
        video6.pause();
        video6.currentTime = 0;
        video6.muted = true;
        videoContainer6.style.display = "none";
      });
      videoContainer5.addEventListener("click", function() {
        video1.pause();
        video1.currentTime = 0;
        video1.muted = true;
        videoContainer1.style.display = "none";
        video2.pause();
        video2.currentTime = 0;
        video2.muted = true;
        videoContainer2.style.display = "none";
        video3.pause();
        video3.currentTime = 0;
        video3.muted = true;
        videoContainer3.style.display = "none";
        video4.pause();
        video4.currentTime = 0;
        video4.muted = true;
        videoContainer4.style.display = "none";
        video5.pause();
        video5.currentTime = 0;
        video5.muted = true;
        videoContainer5.style.display = "none";
        video6.pause();
        video6.currentTime = 0;
        video6.muted = true;
        videoContainer6.style.display = "none";
      });
      videoContainer6.addEventListener("click", function() {
        video1.pause();
        video1.currentTime = 0;
        video1.muted = true;
        videoContainer1.style.display = "none";
        video2.pause();
        video2.currentTime = 0;
        video2.muted = true;
        videoContainer2.style.display = "none";
        video3.pause();
        video3.currentTime = 0;
        video3.muted = true;
        videoContainer3.style.display = "none";
        video4.pause();
        video4.currentTime = 0;
        video4.muted = true;
        videoContainer4.style.display = "none";
        video5.pause();
        video5.currentTime = 0;
        video5.muted = true;
        videoContainer5.style.display = "none";
        video6.pause();
        video6.currentTime = 0;
        video6.muted = true;
        videoContainer6.style.display = "none";
      });
});