function makeMarginalString(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < i; j++) {
      result = result + str[j];
    }
    result = result + str[i];
  }
  return result;
}

// f       0
// fl 0     1
// flo 01    2
// flow 012   3
// flowe 0123  4
// flower 01234 5
