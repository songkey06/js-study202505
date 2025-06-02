//난수 : 랜덤값
// 0.0이상 1.0미만의 랜덤 숫자를 생성해줌
let randonNumber=Math.random();
console.log(`rn: ${randonNumber}`);
//랜덤 정수 만들기(1~10)
/*
Math.random()     0.0 <=~<1.0
Math.rnadom()*10  0.0 <= ~ <10.0
Math.flow(Math.random()*10)   0 <= ~ <10
Math.flow(Math.random()*10)+1 1<= ~ <11

117~132사이의 난수
x ~ y 사이의 난수(이상이하의 개념)

Math.floor(Math.random() * (y - x + 1)) +x;
*/
let damage = Math.floor(Math.random() * (132 - 117 + 1)) +117;
console.log(`damage: ${damage}`);