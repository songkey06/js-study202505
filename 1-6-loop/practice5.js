let ranNum = Math.floor(Math.random() * 100) + 1;
let i = 1;
let answer = 0;
let level = 0;
let rangeMax = 3;
let rangeMin = 1;
while (i < 10) {
  answer = +prompt(`난이도를 선택하세요!\n[1. 상 (3번의 기회) | 2. 중 (6번의 기회)| 3. 하 (10번의 기회)] `);
  if (rangeMin <= answer && answer <= rangeMax) {
    switch (answer) {
      case 1:
        level = 3;
        break;
      case 2:
        level = 6;
        break;
      case 3:
        level = 10;
        break;
    }
    rangeMax = 100;
    i = 1;
    break;
  } else {
    alert('범위 안에 값을 입력해주세요.');
    i++;
  }
}

while (i < 100) {
  answer = +prompt(`숫자를 입력하세요! [${rangeMin} ~ ${rangeMax}]`);
  if (rangeMin <= answer <= rangeMax) {
    if (ranNum === answer) {
      alert('정답입니다!');
      break;
    } else if (ranNum > answer) {
      alert('up!');
      rangeMin = answer + 1;
    } else {
      alert('down!');
      rangeMax = answer - 1;
    }

    count = level - i;
    if (count === 0) {
      alert(`기회가 모두 소진되었습니다. 정답은 ${ranNum}이었습니다.`);
      break;
    } else {
      alert(`${count}번의 기회가 남앗습니다.`);
      i++;
    }
  } else {
    alert('범위 안에 값을 입력해주세요.');
  }
}