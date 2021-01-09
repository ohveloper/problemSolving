function decryptCaesarCipher(str, secret) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i of str) {
    if (i === " ") {
      result += " ";
    } else if (secret > alphabet.indexOf(i)) {
      result += alphabet[alphabet.indexOf(i) + 26 - secret];
    } else {
      result += alphabet[alphabet.indexOf(i) - secret];
    }
  }
  return result;
}
// str 을 반복문으로 체크한다
// 비교를 위해 만든 알파벳 문자열과 비교해서 인덱스를 체크한다
// secret 만큼 뒤로간 인덱스 번째 문자열을 result 로 보낸다

// 이전에 풀었을때랑 느낌이 약간 다르더라 아예 풀수 없을거 같은 느낌이었는데
// 생각이 많이 트인거같다. 한번 풀어봤던 문제 이기도 하고 레퍼런스도 많은
// 도움이 되었다.
// 무작정 레퍼런스 없이 풀기만 하는것도 그렇다고 너무 레퍼런스에 의존하는것도
// 적당한게 좋은거 같다
