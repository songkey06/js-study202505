/**
 * 문자열과 숫자를 받고 숫자만큼  문자열을 더하는 함수
 * @param msg 받는 문자열
 * @param num 횟수
 * @returns {string} 다 더해진 문자열
 */
function repeatString(msg = '', num = 0) {
  let str = '';
  for (let i = 0; i < num; i++) {
    str += msg;
  }
  return str;
}

// 함수 호출 코드
let result1 = repeatString('안녕', 3);
console.log(`result1: ${result1}`); // 예상 결과: "안녕안녕안녕"

let result2 = repeatString('짝', 5);
console.log(`result2: ${result2}`); // 예상 결과: "짝짝짝짝짝"

console.log('===============');

/**
 * 점수 평균 내주는 함수
 * @param numlist 점수 평균 낼 배열
 * @returns {number} 점수 평균 값
 */
function average(numlist = []) {
  let sum = 0;
  //길이가 4라면, [0,1,2,3]이므로 시작을 1로해서 최저점을 제외한다.
  //그리고 길이(4)-1 해서 i가 2까지 증가해서 최고점도 제외한다.
  for (let i = 1; i < numlist.length - 1; i++) {
    sum += numlist[i];
  }
  return sum / (numlist.length - 2);
}

/**
 * 최고점, 최저점을 제외한 점수 평균을 구해주는 함수
 * 단, 제외한 점수들이 1개이하 일 때는 0리턴
 * @param score
 * @returns {number}
 */
function calculateAverageScoreES6(...score) {
  if (score.length <= 3) {
    return 0;
  }
  //함수 if-else 코드에서는 else 생략
  //오름차순 정렬, 위치 0, -1이 최저,최고점이된다.
  score.sort(((a, b) => a - b));
  //평균 내고 반환
  return average(score);
}

// 함수 호출 코드
let result3 = calculateAverageScoreES6(10, 0, 20, 30, 40); // 0과 40 제외, (10+20+30)/3
console.log(`result3: ${result3}`); // 예상 결과: 20

let result4 = calculateAverageScoreES6(90, 80, 85, 95, 70, 75); // 70과 95 제외, (90+80+85+75)/4
console.log(`result4: ${result4}`); // 예상 결과: 82.5

let result5 = calculateAverageScoreES6(100, 90); // 최고, 최저 제외하면 점수 없음
console.log(`result5: ${result5}`); // 예상 결과: 0

let result5_1 = calculateAverageScoreES6(10, 20, 30); // 10, 30 제외하면 20 하나 남음 (유효점수 1개)
console.log(`result5_1: ${result5_1}`); // 예상 결과: 0


console.log('===============');

function greet(name = '', hi = '안녕하세요') {
  //아무것도 안들어왔다면 undefined
  //defult값은 greet(name='', hi='안녕하세요')
  return `${hi}, ${name}님!`;
}


// 함수 호출 코드
let result6 = greet('철수');
console.log(`result6: ${result6}`); // 예상 결과: "안녕하세요, 철수님!"

let result7 = greet('영희', '반가워요');
console.log(`result7: ${result7}`); // 예상 결과: "반가워요, 영희님!"

let result8 = greet('미애', '오랜만입니다');
console.log(`result8: ${result8}`); // 예상 결과: "오랜만입니다, 미애님!"

console.log('===============');

function celsiusToFahrenheit(temper = 0) {
  return temper * 9 / 5 + 32;
}

// 함수 호출 코드
let result9 = celsiusToFahrenheit(0);
console.log(`result9: ${result9}°F`); // 예상 결과: 32°F

let result10 = celsiusToFahrenheit(25);
console.log(`result10: ${result10}°F`); // 예상 결과: 77°F

let result11 = celsiusToFahrenheit(-10);
console.log(`result11: ${result11}°F`); // 예상 결과: 14°F

console.log('===============');

function countChar(word = '', alpha = '') {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === alpha) {
      count++;
    }
  }
  return count;
}

// 함수 호출 코드
let result12 = countChar('banana', 'a');
console.log(`result12: ${result12}`); // 예상 결과: 3

let result13 = countChar('apple', 'p');
console.log(`result13: ${result13}`); // 예상 결과: 2

let result14 = countChar('javascript is fun', 's');
console.log(`result14: ${result14}`); // 예상 결과: 2

let result15 = countChar('Hello World', 'o');
console.log(`result15: ${result15}`); // 예상 결과: 2

