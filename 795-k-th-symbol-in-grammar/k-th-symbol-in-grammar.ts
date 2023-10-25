function kthGrammar(n: number, k: number): number {
  if (n === 1) {
    return 0;
  }

  // Calculate the midpoint of the previous level
  const midPoint = Math.pow(2, n - 2);

  if (k <= midPoint) {
    // If k is in the left half, recursively find it in the previous level
    return kthGrammar(n - 1, k);
  } else {
    // If k is in the right half, find its complement in the previous level
    const complement = kthGrammar(n - 1, k - midPoint);
    // Return the complement's value (1 becomes 0, and 0 becomes 1)
    return complement === 0 ? 1 : 0;
  }
}


/*
function kthGrammar(n: number, k: number): number {
    const grammarString = (n: number): string => {
        if (n === 1) return "0";
        if (n === 2) return "01";
        const prev = grammarString(n - 1);
        let inverse = "";
        for (let i = 0; i < prev.length; i++) {
            if (prev[i] === "0") inverse += "1";
            else inverse += "0";
        }
        return prev + inverse;
    };
    return +grammarString(n)[k - 1];
}
*/
