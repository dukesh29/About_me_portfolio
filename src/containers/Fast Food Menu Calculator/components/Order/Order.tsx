import React from 'react';

interface OrderList {
  name: string;
  count: number;
  priceForOne: number;
  deleteBtn: React.MouseEventHandler;
}

const Order: React.FC<OrderList> = ({name, count, priceForOne, deleteBtn}) => {
  return (
    <div className="order-item">
      <div className="text-info">
        <span style={{textDecoration:'underline'}}>{name}</span><span>x{count} {priceForOne} KGS</span></div>
      <button type="button" onClick={deleteBtn}></button>
    </div>
  );
};

export default Order;