//day-1
//https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript

function solution(a, b) {
    if (a.length > b.length) {
        return b + a + b;
    } else {
        return a + b + a;
    }
  };

console.log(solution('13', '200'));