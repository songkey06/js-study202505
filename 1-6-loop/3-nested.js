// let level =2;
for(let level=2; level<=9; level++) {
  console.log(`=========구구단 ${level}단===========`);
  for (let line = 1; line <= 9; line++) {
    console.log(`* ${level} x ${line} = ${level * line}`);
  }
}