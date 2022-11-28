import React from 'react';

interface Props {
  classname: string;
  name: string;
  price: number;
  addItem:React.MouseEventHandler;
}

const Menu: React.FC<Props> = ({classname, name, price, addItem}) => {
  return (
    <button type="button" className={classname} onClick={addItem}>
      <h3>{name}</h3>
      <p>Price: <span>{price}</span></p>
    </button>
  );
};

export default Menu;