// 스프레드:배열을 평탄화 (해체해서 늘어놓는다) 시킨다.

const foods=['햄버거','콜라','감자튀김'];
const fruits= ['오렌지','레몬','라임'];

// combination['햄버거','콜라','감자튀김','오렌지','레몬','라임']
// const combination= foods.concat(fruits);
const combination=[...foods,...fruits];//"..."배열에서 꺼내 흐트려 펴기

console.log(combination);

// 배열 복사
const newFruits = [...fruits];

const myFavorite = ['족발', ...foods];
console.log(myFavorite);

//push: 원본 손상