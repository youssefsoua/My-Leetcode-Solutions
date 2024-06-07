function replaceWords(dictionary: string[], sentence: string): string {
    dictionary.sort((a, b) => a.length - b.length);
    const words = sentence.split(" ");

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < dictionary.length; j++) {
            if (words[i].startsWith(dictionary[j])) {
                words[i] = dictionary[j];
                continue;
            }
        }
    }

    return words.join(" ");
};