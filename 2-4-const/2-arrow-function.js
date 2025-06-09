//함수 선언문 방식

/*function add(n1, n2){
  return n1+n2;
}*/

// 함수 표현식 방식
/*
const add =function (){
  return n1 + n2;
}*/

// 화살표 함수 방식(ES6)
// 호이스팅 안됨
// const add = (n1,n2) => n1+n2;
const add = (n1,n2)=>{
  return n1 + n2;
}


const r1 = add ( 10,20);
console.log(`r1: ${r1}`);

const isEven = (n) => n%2===0;
console.log(isEven(25));

//파라미터(여기서는 nickName)가 딱 하나일 때는 소괄호 생략가능
const sayHello = nickName => console.log(`${nickName}님 안녕`);

sayHello('크룽이');

const pow = n => n ** 2;
const r2 = pow(3);
console.log(`r2: ${r2}`);

