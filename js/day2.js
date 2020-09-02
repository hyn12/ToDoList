let array1=[];
array1.push(1);
array1.push('문자열');
array1.push(true);
array1.push(3.14159);
console.log(array1);
//php에서 배열의 값 추가
//array1[] = "추가할 값"

//js의 undefined = empty
array1[4]='추가할 값';
console.log(array1);
array1[6]=10;

delete array1[1];
console.log(array1);

let moveVal = array1.splice(1,2);
console.log(array1);
console.log(moveVal);

//메서드 오버로딩
function mutiply() {
    console.log(arguments);//arguments는 유사배열임
    if(arguments.length==3) {
        console.log(arguments[0]*arguments[1]*arguments[2])
    }else if(arguments.length==2) {
        console.log(arguments[0]*arguments[1])
    }else if(arguments.length==1) {
        console.log(arguments[0])
    }
}
/*
자바
void add(int num1) {
    syso(num1); === arguments[0];
}
*/
mutiply(20,30);
mutiply(20,30,60);


let person = {'name' : '박연미', 'age':20};
console.log(person.name); //person['name']===person.name
