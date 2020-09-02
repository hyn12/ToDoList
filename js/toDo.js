const form = document.querySelector(".js-to-do"),
input =document.querySelector(".js-add-to-do"),
ul = document.querySelector(".js-list");

form.addEventListener("submit",handleSubmit);

let todoList = [];//배열
//콜백함수 = 언제 보낼진 몰라도 언젠간 실행시킨다.
//대표적인거 setinterval

//localstorage생성
function maxId() {
    let maxIdx = 0;
    for(let i=0; i<todoList.length;i++) { 
        if(maxIdx <todoList[i].id) {
            maxIdx = todoList[i].id;
        }
    }
    return maxIdx;
}
//로컬스토리지는 스트링(문자열)만 저장 할수 있음
//할일 목록들을 객체 형태였던것을 스트링으로 넣어 로컬스토리지에 저장
function saveToLs() {
    let string = JSON.stringify(todoList);
    localStorage.setItem("todoLs",string);
}
//todolist생성
function saveTodo(input) {
    let Id = maxId()+1;
    let todoObj = {//객체 
        id:Id,
        value : input
    };
    todoList.push(todoObj);//todoList.push(todoobj);
    saveToLs();
}

function handleSubmit(event){
    event.preventDefault();
    let value = input.value;
    input.value="";

    addTodos(value);
}
//삭제 3개
//html, todolist, localstorage
function handleDel(event) {
    let target = event.target;
    let li = target.parentElement;
    let ul = li.parentElement;//아이디값은 테이블 ul에저장되있음 아이디값 가져오기 위해 ul을 가져옴 
    let Id = li.id;
    
    ul.removeChild(li);
    todoList = todoList.filter(function(toDo){
        return toDo.id !== parseInt(Id);
    });
    saveToLs();
}
//html생성
function addTodos(text) {
    let li = document.createElement("li");//li생성
    li.className = "toDo";
    li.id = todoList.length+1;//li의 id값이 생김

    let span = document.createElement("span");
    span.className = "toDo__button";
    span.innerHTML = "❌ ";
    span.addEventListener("click",handleDel);
    
    let label = document.createElement("label");
    label.innerHTML=text;

    li.appendChild(span);
    li.appendChild(label);
    ul.appendChild(li);

    saveTodo(text);
}

function loadToDos() {
    let loadTodo = localStorage.getItem("todoLs");
    if(loadTodo !== null) {
        let getLocal=JSON.parse(loadTodo);
        getLocal.forEach(function(toDo) {
            addTodos(toDo.value);
        });
    }
}

function init() {
    loadToDos();
    // let jsonVer = JSON.stringify(todoObj);
    // let dJson = JSON.parse(jsonVer);
    // localStorage.setItem("todoL",jsonVer);
}
init();