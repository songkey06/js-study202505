let firNum = +prompt('첫 번째 수는?');
let secNum = +prompt('두 번째 수는?');
let thirNum = +prompt('세 번째 수는?');

//3숫자 중 2개의 합이 1개와 같으면 "비밀의 문이 열립니다." 출력
if (firNum + secNum === thirNum || thirNum + secNum === firNum || thirNum + firNum === secNum) {//"="은 3개쓰기
  alert('비밀의 문이 열립니다.');
}
//하나도 맞지 않다면 아래 출력
else {
  alert('퍼즐이 맞지 않습니다. 다시 시도하세요!');
}