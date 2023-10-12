function intToRoman(num: number): string {
  const numbers = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (const { value, symbol } of numbers) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}



/*

function intToRoman(num: number): string {
    const numbers = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M",
    };

    let multiplier = 1000;
    let number = num;
    let result = "";

    while (multiplier >= 1) {
        const val = Math.floor(number / multiplier);

        if (val > 5 && val < 9) {
            result +=
                numbers[multiplier * 5] + numbers[multiplier].repeat(val - 5);
        } else if (val < 4) {
            result += numbers[multiplier].repeat(val);
        } else {
            result += numbers[multiplier * val];
        }

        number %= multiplier;
        multiplier /= 10;
    }

    return result;
}

*/