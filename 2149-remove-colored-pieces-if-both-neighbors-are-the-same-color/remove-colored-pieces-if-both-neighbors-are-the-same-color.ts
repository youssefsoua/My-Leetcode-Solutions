function winnerOfGame(colors: string): boolean {
  let aliceCount = 0;
  let bobCount = 0;

  for (let i = 0; i < colors.length - 2; i++) {
    if (colors[i] === 'A' && colors[i + 1] === 'A' && colors[i + 2] === 'A') {
      aliceCount++;
    } else if (colors[i] === 'B' && colors[i + 1] === 'B' && colors[i + 2] === 'B') {
      bobCount++;
    }
  }

  return aliceCount > bobCount;
}


// function winnerOfGame(colors: string): boolean {
//     const alice = colors.match(/(?=AAA)/g);
//     const bob = colors.match(/(?=BBB)/g);

//     if (!alice || (alice && bob && alice.length <= bob.length)) return false;
//     return true;
// }


/*
    const inputString = "AAAAAAA";
    const pattern = /(?=AAA)/g;

    const matches = inputString.match(pattern);

    console.log(matches); // This will output: [ '', '', '', '', '' ]
    console.log(matches.length); // This will output: 5

 */