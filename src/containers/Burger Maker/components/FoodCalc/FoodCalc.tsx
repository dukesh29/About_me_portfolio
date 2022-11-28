import React from 'react';

interface Props {
  finalPrice:number;
}

const FoodCalc:React.FC<Props> = ({finalPrice}) => {
  return (
    <p style={{fontSize:"20px", textTransform:"uppercase"}}
       className="text-center">
      <strong>Your price: {finalPrice}</strong>
    </p>
  );
};

export default FoodCalc;