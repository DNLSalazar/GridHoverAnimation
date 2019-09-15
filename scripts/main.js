var body = document.getElementById("body");
var item = document.getElementById("item");

window.addEventListener("load", function () {
  // item.addEventListener("mouseenter", mouse);
  // item.addEventListener("transitionend", end);
  // item.addEventListener("animationend", end);
  // item.addEventListener("animationiteration", end);
  createGrid(body.getBoundingClientRect().width, body.getBoundingClientRect().height);
});

function createGrid(width, height) {
  var sizeX = 15;
  var sizeY = 15;
  var nX = parseInt(width/sizeX);
  var nY = parseInt(height/sizeY);
  // var body = document.getElementById("body");

  var nItems = nX * nY;
  var item;
  for (var i = 0; i < nItems; i++) {
    item = document.createElement("div");
    item.classList.add("item");
    item.style.setProperty("animation-iteration-count", "0");
    item.addEventListener("mouseenter", mouse);
    item.addEventListener("transitionend", end);
    // item.addEventListener("animationend", end);
    // item.addEventListener("animationiteration", end);
    body.appendChild(item);
  }
}

function mouse () {
  this.style.setProperty("background-color", "red");
  this.style.setProperty("filter", "hue-rotate(360deg)");
}

function end () {
  this.style.setProperty("background-color", "black");
  this.style.setProperty("filter", "hue-rotate(0deg)");
}