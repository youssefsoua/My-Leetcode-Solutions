function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    if (image[sr][sc] !== color) {
        fill(image, sr, sc, color, image[sr][sc]);
    }
    return image;
}

const fill = (image: number[][], sr: number, sc: number, color: number, originalColor: number): void => {
    if (sr >= 0 && sr < image.length && sc >= 0 && sc < image[0].length && image[sr][sc] === originalColor) {
        image[sr][sc] = color;
        fill(image, sr + 1, sc, color, originalColor);
        fill(image, sr - 1, sc, color, originalColor);
        fill(image, sr, sc + 1, color, originalColor);
        fill(image, sr, sc - 1, color, originalColor);
    }
};
