/*
Q. 회원의 아이디정보와 비밀번호 정보가 들어있는 객체 user가 있습니다.
   아래 요구사항에 맞는 프로그램을 작성하고 브라우저에서 테스트하세요.

- 요구사항
1. 사용자에게 아이디를 입력받으세요.
2. 입력된 아이디가 객체에 존재하는 key가 아니라면
   "존재하지 않는 회원입니다"를 출력하세요.
3. 아이디가 존재한다면 비밀번호를 입력받으세요.
4. 비밀번호가 입력한 아이디에 대응해서 일치한다면
   "로그인 성공"을 출력하고 반복문을 탈출하세요.
5. 비밀번호가 다르다면 "비밀번호가 틀렸습니다" 를 출력하세요.
6. 로그인이 성공할때까지 반복하세요.

- 객체의 프로퍼티가 있는지 여부 확인하는 문법은 검색해보세요.

*/

let userInfo = {
  userList: [
    {
      account: 'kim1234',
      password: 'kkk1234',
      username: '김두한',
    },
    {
      account: 'park9876',
      password: 'ppp9999',
      username: '박찬호',
    },
    {
      account: 'hong7766',
      password: 'hhh1234',
      username: '홍길동',
    },
  ],
};
/*

let inputAcc = '';
let inputPw = '';
// let inputName ='';
let step = 0;
let endStep = 2;
let correctPw = '';
let j = 0;
let chose1 = 0;
let signAcc=0;
let account = '';
let password ='';
let username = '' ;

//회원가입과 로그인 중 어디로 갈지 선택하는 창
while (true) {

  chose1 = prompt('1.회원가입\n2.로그인\n숫자로 입력해주세요.');
  if (1 === +chose1) {//회원가입 선택 시
    step = 3;//아래 반복문에서 회원가입 절차로 이동
    break;
  } else if (2 === +chose1) {// 로그인 선택 시
    step = 0;//아래 반복문에서 회원가입 절차로 이동
    break;
  } else {
    alert('정확한 숫자로 다시 입려해주세요.');
  }
}


while (step !== endStep) {
  switch (step) {
    //사용자에게 아이디 받고 확인하는 단계
    case 0:
      // 요구사항-1, 사용자에게 아이디 입력받기
      inputAcc = prompt('계정을 입력하세요!');

      for (j = 0; j < userInfo.userList.length; j++) {//userInfo.userList 길이 만큼 반복하기
        if (userInfo.userList[j].account === inputAcc) {//요구사항-3, 아이디가 존재한다면 비밀번호를 받는 단계로 이동
          correctPw = userInfo.userList[j].password;
          step = 1;//인증 단계: 계정 여부-> 비밀 번호 확인
          break;//계정 인증 단계 벗어나기
        }
      }

      //요구사항-2, 입력된 아이디가 객체에 존재하는 key가 아니라면
      if (j === 3) {
        alert('존재하지 않는 회원입니다.');
      }
      break;
    //사용자에게 비밀번호 받고 확인하는 단계
    case 1:
      //요구사항-3, 사용자에게 비밀번호를 입력받으세요.
      inputPw = prompt('비밀번호를 입력하세요!');

      if (inputPw === correctPw) {//요구사항-4, 비밀번호가 입력한 아이디에 대응해서 일치한다면
        alert('로그인 성공');
        step = 2;//인증 단계: 계정 여부-> 비밀 번호 확인
        break;//계정 인증 단계 벗어나기
      } else { //비밀번호가 다르다면
        alert('비밀번호가 틀렸습니다');
      }
      break;
    //회원가입 계정 중복 확인
    case 3: {
      account = prompt('회원.아이디를 입력해주세요.');
      for(j=0;j<userInfo.userList.length; j++){
        if (account === userInfo.userList[j].account){
          alert(`이미 가입한 계정이 있습니다.다른 이름으로 가입해주세요.`)
          break;
        }
        else if(j===userInfo.userList.length-1){
          alert(`가입한 계정은 ${account}입니다.`)
          step=4;
          break;
        }
      }
      break;
    }
    //회원 가입 창, 비번, 가입자명 입력
    case 4:
      password= alert();
      username= alert('회원.이름을 입력해주세요.');
      userInfo.userList.push({ account, password, username });
      alert(`회원가입이 완료되었습니다.\n아이디, 비밀번호, 사용자명\n
      ${userInfo.userList[-1]}`)
      step=0;

  }
}
*/

// 로그인 로직
// 사용자가 입력한 계정명으로 해당 계정데이터를 찾아내기
let inputAccount = 'park9876';
let currentUser =null;
for (let user of userInfo.userList) {
  if (inputAccount === user.account) {
    console.log('가입된 계정입니다.');
    currentUser = user;
    break;
  }
}

if (currentUser === null) {
  console.log('회원가입된 계정이 아닙니다.');
}
