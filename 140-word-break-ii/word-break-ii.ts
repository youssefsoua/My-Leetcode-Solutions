function wordBreak(s: string, wordDict: string[]): string[] {
    const n = wordDict.length;
    const result: string[] = [];

    const dfs = (word, path) => {
        if (word === "") result.push(path.join(" "));
        for (let i = 0; i < n; i++) {
            if (word.indexOf(wordDict[i]) === 0) {
                path.push(wordDict[i]);
                dfs(word.slice(wordDict[i].length), path);
                path.pop();
            }
        }
    }

    dfs(s, []);

    return result;
};