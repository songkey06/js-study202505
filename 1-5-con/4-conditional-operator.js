
//돈이 3000원 이상이면 김밥을 먹을 수 있고 미만이면 집밥을 먹어야한다
//그런데 먹을 수 있는 음식이름을 변수에 조건부로 저장해야 한다.

let money = 4000;
// 3항 조건 연산자
let foodName = (money>=3000) ? '김밥' | '집밥';
// let foodName;
/*if (money >= 4000) {
  foodName='김밥';
}
else {
  foodName= '집밥';
}*/

console.log(`먹을 수 있는 음식: ${foodName}`);