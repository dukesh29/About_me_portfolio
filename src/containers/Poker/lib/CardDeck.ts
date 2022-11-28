import Card from "./Card";

class CardDeck {

  constructor() {

  }

  getCard() {
    const suit = ['diams', 'hearts', 'clubs', 'spades'];
    const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
    let card;
    let cardsArr = [];
    for (let i = 0; i < suit.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        card = new Card(suit[i], rank[j]);
        cardsArr.push(card);
      }
    }
    return cardsArr;


  }

  getCards(howMany: number) {
    let cardsArr = this.getCard();
    let cardsFin = [];
    for (let i = 0; i < howMany; i++) {
      let random = cardsArr[Math.floor(Math.random() * cardsArr.length)];
      cardsArr = cardsArr.filter((n) => {
        return n !== random;
      });
      let card = new Card(random['suit'], random['rank']);
      cardsFin.push(card);
    }
    return cardsFin;
  }
}

export default CardDeck;