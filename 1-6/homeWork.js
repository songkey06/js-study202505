let firNum = 0;
let secNum = 0;
let sumNum = 0;
let ranNum = 0;
let answer = 1;
let correct= 0;
let wrong  = 0;
let i=0;
let level = 0;
let point = 0;
let winning = 0;
let losing = 0;


while(i<10){//난이도 질문 답 할 때까지 반복
  answer = +prompt(`난이도를 선택하세요!\n[1. 상 (3자리수의 사칙연산) | 2. 중 (2자리수의 사칙 연산)| 3. 하 (1자리 수의 사칙 연산)] `);
  if (1 <= answer && answer <= 3) {//응답이 범위 안에 있는지 확인
    switch (answer) {//몇자리 수로 정해 졌는지
      case 1://3자리수
        level = 999;
        break;
      case 2://2자리수
        level = 99;
        break;
      case 3://1자리수
        level = 9;
        break;
    }
    i = 1;//문제 응답 코드에서 0이면 코드가 끝나서 i초기화
    break;
  }
  else {//응답이 범위 안에 없다면
    alert('범위 안에 값을 입력해주세요.');
    i++;
  }
}


while(i<100){//문제 응답 코드
  ranNum = Math.floor(Math.random() * 3) + 1;//사칙연산 중 +,-,* 어는 것인지 정해주는 랜덤수
  firNum = Math.floor(Math.random() * level) + 1;//첫번째 수, level에 따라 자리수 결정
  secNum = Math.floor(Math.random() * level) + 1;//두번째 수, 위와 동일
  switch (ranNum){//+,-,* 중 어는 것인지 정해줌
    case 1:// + 로 결정
      sumNum=firNum + secNum;
      answer = +prompt(`${firNum} + ${secNum} = `)
      break;
    case 2:// - 로 결정
      sumNum=firNum - secNum;
      answer = +prompt(`${firNum} - ${secNum} = `)
      break;
    case 3:// * 로 결정
      sumNum=firNum * secNum;
      answer = +prompt(`${firNum} * ${secNum} = `)
      break;
  }

  if (answer === 0){//응답이 0이면 프로그램 종료
    alert(`정답횟수: ${correct}\n오답횟수: ${wrong}\n포인트: ${point}`)//정답, 오답 횟수를 알려줌
    break;
  }
  else if (answer === sumNum) {//정답일 시
    alert(`정답입니다.\n포인트: ${point}`)
    correct++;//정답 횟수 +1
    winning++;
    losing=0;

    if (winning>2){
      alert(`${winning}연승 중 입니다.`)
    }
    point+=(winning+1)*level;
  }
  else {//오답일 시
    alert(`오답입니다.\n포인트: ${point}`)
    wrong++;//오답 횟수 +1
    losing++;
    winning=0;

    if (winning>2){
      alert(`${losing}연패 중 입니다.`)
    }
    point-=(losing+1)*level;
  }
  i++;
}