let lottoNum = '0';
for (let i=0; i<6;i++){
  lottoNum = (Math.floor(Math.random()*46) +1) + ' '
}
console.log(lottoNum);