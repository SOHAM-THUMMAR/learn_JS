const clock = document.querySelector("#clock");
let date = new Date();

setInterval(() => {
  date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
