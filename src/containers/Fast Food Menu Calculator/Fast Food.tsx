import React, {useMemo, useState} from 'react';
import Menu from "./components/Menu/Menu";
import Order from "./components/Order/Order";
import Total from "./components/Total/Total";
import NoOrder from "./components/NoOrder/NoOrder";
import './FastFood.css'

function FastFood() {

  const [orders, setOrders] = useState([
    {name: 'Hamburger', price: 110, count: 0, id: 1},
    {name: 'Cheeseburger', price: 140, count: 0, id: 2},
    {name: 'Shaurma', price: 160, count: 0, id: 3},
    {name: 'Fries', price: 50, count: 0, id: 4},
    {name: 'Cola', price: 40, count: 0, id: 5},
    {name: 'Tea', price: 30, count: 0, id: 6},
    {name: 'Coffee', price: 80, count: 0, id: 7},
    {name: 'Salads', price: 70, count: 0, id: 8},
    {name: 'Water', price: 10, count: 0, id: 9},
  ]);

  const addOrder = (id: number) => {
    setOrders(prev => prev.map(order => {
      return order.id === id ? {
        ...order,
        count: order.count + 1,
      } : order;
    }));
  };

  const menuList = orders.map(order => {
    return (
      <Menu
        classname={order.name}
        name={order.name}
        price={order.price}
        key={order.id}
        addItem={() => addOrder(order.id)}/>
    )
  });

  const totalForOne = (id: number) => {
    const order = orders.filter(order => order.id === id);
    return order[0].count * order[0].price;
  };

  const getTotalPrice = useMemo(() => {
    return orders.reduce((acc, order) => {
      return acc + (order.price * order.count);
    }, 0)
  }, [orders]);

  const deleteBtn = (id: number) => {
    setOrders(prev => prev.map(order => {
      return (order.id === id && order.count !== 0) ? {
        ...order,
        count: order.count - 1,
      } : order;
    }))
  };

  const orderList = orders.map(order => {
    return order.count !== 0 ? (
      <Order
        deleteBtn={() => deleteBtn(order.id)}
        name={order.name}
        count={order.count}
        priceForOne={totalForOne(order.id)}
        key={order.id}/>
    ) : '';
  });

  const noOrderDiv = () => {
    if (getTotalPrice > 0) {
      return 'noOrderHide';
    } else {
      return '';
    }
  };

  const TotalDiv = () => {
    if (getTotalPrice <= 0) {
      return 'noOrderHide';
    } else {
      return 'total-block';
    }
  };

  return (
    <div className="fastfood">
      <fieldset className="order-block">
        <legend>Order</legend>
        <NoOrder classnameNoOrder={noOrderDiv()}/>
        {orderList}
        <Total getTotalPrice={getTotalPrice} totalClassname={TotalDiv()}/>
      </fieldset>
      <fieldset className="items-block">
        <legend>Menu</legend>
        {menuList}
      </fieldset>
    </div>
  );
}


export default FastFood;
