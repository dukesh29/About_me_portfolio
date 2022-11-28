import React, {useState} from 'react';
import CardView from "./CardView/CardView";
import CardDeck from "./lib/CardDeck";
import PokerHand from "./lib/PokerHand";
import './cards.css';

function PokerFace() {

  const cards = new CardDeck;
  const cardsTake = () => cards.getCards(5);
  const [cardsFinal, setNumber] = useState(cards.getCards(5));

  const hand = new PokerHand();
  const handValue = hand.getOutcome(cardsFinal);

  const changeCard = () => {
    setNumber(cardsTake);
  };

  const className = () => {
    let classes = [];
    for (let i = 0; i < cardsFinal.length; i++) {
      const classCard = "card rank-" + `${cardsFinal[i]['rank']}` + ' ' + `${cardsFinal[i]['suit']}`;
      classes.push(classCard);
    }
    return classes;
  }
  const makeSuit = () => {
    let suit='';
    let suitArr = [];
    for (let i = 0; i < cardsFinal.length; i++) {
      switch (cardsFinal[i]['suit']) {
        case 'diams':
          suit = '♦';
          break;
        case 'clubs':
          suit = '♣';
          break;
        case 'hearts':
          suit = '♥'
          break;
        case 'spades':
          suit = '♠';
          break;
      };

      suitArr.push(suit);
    }
    return suitArr;
  }

  const suitArr = makeSuit();
  const classes = className();



  return (
    <div className="poker-block container">
      <div className="handsValue"> Your hands: {handValue}</div>
      <div className="playingCards faceImages">
        <CardView suit={classes[0]} rank={cardsFinal[0]['rank']} classes={classes[0]} suitSym={suitArr[0]} />
        <CardView suit={classes[1]} rank={cardsFinal[1]['rank']} classes={classes[1]} suitSym={suitArr[1]} />
        <CardView suit={classes[2]} rank={cardsFinal[2]['rank']} classes={classes[2]} suitSym={suitArr[2]} />
        <CardView suit={classes[3]} rank={cardsFinal[3]['rank']} classes={classes[3]} suitSym={suitArr[3]} />
        <CardView suit={classes[4]} rank={cardsFinal[4]['rank']} classes={classes[4]} suitSym={suitArr[4]} />
      </div>
      <button onClick={changeCard}>Set the cards</button>
    </div>
  );
}

export default PokerFace;
