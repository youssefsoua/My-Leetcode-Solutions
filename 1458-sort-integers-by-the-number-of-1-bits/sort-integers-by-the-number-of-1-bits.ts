function sortByBits(arr: number[]): number[] {
  // Helper function to count the number of set bits (1s) in a binary representation
  const countSetBits = (num: number): number => {
    let count = 0;
    while (num > 0) {
      count += num & 1; // Check the least significant bit
      num >>= 1; // Right shift to check the next bit
    }
    return count;
  };

  // Custom sort function for comparing numbers by the count of set bits
  const bitsSort = (num1: number, num2: number): number => {
    const n1 = countSetBits(num1);
    const n2 = countSetBits(num2);

    if (n1 === n2) {
      return num1 - num2;
    }

    return n1 - n2;
  };

  return arr.sort(bitsSort);
}


/*
function sortByBits(arr: number[]): number[] {
    const bitsSort = (num1: number, num2: number) => {

        const n1 = (num1.toString(2).match(/1/g) || []).length;
        const n2 = (num2.toString(2).match(/1/g) || []).length;

        if (n1 === n2) return num1 - num2;
        return n1 - n2;
    };

    return arr.sort(bitsSort);
}
*/