/*
let num = '';
let count=0
let limit = +prompt('양의 정수: ');
for (let i=1; i<=limit; i++){
  if (limit%i===0) {
    num+=i + "\n";
    count++;
  }

}
alert(`${num}약수의 개수는 ${count}`);*/

/*let num = '';
let count=0
let limit = +prompt('양의 정수: ');
let i=1;
while (i<=limit){
  if (limit%i===0) {
    num+=i + "\n";
    count++;
  }
  i++;

}
alert(`${num}약수의 개수는 ${count}`);*/

/*let num = '';
let count=0
let list=[];*/
let limit = prompt('양의 정수는:')
let i=1;
while(i<=+limit/2){
  if (limit%i===0){
    listi+=i + (limit/i);
  }
  i++;
}
alert(Math.min(lisst))

