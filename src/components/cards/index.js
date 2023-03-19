import React, {useState, useEffect} from 'react'
import Card from '../card'
import Nav from '../navbar'
import Herogrid from '../herogrid'
import './style.css'



const Cards = () => {
    const [cards, setCards] = useState([])  
    const [score, setScore] = useState(0)
    const [topScore, setTopScore] = useState(0)
    const [userGuess, setUserGuess] = useState('Click an image to begin!')
    const shuffleData = () => {
        setCards(prevCards => {
            const shuffledCards = [...prevCards];
            let i = shuffledCards.length - 1;
            while (i > 0) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
                i--;
            }
            return shuffledCards;
        });
    };

      
    const fetchCard = async () => {
        const data = await fetch("https://api.giphy.com/v1/stickers/packs/3138/stickers?api_key=xdNShamUbUPVNMXwcfGJOto5R53wy0es&limit=12&offset=0")
        const response = await data.json()
        console.log(response)
        setCards(response.data)
        
    }  
    

    useEffect(() => {
        fetchCard()    
    },[])
   
    return (
        <>
        <Nav score={score} topScore={topScore} userGuess={userGuess}/>
        <Herogrid/>
          <section>
            <div className='container' onClick={()=>{shuffleData()
            setScore (score + 1)
            setTopScore (score)
            setUserGuess ("correct")}}>
                <div className='row'>
                    <Card cards={cards} /> 
                </div>
            </div>
            
        </section>
        </>
    )
}

export default Cards