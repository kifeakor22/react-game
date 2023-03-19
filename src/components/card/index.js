
import React from 'react';
import './style.css';

const Card = (props) => {

  const handleClick = (index) => {
    props.onClick(index);
  }

  return (
    
    <section className="container-fluid">
      
      {props.cards.map((card, index) => {
        return (
          <div key={index} onClick={() => handleClick(index)}>
            <div>
              <div className="card col-lg-3">
                <img
                  src={card.images.fixed_width_still.url}
                  className="card-img-top"
                  alt="giphy"
                ></img>
              </div>
            </div>
          </div>
        );
      })}
    </section>
   
  );
};

export default Card;
