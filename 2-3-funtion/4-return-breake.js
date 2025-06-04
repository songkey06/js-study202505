function loop(n){
  for (let i=0;i<5;i++){
    if (n===4){
      console.log('break');
      break;
    }
    console.log(`${i}`);
  } //end for
  console.log('수고욤');
} //end function

loop(4);

console.log('==============');

//매개변수는 여러 개일 수 있지만 리턴값은 오직 하나!
//f(x) = 2a + 3b

function add(n1,n2){
  return n1 + n2;
}

//숫자 2개를 전달하면 두 수의 합,차,곱, 나눗셈의 결과를 모두 리턴
//ctrl + alt + n:지역변수 합치기
function operate(n1, n2){
  return {
    add: add(n1, n2),
    sub: n1 - n2,
    multi: n1 * n2,
    divide: n1 / n2
  };
}

let results = operate(30, 3)
console.log(`${add}`);