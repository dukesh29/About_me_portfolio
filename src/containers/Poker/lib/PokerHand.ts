class PokerHand {

  getOutcome(cardsFinal: any[]) {
    let suit: any = {};
    let rank: any = {};
    let text;
    let result;

    cardsFinal.forEach((a) => {
      if (rank[a['rank']] !== undefined)
        ++rank[a['rank']];
      else
        rank[a['rank']] = 1;
      if (suit[a['suit']] !== undefined)
        ++suit[a['suit']];
      else
        suit[a['suit']] = 1;
    });

    for (let key in suit) {
      if (suit[key] === 5) {
        text = 'You have flush';
      }
    }

    let r = 0;
    for (let key in rank) {
      if (rank[key] === 2) {
        r++;
        if (r === 1) {
          text = 'You have pair';
        }
        if (r === 2) {
          text = 'You have two pairs';
        }
      }

      if (rank[key] === 3) {
        text = 'You have three of a kind';
      }
      if (rank[key] === 4) {
        text = 'You have four of a kind';
      }
    }
    return text;
  }
}


export default PokerHand;