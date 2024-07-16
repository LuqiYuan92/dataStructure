let calculcationSlow = 0;
let calculcationFast = 0;
let calculcationFast2 = 0;

function fibonacci(n) {
  calculcationSlow++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
}

function fibonacciFast() {
  let cache = {};
  return function fibonaccifastBase(n) {
    calculcationFast++;
    if (n in cache) {
      //   console.log("prop", n in cache);
      return cache[n];
    } else if (n < 2) {
      return n;
    } else {
      cache[n] = fibonaccifastBase(n - 2) + fibonaccifastBase(n - 1);
      //   console.log("value", cache[n]);
      return cache[n];
    }
  };
}
//bottom-up approach
function fibonacciFast2(n) {
  let list = [0, 1];
  for (let i = 2; i <= n; i++) {
    calculcationFast2++;
    list.push(list[i - 2] + list[i - 1]);
  }
  return list.pop();
}
let fastFib = fibonacciFast();
console.log("fast", fastFib(20), "calfast", calculcationFast);
console.log("slow", fibonacci(20), "calSlow", calculcationSlow);
console.log("fast2", fibonacciFast2(20), "calfast2", calculcationFast2);

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
