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
  const matrix = createMatrix(word1, word2);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (word1[i] === word2[j]) {
        matrix[i][j] = i === 0 || j === 0 ? 1 : 1 + matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = 0;
      }
    }
  }

  return Math.max(...matrix.map((row) => Math.max(...row)));
};

console.log(findLCS("fort", "fosh"));
console.log(findLCS("apple", "fosh"));
