// 매개변수 (parameter): 함수가 실해될 때 함수 바깥쪽에서 전달되는 값을 저장하는 변수
function greet(language='한국어'){
  console.log(`language: ${language}`);
  switch (language){
    case '영어':
  }
}

// 함수 호출

greet('영어')

//x~y사이의 랜덤정수를 만들어주는 함수를 정의
//쉬프트 + f6 그 함수의 모든 이름 변경
function makeRandomNumber(max,y){
  let rn = Math.floor(Math.random()*(y -max + 1))+max;
  console.log(`생성된 정수: ${rn}`);
}

makeRandomNumber(1, 10)

console.log('==========');

function makeLine() {
  console.log('==============');
}