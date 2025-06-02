/*let list='';
let limit= +prompt('양의 정수를 입력하세요.')
for (let i=2;i <= limit; i*=2){
  list+=i + ' ';
}
alert(list);*/

let list='';
let limit= +prompt('양의 정수를 입력하세요.')
let i=2;
while (i <= limit){
  list+=i + ' ';
  i*=2;
}
alert(list);