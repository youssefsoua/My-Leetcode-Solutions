function isCircularSentence(sentence: string): boolean {
    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {

        if (i === 0 && words[i][0] !== words[words.length - 1][words[words.length - 1].length - 1] ||
            i !== 0 && words[i][0] !== words[i - 1][words[i - 1].length - 1]) return false;
    }

    return true;

};