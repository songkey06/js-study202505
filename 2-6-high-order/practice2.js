const traders = [
  {
    trader: {
      name: '김철수', // traders[0].trader.name
      city: '대전',
    },
    year: 2023, // traders[0].year
    value: 500000,
  },
  {
    trader: {
      name: '박영희',
      city: '서울',
    },
    year: 2022, // traders[1].year
    value: 600000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: '박영희',
      city: '서울',
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: '뽀로로',
      city: '부산',
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: '루피',
      city: '대전',
    },
    year: 2022,
    value: 780000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2023,
    value: 1500000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 2500000,
  },
  {
    trader: {
      name: '김철수',
      city: '대전',
    },
    year: 2022,
    value: 500000,
  },
  {
    trader: {
      name: '루피',
      city: '대전',
    },
    year: 2023,
    value: 120000,
  },
];
const cloneData = [...traders];//중요, 얕은복사 말고 깊은 복사하는 법
// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**
const sum = traders
  .filter(user=>user.year===2023 &&user.trader.city === '대전')
  .reduce((acc, cur) => {return acc+cur.value}, 0)
console.log(`총액 ${sum}원`);
console.log('=================');

// 2. **모든 거래 중 가장 높은 거래액을 가진 거래의
//   거래자 정보(이름, 도시)와 거래액을 출력해주세요.**
const maxTradeData = cloneData
  .sort((a,b)=> b.value -a.value)
console.log(`가장 높은 거래액 정보 - 이름: ${maxTradeData[0].trader.name}, 도시: ${maxTradeData[0].trader.city}, 거래액: ${maxTradeData[0].value}`);
console.log('=================');

// 3. **각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요.
//   예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.**

const cityPerTrade = traders.reduce((resultObj, city)=>{
  if (city.trader.city in resultObj){///city.trader.city === undefined도 있음
    resultObj[city.trader.city]+=city.value;
  } else {
    resultObj[city.trader.city]=city.value;
  }
  return resultObj;
}, {});
console.log(cityPerTrade);
console.log('=================');


// 4. **각 도시에서 진행된 거래의 수를 계산해주세요.
//   결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**
const cityPerCount = traders.reduce((resultObj,city)=>{
  if (city.trader.city in resultObj){
    resultObj[city.trader.city]++;
  } else {
    resultObj[city.trader.city]=1;
  }
  return resultObj
}, {});

/*traders.reduce((cityObj,{trader})=>{
  const {city} = trader;
  if (cityObj[city]===undefined){
    cityObj[city]=1;
  } else {
    cityObj[city]++;
  }
  return cityObj;
})*/
console.log(cityPerCount);
console.log('=================');

// 5. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후,
//   정렬된 리스트를 출력해주세요.
//   각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**
const upList = traders.sort((a, b)=>a.value -b.value)
console.log(upList);
