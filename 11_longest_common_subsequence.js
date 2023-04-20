const createMatrix = (word1, word2) => {
  let row = [];
  for (let i = 0; i < word1.length; i++) {
    let column = [];
    for (let j = 0; j < word2.length; j++) {
      column.push(0);
    }
    row.push(column);
  }

  return row;
};

const findLCS = (word1, word2) => {
  let count = 0;
  const matrix = createMatrix(word1, word2);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (word1[i] === word2[j]) {
        count += 1;
      }
      matrix[i][j] = count;
    }
  }

  return matrix[word1.length - 1][word2.length - 1];
};

console.log(findLCS("fort", "fosh"));
