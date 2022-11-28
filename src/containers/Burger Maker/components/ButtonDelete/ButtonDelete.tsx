import React from 'react';


interface BtnDel {
  onDelete:React.MouseEventHandler;
}

const ButtonDelete:React.FC<BtnDel> = ({onDelete}) => {
  return (
    <button type="button" className="btn btn-danger" onClick={onDelete}>Delete</button>
  );
};

export default ButtonDelete;