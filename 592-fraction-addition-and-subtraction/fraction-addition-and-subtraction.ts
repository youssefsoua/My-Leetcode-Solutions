function fractionAddition(expression: string): string {
    const fractions = expression.match(/(\+|\-)?\d+\/\d+/g);
    let numerator = 0;
    let denominator = 1;

    fractions?.forEach(fraction => {
        const [num, denom] = fraction.split("/").map(Number);
        numerator = numerator * denom + num * denominator;
        denominator *= denom;
        const gcdValue = gcd(Math.abs(numerator), denominator);
        numerator /= gcdValue;
        denominator /= gcdValue;
    });

    return `${numerator}/${denominator}`;
}

function gcd(a: number, b: number): number {
    return b ? gcd(b, a % b) : a;
}
