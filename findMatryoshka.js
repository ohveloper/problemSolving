function findMatryoshka(matryoshka, size) {
  if (Object.keys(matryoshka).length === 0) {
    return false;
  }
  if (matryoshka.size === size) {
    return true;
  }
  if (matryoshka.matryoshka === null) {
    return false;
  }
  return findMatryoshka(matryoshka.matryoshka, size);
}

// matryoshka.size 와 num 가 같으면 true
// matryoshka.matryshka === null 일때 종료 fasle
