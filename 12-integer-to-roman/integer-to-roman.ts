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
