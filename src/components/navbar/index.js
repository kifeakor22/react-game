import React, {useState} from 'react'

import './style.css'

const Nav = () => {
    const [score, setScore] = useState(0)
    const [topScore, setTopScore] = useState(0)
    const [userGuess, setUserGuess] = useState('Click an image to begin!')

    return (
        <>
        <div className='navbar'>
            <div className='container-fluid'>
                <div className='nav-brand'>Clicky Game</div>
                <div>{userGuess}</div>
                <div>Score:{score} | Top Score:{topScore}</div>
            </div>
        </div>
        </>
    )
}

export default Nav 