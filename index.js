// Global variables
let seconds = 0;
let minutes = 0;
let timer = null;
let state = "paused";

const updateHtml = () => {
  let time = document.getElementById("time");
  let togglebutton = document.getElementById("toggleimg");
  time.innerHTML = (((minutes.toString().length == 1 ? "0" : "") + minutes) + " : " + ((seconds.toString().length == 1 ? "0" : "") + seconds));

  if(state == "playing") {
    togglebutton.setAttribute("src","pause.png")
  }
  else {
    togglebutton.setAttribute("src","play-button.png")
  }
}

const Timer = () => {
  seconds += 1;
  if(seconds == 60) {
    seconds = 0;
    minutes += 1;
  }
  updateHtml();
}

const Toggle = () => {
  if(state === "paused") {
    state = "playing"
    timer = setInterval(()=> Timer(), 1000);
  }
  else {
    state = "paused"
    clearInterval(timer);
  }
  updateHtml();
}

const Reset = () => {
  state="paused"
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  updateHtml();
}
const init = () => {
  document.getElementById("reset").addEventListener("click",Reset);
  document.getElementById("toggle").addEventListener("click",Toggle);
}

setTimeout(() => init(),100);
