function imageSmoother(img: number[][]): number[][] {
  const filters: number[][] = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];

  const m: number = img.length;
  const n: number = img[0].length;

  const result: number[][] = [];

  for (let i = 0; i < m; i++) {
    result[i] = [];

    for (let j = 0; j < n; j++) {
      let sum: number = img[i][j];
      let count: number = 1;

      for (const filter of filters) {
        const x: number = i + filter[0];
        const y: number = j + filter[1];

        if (img[x] !== undefined && img[x][y] !== undefined) {
          count++;
          sum += img[x][y];
        }
      }

      result[i].push(Math.floor(sum / count));
    }
  }
  return result;
}
