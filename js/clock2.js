let clock = document.querySelector(".js-clock .clock__text");
let meridiem = document.querySelector(".js-clock .clock__meridiem");

function getTime() {
  const now = new Date();
  const hours = now.getHours();
  let h =now.getHours();
  const minutes = now.getMinutes();
  const second= now.getSeconds();
  if(h>12){
    h-=12;
  }
  const time = `${h < 10 ? `0${h}` : h}
  : ${minutes < 10 ? `0${minutes}` : minutes}
  : ${second< 10 ? `0${second}` : second}`;

  
  clock.innerHTML=time;
} 
  function getMeridiem() {
    let nows = new Date();
    let hour = nows.getHours();
    let minutes = nows.getMinutes();

    let amPm = `${hour}`< 12 ? `AM ` : `PM `;
    meridiem.innerHTML=amPm;
    return;
  }
 


function init() {
  getMeridiem()
  getTime();
  setInterval(getTime, 1000);
  return;
}

init();