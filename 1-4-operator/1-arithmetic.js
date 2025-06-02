console.log((3 + 5)*2)//13

// js는 나눗셈 수행시 실수 나눗셈을 수행 (소수점이 나옴)
console.log(27/5)
console.log(Math.floor(27/5 ));

console.log(27 % 5); //나머지 도출

console.log(5 % 6); //앞에가 작으면 앞의 숫자가 그대로 나머지
console.log(10%0); //연산 불가
console.log(0%10); //나머지 0

//제곱 연산
console.log(3**2);
console.log('=============');

//증감 연산자
let x=3;
x++;
console.log(`x: ${x}`);

//전위 연산, 후위 연산
let n1=10;//n1=10
let n2=n1++;//1. n1의 10을 n2에게 줌=>n2=10
                     //2. ++이 n1에게 1을 더함=>n1=11
console.log(`n1: ${n1}, n2: ${n2}`)

let n3  =10;
let n4  =++n3;//++먼저해서 n3추가하고 n4에 값 추가
console.log(`n1: ${n3}, n2: ${n4}`)

//실무에서는 중간에 한 줄 추가
// let n3  =10;
// n3++;
// let n4  =++n3;