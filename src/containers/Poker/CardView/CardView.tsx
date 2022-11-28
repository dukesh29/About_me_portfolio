import React from 'react';

interface CardsFinal {
  suit: string;
  rank: string;
  classes: string;
  suitSym: string;
}

const CardView: React.FC<CardsFinal> = (props) => {
  return (
    <div>
    <span className={props.classes}>
      <span className="rank">{(props.rank).toUpperCase()}</span>
      <span className="suit">{props.suitSym}</span>
    </span>
    </div>
  );
};

export default CardView;