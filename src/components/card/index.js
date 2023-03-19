import React from 'react';
import './style.css';


const Card = (props) => {

   
  return (
    
    <section className="container-fluid">
      
      {props.cards.map((card, index) => {
        return (
            <div key={index}>
            <div>
              <div
                className="card col-lg-3" >
                <img
                  src={card.images.fixed_width_still.url}
                  className="card-img-top"
                  alt="giphy"
                ></img>
                {card.title}
              </div>
            </div>
          </div>
        );
      })}
    </section>
   
  );
};

export default Card;
