let nameDiv = document.querySelector(".js-name");
//자바 스크립트에서 1같은 애들은 자료형이 넘버임

function printName(value) {
    nameDiv.innerHTML="";
    let span = document.createElement("span");//span테그 생성
    span.className = "name__text";
    span.innerHTML = `안녕. ${value}`;
    nameDiv.appendChild(span);
}

function handleSubmit(event) {
    event.preventDefault();
    let form = event.target;
    let input = form.querySelector("input");//form안에 있음
    localStorage.setItem("name",input.value);//로컬스토리지 저장
    printName(input.value);//html에 뿌림
}

function makeInput() {
    let input = document.createElement("input");//input테그 생성
    input.placeholder="이름을 입력하셈";
    input.type="text";

    let form = document.createElement("form");//form테그 생성
    form.addEventListener("submit",handleSubmit);
    form.appendChild(input);//input이 자식이 됨
//append뜻 = 추가한다.
    nameDiv.appendChild(form);//form이 자식이 됨
}
function loadName() {
    let name = localStorage.getItem("name");
    if(name === null){
        makeInput();
    }else {
        printName(name);
    }
}
function init() {
    loadName();
}
init();