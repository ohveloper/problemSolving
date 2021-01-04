function compressString(str) {
  let first = str[0];
  let count = 1; // 1번째에 들어간걸 카운트하고 시작하기 때문에 1부터
  let result = "";
  for (let i = 1; i <= str.length; i++) {
    // first 를 이미 할당하고 시작했기때문에 1번째부터
    if (first === str[i]) {
      count++;
    } else if (first !== str[i]) {
      if (count >= 3) {
        result = result + `${count}${first}`;
      } else {
        result = result + first.repeat(count);
      }
      first = str[i];
      count = 1;
    }
  }
  return result;
}
// 첫번째 문자를 지정해놓고 뒤에 같은지 비교한다
// 카운트를 한다
// 카운트를 하다가 다른 문자를 만나면 확인한다
//    카운트가 3을 넘었으면 첫번째 문자와 카운트 숫자만 넣어준다
//    넘지 못했으면 첫번째 글짜를 리핏해준다 카운트 숫자만큼
//        다음 반복문으로 넘어가면서 첫번쨰글자를 현재 글자로 바꿔주고 카운트를 1로 다시 바꿔준다
// 계속 돌고 돌다가 마지막까지 확인하고 리절트를 리턴한다
