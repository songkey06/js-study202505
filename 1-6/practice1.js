let list='';
let i= 0;
for (i=2; i <=10; i+=2){
  list+=i+' ';
}
console.log(list);//가로 배치 할려면 콘솔로그는 한 번만 써야함

console.log("=============");
for (i=6; i <=50; i+=6){
  console.log(i);
}
console.log("=============");
for (i=7;i<=100;i+=14){
  console.log(i);
}
console.log("=============");
let num=0;
for (i=3;i<7777;i+=3){
  num++;
}
console.log(`3의 배수의 총 개수: ${num}개`);
