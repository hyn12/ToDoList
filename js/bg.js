let body = document.querySelector("body");
let imgCnt = 5;
//ceil 소수점 올림 floor 소수점 내림 round 소수점 반올림
let imgNum = Math.ceil(Math.random()*imgCnt);

function createBGI() {
    let image = new Image();
    image.src=`img/${imgNum}.jpg`;
    body.style.backgroundImage=`url(${image.src})`;
}

//init == 초기화
function init(){
    // let imgNum = Math.ceil(Math.random()*imgCnt);
    createBGI();
}

init();

//this는 windows가 기본값 console.log(this) => windows{}
//호이스팅은 변수만 맨위로 올라감