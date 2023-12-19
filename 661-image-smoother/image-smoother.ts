// This function takes a 2D array representing an image (img) and applies a smoothing filter to each pixel.

function imageSmoother(img: number[][]): number[][] {
  // Define the 8 neighboring pixels relative to the current pixel.
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

  // Get the dimensions of the image.
  const m: number = img.length;    // Number of rows
  const n: number = img[0].length; // Number of columns

  // Initialize the result array to store the smoothed image.
  const result: number[][] = [];

  // Iterate through each pixel in the image.
  for (let i = 0; i < m; i++) {
    // Initialize a new row in the result array.
    result[i] = [];

    for (let j = 0; j < n; j++) {
      // Initialize the sum and count for calculating the average value.
      let sum: number = img[i][j];
      let count: number = 1;

      // Iterate through each neighboring pixel using the defined filters.
      for (const filter of filters) {
        // Calculate the coordinates of the neighboring pixel.
        const x: number = i + filter[0];
        const y: number = j + filter[1];

        // Check if the neighboring pixel is within the bounds of the image.
        if (img[x] !== undefined && img[x][y] !== undefined) {
          // Increment the count and add the pixel value to the sum.
          count++;
          sum += img[x][y];
        }
      }

      // Calculate the average value and round it to the nearest integer.
      result[i].push(Math.floor(sum / count));
    }
  }

  // Return the smoothed image.
  return result;
}
