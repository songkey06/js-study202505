/*
 일급 함수
 : 함수를 마치 하나의 값처럼 보는 게념

 ->함수를 다른 함수의 매개값으로 넘기는게 가능
 -> 함수가 함수를 리턴하는 것도 가능

*/

function foo(define){
  console.log(define);
  define();

}

foo(function (){
  console.log('노는게 제일 좋아');
  console.log('뽀롱뽀롱 뽀로로');
  console.log('ㅋㅋㅋㅋ');
})
foo(function (){
  console.log('a');
  console.log('b');
  console.log('c');
  for (let i = 0; i < 3; i++) {
    console.log('d');
  }
  console.log('e');
})

//편지지 양식 함수
function makePaper(receiver, sender, createContent){
  console.log(`수신인: ${receiver}`);
  console.log(`==========================`);
  //이 사이에 편지 내용을 쓰세요.
  createContent();

  if (receiver==='하츄핑'){
    console.log('캐치캐치 티니핑');
  }
  console.log(`==========================`);
  console.log(`발신인: ${sender}`);
}

makePaper('둘리', '도우너', function (){
  console.log('도우너가 둘리에게 일침을 가한다.');
  console.log('ㅋㅋㅋㅋㅋ 지구정복을 포기해라');
})
makePaper('하츄핑', '뽀로로', function (){
  for (let i = 0; i < 5; i++) {
    console.log('하츄핑 죽어라!!!');
  }
})