/*개발 계획
* v)1. 인풋밸류 값 받아서 로그 출력
* v)1-1. 에드 이벤트
* v)2. 인풋밸류 값을 임의의 숫자와 비교하고 로그 출력
* v)3. 정답 범위 좁히기
* v)4. 범위 텍스트컨텐트 바꾸기
* v)5. 기회 디카운팅
* v)6. 기회 텍스트컨텐트 바꾸기
* v)7. 추리를 시작하세요를 결과에 따라 바꾸기
* v)8. 정답시 초기화
* v)9. 나의 도전 기록에 박스 추가하기
* v)10. 나의 도전 기록에 결과 쌓기
* v)11. 모달창 클래스에 쇼 추가
* v)12. 모달의 텍스트를 정답과 연동
* v)13. 모달 닫기 버튼 누르면 쇼 제거하면서 끄기
* v)14. 정답시 초기화 함수에 위 요소들도 포함하기
* v)15. 정답시 입력창에 입력한 숫자를 null로 비우기
* v)16. 범위가 하난 밖에 안 남았다면 정답처리하기(마지막 1회시에는 적용안됨)찬스>0
* v)17. 정답 범위내 랜덤값으로 만들기
* */

//========변수 요소=======//
const $inputNum = document.getElementById('guess-input');
const $guessBtn = document.querySelector('.guess-button');
const $form = document.getElementById('guess-form');
// 범위, 기회 변수
const $begin = document.getElementById('begin');
const $end = document.getElementById('end');
const $chance = document.getElementById('chances-left');
// 도전 기록 변수
const $feedback = document.getElementById('feedback');
const $historyList = document.getElementById('history-list');
// 모달 변수
const $modalOverlay = document.getElementById('finish-modal');
const $modalTitle = document.getElementById('finish-title');
const $modalText = document.getElementById('finish-text');
const $modalBtn = document.getElementById('restart-button');

//숫자 변수
let minNum = +$begin.textContent;
let maxNum = +$end.textContent;
let correctNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
let chance = $chance.textContent;
console.log('정답: ', correctNum);

// 힌트 버튼 변수
const $hintBtn = document.getElementById('hint-button');
//========함수 정리=======//


/**
 * 입력한 값이 범위 내에 있는지 확인 하는 함수
 * 맞다면 upDown 함수 호출
 */
function correctRange() {
  // 입력한 값 선언
  let inputNum = +$inputNum.value;
  // 입력값이 범위 밖에 있으면 경고 후 리턴
  if (inputNum < minNum || inputNum > maxNum) {
    alert(`반드시 ${minNum}과 ${maxNum}사이의 값을 입력해주세요`);
    return;
  }
  // 입력값이 범위 안에 있다면 upDown 함수 호출, inputNum 전달
  upDown(inputNum);
}

/**
 * 기회 감소와 입력값 비교 함수를 호출하는 함수
 * @param inputNum
 */
function upDown(inputNum) {
  // 남은 기회를 차감하는 함수
  countChance();
  // 입력값을 정답과 비교하는 함수
  compare(inputNum);
}

/**
 * 남은 기회를 1씩 줄이고 화면에 표시하는 함수
 */
function countChance() {
  $inputNum.value = null;
  // 기회 1차감
  --chance;
  // 보여지는 텍스트에 기회 스트링 적용
  $chance.textContent = String(chance);
  if (chance === 0) {
    failEvent();
  }
}

/**
 * 입력한 답이 정답보다 큰지 작은지 비교하는 함수
 * @param inputNum 입력한 값
 * @returns {boolean} 입력한 값이 정답인지 반환
 */
function compare(inputNum) {
  if (inputNum < correctNum) {
    minEvent(inputNum);
  } else if (inputNum > correctNum) {
    maxEvent(inputNum);
  } else {
    correctEvent();
  }
}

/**
 * 입력값이 작을 때 적용하는 함수
 * minNum, $feedback 의 textContent, color 변경
 * @param inputNum
 */
function minEvent(inputNum) {
  minNum = inputNum + 1;
  $begin.textContent = minNum;
  $feedback.textContent = 'UP!!';
  $feedback.classList.remove('down');
  $feedback.classList.add('up');
  exception();
  historyItem(inputNum, 'up');
}

/**
 * 입력값이 클 때 적용하는 함수
 * minNum, $feedback 의 textContent, color 변경
 * @param inputNum
 */
function maxEvent(inputNum) {
  maxNum = inputNum - 1;
  $end.textContent = maxNum;
  $feedback.textContent = 'DOWN!!';
  $feedback.classList.remove('up');
  $feedback.classList.add('down');
  exception();
  historyItem(inputNum, 'down');
}

/**
 * 정답 모달창 열기
 */
function correctEvent() {
  $modalOverlay.classList.add('show');
  $modalTitle.textContent = 'Congratulation!';
  $modalTitle.style.color = '#198754';
  $modalText.textContent = `정답은 ${correctNum}였습니다.`;
}

/**
 * 리셋시키는 함수
 * 최대, 최소, 기회 값 초기화.
 * 도전 기록 초기화
 */
function reset() {
  minNum = 1;
  maxNum = 100;
  chance = 10;

  $begin.textContent = minNum;
  $end.textContent = maxNum;
  $chance.textContent = chance;

  $feedback.textContent = '추리를 시작하세요!';
  $feedback.classList.remove('down');
  $feedback.classList.remove('up');

  $inputNum.value = null;
  $historyList.innerHTML = '';
}

/**
 * 모달창을 닫는 함수
 */
function closeModal() {
  reset();
  $modalOverlay.classList.remove('show');

  console.log('현재 정답: ', correctNum);
  console.log('=================');
  correctNum = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  console.log('새로운 정답: ', correctNum);
}

function exception() {
  if (maxNum - minNum === 0 && chance > 0) {
    correctEvent();
  }
}

/**
 * 탈락 모달창 열기
 */
function failEvent() {
  $modalOverlay.classList.add('show');
  $modalTitle.textContent = 'GAME OVER';
  $modalTitle.style.color = '#dc3545';
  $modalText.textContent = `정답은 ${correctNum}였습니다...`;
}

/**
 * 업다운 할때마다 나의 도전기록 Div 추가하는 함수
 * @param inputNum
 * @param string
 */
function historyItem(inputNum, string) {
  const temp = document.createElement('li');
  temp.classList.add('history-item');
  temp.textContent = `${inputNum} (${string})`;
  if (string === 'up') {
    temp.classList.add('up');
  }
  else if (string === 'down') {
    temp.classList.add('down');
  }
  else{
    temp.textContent = `정답은 ${string}입니다.`
    temp.style.color = 'black'
  }
  $historyList.prepend(temp);
}

function hintBtn(inputNum) {
  if ($chance.textContent < 2) {
    alert('기회가 부족하여 힌트를 사용할 수 없습니다!');
    return;
  }
  countChance();
  even(inputNum);
}

function even(inputNum) {
  if (correctNum % 2 === 0) {
    historyItem(inputNum, '짝수')
    return;
  }
  historyItem(inputNum, '홀수')
}

//========이벤트 리스너===//
$guessBtn.addEventListener('click', e => correctRange());

$modalBtn.addEventListener('click', e => closeModal());

$inputNum.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && $modalOverlay.classList.contains('show')) {
    e.preventDefault();
    console.log('모달창에서는 입력이 막힘');
  }
});

$form.addEventListener('submit', e => {
  e.preventDefault(); // 제출 자체를 막음
});

$hintBtn.addEventListener('click', e => hintBtn());