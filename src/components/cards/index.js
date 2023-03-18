import React, {useState, useEffect} from 'react'
import Card from '../card'
import './style.css'



const Cards = () => {
    const [cards, setCards] = useState([])

    const fetchCard = async () => {
        const data = await fetch("https://api.giphy.com/v1/stickers/packs/3138/stickers?api_key=xdNShamUbUPVNMXwcfGJOto5R53wy0es&limit=12&offset=0")
        const response = await data.json()
        console.log(response)
        setCards(response.data)
    }  

    useEffect(() => {
        fetchCard()
    }, [])
    return (
        <>
          <section>
            <div className='container'>
                <div className='row'>
                    <Card cards={cards}/>   
                </div>
            </div>
            
        </section>
        </>
    )
}

export default Cards