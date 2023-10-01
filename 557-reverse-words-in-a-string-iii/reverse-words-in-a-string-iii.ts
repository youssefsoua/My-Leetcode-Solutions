function reverseWords(s: string): string {
  const n = s.length;
  let result = "";
  let start = 0;
  for (let i = 0; i < n; i++) {
    if (s[i + 1] === " " || i === n - 1) {
      if (result) result += " ";
      for (let j = i; j >= start; j--) {
        result += s[j];
      }
      start = i + 2;
    }
  }
  return result;
}
