/*
1. 키(cm)와 몸무게(kg)을 인수로 전달받아
2. bmi지수를 계산하여 반환함과 동시에
3. bmi가 25.0이상이면 "당신은 과체중입니다."
  18.5이하면 "당신은 저체중입니다."
  나머지는 "당신은 정상체중입니다."를 출력하는
  CalcBMI라는 함수를 정의하고 호출하세요.
# bmi 계산식 : 몸무게(kg) / (키(m) * 키(m))
# 출력 예시:
"키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"

Math.round(5.78999); // 반올림 -> 6
*/
/**
 * 키와 몸무게를 이용해 bmi를 계산하는 공식
 * @type {h}
 */
let h = 178.4,
  w = 78.2;
let myBmi = calcBMI(h, w);

/**
 * bmi값을 전달받아 현재 체중상태를 출력하는 함수
 * @returns {number}
 */
function judeBMI(myBmi){
  if (myBmi >= 25.0) {
    console.log('당신은 과체중입니다.');
  } else if (myBmi <= 18.5) {
    console.log('당신은 저체중입니다.');
  } else {
    console.log('당신은 정상체중입니다.');
  }
}

/**
 * cm단위를 m로 변환하는 함수
 */
function convertCM(h){
  return m = h/ 100;
}


/**
 * 키와 몸무게를 사용해서 bmi 계산하기
 * @param h
 * @param w
 * @returns {number}
 */
function calcBMI(h, w) {
  let m = convertCM(h)
  //bmi 계산
  let myBmi = w / (m * m);
  judeBMI(myBmi)
  return myBmi;
}

function round(myBmi, dotNum) {
  // return Math.round(myBmi * (10 ** dotNum)) / 10 ** dotNum;
  return myBmi.toFixed(dotNum);
}


console.log(
  `키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${round(myBmi, 2)}입니다.`
);
