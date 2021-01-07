function test6() {
  let count = 0;

  let fib = function (num) {
    if (num < 2) {
      return num;
    }
    return fib(num - 2) + fib(num - 1);
  };

  return function () {
    count++;
    return fib(count - 1);
  };
}

// 하다하다 스코프에서도 피보나치를 만나네...........
// 온갖 종류별 피보나치 다만날듯...
