import React from 'react'

// This will put the header onto the screen for the user to see
const Header= () => {

    return (
    <header className='header'>
        <h1 className='title'>Pokemon Clicky Game!</h1>
        <p className='introduction'>
          Click any image to begin your game, but don't click the same picture twice!
        </p>
    </header>
    )

}

export default Header
