// Is device mobile?
if (window.innerWidth >= 850) {
  // Give video its source, will initiate load. Otherwise, it won't load anything and will be hidden by CSS.
  // This is so the video doesn't burn mobile data on phones.
  // Also it's a stylistic nightmare.
  document.getElementsByTagName("video")[0].src = "video.mp4";

  // Parallax effect for video background.
  window.onscroll = () => {
    document.getElementsByClassName("video-container")[0].style.transform =
      "translateY(" + document.body.scrollTop / 1.5 + "px)";
  };
}

var greetings = ["LED", "LIGHT", "IT", "UP!"];

var counter = 0;
setInterval(() => {
  document.getElementById("welcome").textContent = greetings[counter];
  if (counter >= greetings.length - 1) {
    counter = 0;
  } else {
    counter += 1;
  }
}, 1500);
