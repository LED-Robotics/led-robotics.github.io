const headerShrinkWidth = 1419;
const miniTitle = document.getElementById("title-mini");
header = document.getElementsByTagName("header")[0];

function shrinkHeader() {
  if (
    document.documentElement.scrollTop > 50 ||
    document.body.clientWidth <= headerShrinkWidth
  ) {
    header.className = "shrink";
  } else {
    header.className = "";
  }
}

var greetings = ["ight\u00A0It\u00A0Up!\u00A0L","ght\u00A0It\u00A0Up!\u00A0Li","ht\u00A0It\u00A0Up!\u00A0Lig",
  "t\u00A0It\u00A0Up!\u00A0Ligh","\u00A0It\u00A0Up!\u00A0Light","It\u00A0Up!\u00A0Light\u00A0","t\u00A0Up!\u00A0Light\u00A0I",
  "\u00A0Up!\u00A0Light\u00A0It","Up!\u00A0Light\u00A0It\u00A0","p!\u00A0Light\u00A0It\u00A0U","!\u00A0Light\u00A0It\u00A0Up",
  "\u00A0Light\u00A0It\u00A0Up!","Light\u00A0It\u00A0Up!\u00A0"
];

var counter = 0;
setInterval(() => {
  document.getElementById("welcome").textContent = greetings[counter];
  if (counter >= greetings.length - 1) {
    counter = 0;
  } else {
    counter += 1;
  }
}, 300);

// Shrink header on mobile and resized window
body.onload = () => {
  if (body.clientWidth <= headerShrinkWidth) {
    header.className = "shrink";
  } else {
    header.className = "";
  }
  swapMiniTitle();
};
body.onresize = () => {
  if (body.clientWidth <= headerShrinkWidth) {
    header.className = "shrink";
  } else {
    header.className = "";
  }

  if (body.clientWidth > headerShrinkWidth) {
    if (nav.className == "open") {
      body.style.overflow = null;
    }
  } else {
    if (nav.className == "open") {
      body.style.overflow = "hidden";
    }
  }
  swapMiniTitle();
};

function swapMiniTitle() {
  if (window.innerWidth < 532) {
    miniTitle.textContent = "6722";
  } else if (window.innerWidth < 1319) {
    miniTitle.textContent = "TEAM 6722";
  }
}

document.addEventListener("scroll", shrinkHeader);
