const userList = [
  {
    account: 'abc1234',
    userName: '대길이',
    job: '추노',
    address: '서울',
    hobbies: ['수영', '축구', '테니스'],
    salary: 5400000,
    age: 35,
  },
  {
    account: 'banana',
    userName: '빠나나',
    job: '과일',
    address: '서울',
    hobbies: ['푸드파이팅', '테니스'],
    salary: 9700000,
    age: 18,
  },
  {
    account: 'park1234',
    userName: '주차왕',
    job: '발렛파킹',
    address: '경기',
    hobbies: ['족구', '축구', '테니스', '영화감상'],
    salary: 3900000,
    age: 56,
  },
  {
    account: 'fire',
    userName: '불꽃남자카리스마',
    job: '게이머',
    address: '서울',
    hobbies: ['독서', '테니스'],
    salary: 1900000,
    age: 42,
  },
];

function every(userArray=userList,callback){
  //유저 배열을 순회한다.
  for (const user of userArray) {
    //콜백조건을 실행했을 때 결과가 false인 경우
    if (!callback(user)){
      // 더 볼 필요 없이 false를 반환한다.
      return false;
    }
  }
  // 반복문이 모두 끝났는데도 리턴이 안나왔다면
  // 모든 요소가 조건에 만족하는 것이므로 최종적으로 true 반환
  return true;
}

// 모든 사용자가 서울에 사는가?
const every1 = every(userList,user => user.address === '서울');  // false
console.log(`every1: ${every1}`);

// 모든 사용자의 취미가 1개 이상인가?
const every2 = every(userList,user => user.hobbies.length > 0);  // true
console.log(`every2: ${every2}`);

console.log('============');

function some(userArray=userList,callback){
  for (const user of userArray) {
    //하나라도 예외가 나온다면 true
    if (callback(user))return true;
  }
  return false;
}

// 이름에 '왕'이 포함된 사람이 있는가?
const some1 = some(userList,user => user.userName.includes('왕')); // true
console.log(`some: ${some1}`);

// 부산에 사는 사용자가 있는가?
const some2 = some(userList,user => user.address === '부산'); // false
console.log(`some: ${some2}`);

console.log('============');
function none(userArray=userList,callback){
  return !some(userArray,callback);
}
// '게임'이라는 취미를 가진 사용자가 없는가?
const none1 = none(userList,user => user.hobbies.includes('게임')); // true
console.log(`none1: ${none1}`);

// 서울에 사는 사용자가 아무도 없는가?
const none2 = none(userList,user => user.address === '서울'); // false
console.log(`none2: ${none2}`);

function filter(userArray=userList,callback){
  const newList=[];
  for (const user of userArray) {
    if (callback(user)){
      newList.push(user)
    }
  }
  return newList;
}
function map(userArray=userList,callback){
  const newList=[];
  for (const user of userArray) {
    newList.push(callback(user));
  }
  return newList;
}

function custom(userArray, callback, type){
  switch (type){
    case 'filter':
      return filter(userArray, callback);
    case 'map':
      return map(userArray, callback);
    case 'every':
      return every(userArray, callback)
    case 'some':
      return some(userArray, callback)
  }
}
// type === 'filter' → 조건 만족하는 배열
// type === 'map' → 특정 값 추출
// type === 'every' → 모두 조건 만족?
// type === 'some' → 하나라도 만족?

console.log('+++++++++++++++++++');
const result1 = custom(userList, user => user.hobbies.length === 2, 'filter');
const result2 = custom(userList, user => user.job, 'map');
const result3 = custom(userList, user => user.address === '서울', 'every');
const result4 = custom(userList, user => user.userName.includes('왕'), 'some');
console.log(`result1: `, result1);
console.log(`result2 : ${result2}`);
console.log(`result3 : ${result3}`);
console.log(`result4 : ${result4}`);
