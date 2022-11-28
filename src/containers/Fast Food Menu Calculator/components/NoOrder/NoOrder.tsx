import React from 'react';

interface noOrder {
  classnameNoOrder:string;
}

const NoOrder:React.FC<noOrder> = ({classnameNoOrder}) => {
  return (
    <div className={classnameNoOrder} style={{textAlign:"center"}}>
      Order is empty! <br/>
      Please add some items!
    </div>
  );
};

export default NoOrder;