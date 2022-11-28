import React from 'react';
interface imageURL {
  image:string;
  AddBtn:React.MouseEventHandler;
}

const ButtonAdd:React.FC<imageURL> = ({image,AddBtn}) => {
  return (
    <button type="button" onClick={AddBtn}>
      <img src={image} alt="pic" width="45px" height="45px"/>
    </button>
  );
};

export default ButtonAdd;