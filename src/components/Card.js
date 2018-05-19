import React from 'react';

const Card = (props) => {
  const { id, name } = props;
  return (
    <div className ="bg-white dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className = "br3" src={"https://randomuser.me/api/portraits/men/" + id + ".jpg"} alt ='robot'/>
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Card;
