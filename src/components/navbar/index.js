import React from 'react'

import './style.css'

const Nav = (props) => {
    return (
        <>
        <div className='navbar'>
            <div className='container-fluid'>
                <div className='nav-brand'>Clicky Game</div>
                <div className='shake'>{props.userGuess}</div>
                <div>Score:{props.score} | Top Score:{props.topScore}</div>
            </div>
        </div>
        </>
    )
}

export default Nav 