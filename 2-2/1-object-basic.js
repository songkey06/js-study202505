/*let dogName1 = '초코';
let dogName2 = '해피';
let dogAge1 = 3;
let puppyAge2 = 5;
let tall1 = 30;
let height2 = 45;
let inject = false;
let inject2 = true;*/

//객체
let myDog1={
  name:'초코',
  age:3,
  tall:30,
  weight:10,
  injection: false,
  vegetarian:true,
  favorite: ['산책','간식']
}

let myDog2={
  name:'해피',
  age:5,
  tall:45,
  weight:14,
  injection:true,
  vegetarian:false,
  favorite: ['꼬리흔들기','뒷발로까기', '초코괴롭히기']
}

//객체 프로퍼티 참조법
console.log(myDog1.name);
console.log(myDog2.name);//string
console.log(myDog2.injection);//불
console.log(myDog2.favorite);//배열
console.log(myDog2.favorite[1]);//string

//객체 프로퍼티 참조법2
console.log(myDog2[key]);//key는 문자열이 아님 오류
console.log(myDog2["age"]);//오류 없음
let male='male';
console.log(myDog2[male]);//함수를 호출해서 문자열 'male'이 호출됨

