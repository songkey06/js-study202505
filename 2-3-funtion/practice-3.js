function min2(firNum, secNum){
  if (firNum<secNum){
    return firNum
  }
  else{
    return secNum
  }
}
//result에는 56이 리턴되어야 함.
let result1 = min2(134, 56);
console.log(`result1: ${result1}`);


function min3(firNum, secNum, thirNum){
  let minNum=firNum;
  if (secNum<minNum){
    minNum=secNum;
  }
  else if (thirNum<minNum){
    minNum=thirNum;
  }
  return minNum;
}
// 셋중에 가장 작은 수 50이 result에 저장되어야 함.
let result2 = min3(120, 50, 99);
console.log(`result2: ${result2}`);


function isEven(testNum){
  return testNum % 2 === 0;
}
// 숫자 1개를 전달하면 해당 숫자가 짝수인지 판별하는 함수
// 24를 전달하면 true리턴, 홀수를 전달하면 false리턴,
// 단, 0은 짝수취급
let result3 = isEven(3);
console.log(`result3: ${result3}`);

function minES6(...minList){
  let minNum =0;
  for (let i=0;i<minList.length;i++){
    if (minList[i]<minNum){
      minNum=minList[i];
    }
  }
  return minNum
}
// result4에는 -1000이 저장되어야 함.
let result4 = minES6(9, 76, -90, -1000, 555, 780, -7777,-10000);
console.log(`result4: ${result4}`);