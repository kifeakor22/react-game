import React, {useState} from 'react';
import Nav from '../navbar';
import Card from '../card';
import Cards from '../cards';


const Game = (props) => {

    const [selectedCard, setSelectedCard] = useState(null);

    const shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  const handleCardClick = (card) => {
    if (!selectedCard) {
      // if no card has been selected yet, set the current card as the selected card
      setSelectedCard(card);
    } else {
      // if a card has already been selected, compare it with the current card
      if (selectedCard === card) {
        alert('You clicked the same card twice!');
      } else {
        alert('You clicked a different card!');
      }

      // reset the selected card
      setSelectedCard(null);
    }
  };
  return (

    <>
    <Cards onClick={() => handleCardClick(cards)}/>

    </>
  )






}

export default Game

