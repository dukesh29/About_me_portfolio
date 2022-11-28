import React, {useState} from 'react';
import meatImage from './assets/meat.png';
import cheeseImage from './assets/cheese.png';
import saladImage from './assets/salad.png';
import baconImage from './assets/bacon.png';
import Burger from "./components/Burger/Burger";
import BurgerMakerInner from "./components/BurgerMakerInner/BurgerMakerInner";
import FoodCalc from "./components/FoodCalc/FoodCalc";

interface Ingredient {
  name: string;
  price: number;
  image: string;
  id: number;
}

const ALLINGREDIENTS: Ingredient[] = [
  {name: "Salad", price: 10, image: saladImage, id: 1},
  {name: "Bacon", price: 60, image: baconImage, id: 2},
  {name: "Cheese", price: 50, image: cheeseImage, id: 3},
  {name: "Meat", price: 80, image: meatImage, id: 4},
];

function BurgerMaker() {
  const [ingredients, setIngredients] = useState([
    {name: 'Salad', count: 0, id: 1},
    {name: 'Bacon', count: 0, id: 2},
    {name: 'Cheese', count: 0, id: 3},
    {name: 'Meat', count: 0, id: 4},
  ]);

  const BurgerDraw = ingredients.map(burger => {
    let classname ='';
    if(burger.count === 0) {
      classname = '';
    } else {
      classname = burger.name;
    }
    return <Burger count={burger.count} classname={classname} key={burger.id}/>
  });

  const getCount = (index: number) => {
    const ingredient = ingredients.find(ingredient => ingredient.id === index);
    return ingredient?.count ?? 0;
  };

  const buttonAdd = (id: number) => {
    setIngredients(prev => prev.map(ingredient => {
      return ingredient.id === id ? {
        ...ingredient,
        count: ingredient.count + 1,
      } : ingredient;
    }));
  };

  const buttonDelete = (id: number) => {
    setIngredients(prev => prev.map(ingredient => {
      return ingredient.id === id && ingredient.count !== 0 ?
        {...ingredient, count: ingredient.count - 1,} : ingredient;
    }));
  };

  const finalPrice = ()  =>{
    return ingredients.reduce((acc,item) => {
      let price = ALLINGREDIENTS.find(ingredient => ingredient.id === item.id);
      return acc + ((price?.price?? 0) * item.count);
    },30)
  };

  const BurgerMake = ALLINGREDIENTS.map((item) => {
    return <BurgerMakerInner
      buttonDelete={() => buttonDelete(item.id)}
      buttonAdd={() => buttonAdd(item.id)}
      image={item.image}
      name={item.name}
      count={getCount(item.id)}
      key={item.id}/>
  });

  return (
    <div className="d-flex justify-content-center mt-5 align-items-center gap-3 flex-wrap  mb-3">
      <div className="d-flex flex-column gap-3 border border-danger border-5 rounded-2" style={{padding:"36px"}}>
        <h3 className="text-center">Ingredients</h3>
        {BurgerMake}
      </div>
      <div className="drawBurger-block border border-danger border-5 rounded-2">
        <h3 className="text-center">Burger</h3>
        <div className="Burger">
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
          {BurgerDraw}
          <div className="BreadBottom"></div>
        </div>
        <FoodCalc finalPrice={finalPrice()}/>
      </div>
    </div>
  );
}

export default BurgerMaker;
