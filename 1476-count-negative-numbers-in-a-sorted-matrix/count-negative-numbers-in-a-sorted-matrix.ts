function countNegatives(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;
    let i = m - 1;
    while (i >= 0 && grid[i][n - 1] < 0) {
        if (grid[i][0] < 0) {
            count += n;
        } else {
            let low = 0;
            let high = n - 1;
            while (low <= high) {
                const mid = Math.floor((low + high) / 2);
                if (grid[i][mid] < 0 && grid[i][mid - 1] >= 0) {
                    count += n - mid;
                    break;
                } else if (grid[i][mid] < 0 && grid[i][mid - 1] < 0) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
        }
        i--;
    }
    return count;
}

/**
You can optimize the given code for counting negatives in a 2D grid by taking advantage of the properties of the grid. Here's an optimized version of the code:

```typescript
function countNegatives(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;
    let i = 0;
    let j = n - 1;

    while (i < m && j >= 0) {
        if (grid[i][j] < 0) {
            count += m - i; // Count all negatives in the current column.
            j--; // Move to the previous column.
        } else {
            i++; // Move to the next row.
        }
    }

    return count;
}
```

Here are the optimizations made in this code:

1. Instead of starting from the last row and last column, we start from the first row and last column. This way, we can traverse the grid in a more natural order, which is more efficient for counting negatives.

2. We iterate through the rows and columns while incrementing `i` and decrementing `j`. This ensures that we always move to the next row or the previous column, depending on whether the current element is positive or negative. This eliminates the need for binary search within each row.

3. We count all the negatives in the current column by adding `m - i` to the `count` variable, where `m - i` represents the number of rows below the current row.

This optimized code has a time complexity of O(m + n), where `m` is the number of rows, and `n` is the number of columns, as it iterates through the grid only once. It is more efficient than the binary search approach and should perform better for most inputs.
 */