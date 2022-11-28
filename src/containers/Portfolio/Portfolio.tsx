import React from 'react';
import Card from "../../components/Card/Card";

const Portfolio = () => {

  const cards = [
    {
      img: "22.png",
      address: "/burgermaker",
      title: "Burger Maker",
      text: "Making react burger maker with drawing the ingredients and counting the total.",
      id: "1",
    },
    {
      img: "33.png",
      address: "/poker",
      title: "Poker",
      text: "Making react poker randomizer with taking 5 cards and finding the value",
      id: "2",
    },
    {
      img: "11.png",
      address: "/fastfoodcalc",
      title: "Fast Food Calculator",
      text: "Making Fast Food Menu calculation of the order",
      id: "3",
    }
  ];

  const cardsEl = cards.map(card => {
    return (
      <Card img={card.img} title={card.title} text={card.text} address={card.address} key={card.id}/>
    )
  });

  return (
    <div>
      <h1 className="text-center my-4">Portfolio</h1>
      <div className="d-flex gap-5 justify-content-center flex-wrap mb-5">
        {cardsEl}
      </div>
    </div>
  );
};

export default Portfolio;