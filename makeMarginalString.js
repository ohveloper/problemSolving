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

// f
// fl
// flo
// flow
// flowe
// flower
