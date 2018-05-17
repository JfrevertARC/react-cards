import React from 'react';

const Card = () => {
  this.image = Math.floor(Math.random() * 10)
  return (
    <div>
      <img src={"https://randomuser.me/api/portraits/men/" + this.image + ".jpg"} alt ='robot'/>
      <div>
        <h2>Hello from h2</h2>
        <p>Hello from p tag</p>
      </div>
    </div>
  );
};

export default Card;
