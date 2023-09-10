function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    let result = "";
    
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return result;
            }
        }

        result += char;
    }

    return result;
}


// function longestCommonPrefix(strs: string[]): string {
//     const dictionary = {};
//     let result = "";

//     for (const str of strs) {
//         let current = dictionary;
//         for (const char of str) {
//             if (!current[char]) current[char] = { count: 0 };
//             current[char].count++;
//             current = current[char];
//         }
//     }

//     let current = dictionary;
//     for (const char of strs[0]) {
//         if (current[char].count !== strs.length) break;
//         result += char;
//         current = current[char];
//     }

//     return result;
// }
