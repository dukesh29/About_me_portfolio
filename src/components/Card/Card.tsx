import React from 'react';
import {useNavigate} from "react-router-dom";

interface Props {
  img: string;
  title: string;
  text: string;
  address:string;
}

const Card: React.FC<Props> = ({img, title, text,address}) => {

  const navigate = useNavigate();

  return (
    <div className="card" style={{width: "35rem"}}>
      <img src={require(`../../assets/${img}`)} className="card-img-top" alt={title}/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text flex-grow-1 text-center">{text}</p>
        <button className="btn btn-primary" onClick={() => navigate(`${address}`)}>Open</button>
      </div>
    </div>
  );
};

export default Card;