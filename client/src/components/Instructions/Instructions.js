import React from 'react'
import './Instructions.css'

function Instructions (props) {

    return(
        
        <React.Fragment>
        <div className= 'backgroundPic'></div>
        <div className='container content'>
            <h1>Pokemon Clicky Game!</h1>
            <h2>{message || 'Click on an image to earn points, but don\'t click on the same picture more than once!'}</h2>
        </div>
        </React.Fragment>

    )

}

export default Instructions