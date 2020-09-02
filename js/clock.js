// setInterval(function(){
// let time = new Date();
// //호출한 시간 저장
// let getTime = time.getHours()+" : ";
// getTime+=time.getMinutes()+" : ";
// getTime+=time.getSeconds();
// if(time.getSeconds()<10) {
//     getTime2+=time.getSeconds();
// }
// if(time.getMinutes()<10) {
//     getTime2+=time.getMinutes();
// }
// if(time.getHours()<10) {
//     getTime2+=time.getHours();
// }
// h1.innerHTML=getTime2;

// },1000);

function getTimer() {
    let now = new Date();
    let gHour=17;
    let gMin=50;
    //js에서 h1태그 객체 만들어 준것
    let h1 = document.querySelector("h1");
    
    let getTime="";
    if(gHour-now.getHours()>0) {
        getTimer+=gHour-now.getHours() + " : ";
    }

    if(gMin-now.getMinutes()<10) {
       getTime+="0";
    }

    getTime+=gMin-now.getMinutes() + " : ";

    if(getTimer-59-now.getSeconds()<10){
        getTimer+="0";
    }
    
    getTime+=59-now.getSeconds();
    
    h1.innerHTML=getTime;
}
function init() {
    setInterval(getTimer,1000);
}
init();