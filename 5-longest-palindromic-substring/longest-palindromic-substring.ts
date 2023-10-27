function longestPalindrome(s: string): string {
  if (s.length < 2) return s;

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= i + longest.length; j--) {
      if (s[i] === s[j]) {
        const substr = s.slice(i, j + 1);
        if (isPalindrome(substr) && substr.length > longest.length) {
          longest = substr;
          break;
        }
      }
    }
  }

  return longest === "" ? s[0] : longest;
}

function isPalindrome(s: string): boolean {
  return s === s.split('').reverse().join('');
}

//Timeout recursive with memo
/*
function longestPalindrome(
    s: string,
    left: number = 0,
    right: number = s.length - 1,
    memo: Record<string, string> = {}
): string {
    const memoKey = `${left}_${right}`;

    if (memoKey in memo) return memo[memoKey];
    if (left > right) return "";

    let currentResult = "";

    const firstResult = longestPalindrome(s, left + 1, right, memo);
    const secondResult = longestPalindrome(s, left, right - 1, memo);

    let isPalindrome = true;
    let tempLeft = left;
    let tempRight = right;

    while (tempLeft <= tempRight) {
        if (s[tempLeft] !== s[tempRight]) {
            isPalindrome = false;
            break;
        }
        tempLeft++;
        tempRight--;
    }

    if (isPalindrome) {
        currentResult = s.slice(left, right + 1); 
    }

    if (
        firstResult.length >= secondResult.length &&
        firstResult.length >= currentResult.length
    ) {
        memo[memoKey] = firstResult;
    } else if (
        secondResult.length >= firstResult.length &&
        secondResult.length >= currentResult.length
    ) {
        memo[memoKey] = secondResult;
    } else {
        memo[memoKey] = currentResult;
    }
    
    return memo[memoKey];
}
*/
