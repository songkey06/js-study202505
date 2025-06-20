
/*
export function add(n1, n2) {
  return n1 + n2;
}

export const sub = function (n1, n2) {
  return n1 - n2;
};

export const multi = (n1, n2) => n1 * n2;*/

function add(n1, n2) {
  return n1 + n2;
}

const sub = function (n1, n2) {
  return n1 - n2;
};

const multi = (n1, n2) => n1 * n2

// export const operation ={add, sub, multi};

// 어떤 데이터를 이름없이 내보낼 때
// export default는 모듈별로 번만 사용할 수 있음
export default {add, sub, multi};