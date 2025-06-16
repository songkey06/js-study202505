// 일급 함수:  함수를 값으로 처리

function foo(){
  return 100;
}

function bar(){
  return foo;
}

const result =bar();
console.log(typeof result);

const r1 =result();
console.log(`r1: ${r1}`);
console.log('=================');

function calculate(){
  // 중첩함수, 헬퍼함수
  function add(n1, n2){
    return n1 + n2;
  }
  return add
}

const r2 = calculate();
console.log(`r2: ${r2(30,20)}`);
console.log('=================');

function calculate2(){
  // 중첩함수, 헬퍼함수
  return (n1, n2) => n1 * n2;
}

const r3 = calculate2()(10,3);
console.log(`r3: ${r3}`);
