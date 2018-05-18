import React from 'react';

const Card = (props) => {
  // this.image = Math.floor(Math.random() * 10)
  const { id, name, fact } = props;
  return (
    <div className ="bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className = "br3" src={"https://randomuser.me/api/portraits/men/" + id + ".jpg"} alt ='robot'/>
      <div>
        <h2>{name}</h2>
        <p>{fact}</p>
      </div>
    </div>
  );
};

export default Card;
