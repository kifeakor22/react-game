
import React from 'react';
import './style.css';

const Card = (props) => {

  const handleClick = (id) => {
    props.onClick(id);
  }

  return (
    
    <section className="container-fluid">
      
      {props.cards.map((card) => {
        return (
          <div key={card.id} onClick={() => handleClick(card.id)}>
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
