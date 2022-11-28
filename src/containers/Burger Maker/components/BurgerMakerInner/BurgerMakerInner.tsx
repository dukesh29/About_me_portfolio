import React from 'react';
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import ButtonDelete from "../ButtonDelete/ButtonDelete";

interface Props {
  name:string;
  count:number;
  image:string;
  buttonAdd:React.MouseEventHandler;
  buttonDelete:React.MouseEventHandler;
}

const BurgerMakerInner:React.FC<Props> = ({image,name,count,buttonAdd,buttonDelete}) => {

  return (
    <div className="d-flex justify-content-between gap-4 align-items-center">
      <ButtonAdd AddBtn={buttonAdd} image={image}/>
      <span><strong>{name}</strong></span>
      <span>{count}</span>
      <ButtonDelete onDelete={buttonDelete}/>
    </div>
  );
};

export default BurgerMakerInner;