/*
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고
약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
3. 힌트) 전달받은 n을 1부터 n까지 지속적으로 나누어
 나누어 떨어졌을 시 약수의 개수 카운트를 1증가시키고 출력.
*/
//정의부


function calcDivisor(n){
  let numList =[];
  let i=0;
  let divCount =0;
  /*while (i<n){
    i++;
    if (n%i===0){
      numList.push(i)
      divCount++;
    }
  }*/
  for(i=1;i<=Math.sqrt(n);i++){//제곱수 이전까지 반복하기 연산량 절반 이하
    if (n%i===0){//i로 나눴을 때 나머지가 없다면
      if (i===n/i){
        numList.push(i);//나눈 수 저장
        divCount++;//약수 개수 카운팅
      }
      else{
        numList.push(i, n/i);//나눈 수와 나눠진 값 저장
        divCount+=2;//약수 개수 카운팅
      }

    }
  }
  numList.sort((a, b) => a - b)//리스트 오름차순 정렬

  console.log(numList);
  return divCount;


}

// 호출부
let divCount = calcDivisor(100);
console.log(`약수의 개수: ${divCount}개`);