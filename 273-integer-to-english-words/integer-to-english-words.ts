function numberToWords(num: number): string {
    if (num === 0) return "Zero";

    const belowTwenty = [
        "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
        "Seventeen", "Eighteen", "Nineteen"
    ];

    const tens = [
        "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];

    const thousands = ["", "Thousand", "Million", "Billion"];

    function helper(n: number): string {
        if (n === 0) return "";
        else if (n < 20) return belowTwenty[n - 1] + " ";
        else if (n < 100) return tens[Math.floor(n / 10) - 2] + " " + helper(n % 10);
        else return belowTwenty[Math.floor(n / 100) - 1] + " Hundred " + helper(n % 100);
    }

    let result = "";
    for (let i = 0; num > 0; i++) {
        if (num % 1000 !== 0) {
            result = helper(num % 1000) + thousands[i] + " " + result;
        }
        num = Math.floor(num / 1000);
    }

    return result.trim();
}