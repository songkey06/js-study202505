//                length:배열에 저장된 데이터 수 -6
//               index: 0, 1, 2, 3, 4, 5
let numbers=[10,20,30,40,50,60]
console.log(typeof numbers);
console.log(numbers);

// 배열을 참조 - 배열의 데이터 하나하나에 접근
console.log("===================");
console.log(numbers[1]);
console.log(numbers[0]+ number[3]);

// 배열의 길이 체크
console.log(numbers.length);

// 인덱스 범위: 0~ N-1
//배열의 마지막 데이터 접근
const N = numbers.length;

// 전통적인 반복문 순회법
for (let i =0; i<numbers.length;i++){
  console.log(`${i+1}번째 요소 : ${numbers}`);
}

//배열 전용 반복문 for
for (let n of numbers){
  console.log(`n: ${n}`);
}