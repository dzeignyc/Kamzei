$(document).ready(function(){
  $('#container').hide(0).fadeIn(2000);
console.log("Connected");

var btn  = document.querySelector('.controls');
var myAudio = document.getElementById("audio");
var isPlaying = false;

btn.addEventListener('click', function() {
  if (isPlaying) {
    myAudio.pause()
    btn.classList.toggle("paused")
  } else {
    myAudio.play();
    btn.classList.toggle("paused")
  }
});

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};
});
