let userlist = [];
let answer='';
let sum=0;

// 그만이 입력될 때까지 반복한다.
while(numbers.length<6){
  answer=prompt("숫자를 입력하세요.\n그만두시려면 '그만'이라고 입력하세요.")
  if (answer==='그만'){//입력한 답이 그만인지 확인
    for (let j=0;j<userlist.length;j++){//userliset길이 만큼 반복해서 총합 구하기
      sum+=userlist[i];
    }
    break;
  }
  else if(isNaN(+num)){
    alert('숫자만 정확하게 입력하세요.');
  }
  else{//그만이 아니면 숫자이므로(지금 수준에서는)
    userlist.push(+answer)//입력한 값을 numer로 변형하고 리스트 끝에 저장
  }
}
alert(`숫자목록 [${userlist}]\n숫자 총합: ${sum}`)