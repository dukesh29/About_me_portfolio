import React from 'react';

interface totalPrice {
  getTotalPrice:number;
  totalClassname:string;
}

const Total:React.FC<totalPrice> = ({getTotalPrice,totalClassname}) => {
  return (
      <div className={totalClassname}><strong>Total price: {getTotalPrice} KGS</strong></div>
  );
};

export default Total;