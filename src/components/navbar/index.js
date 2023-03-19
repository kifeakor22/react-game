import React from 'react'

import './style.css'

const Nav = () => {
   

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