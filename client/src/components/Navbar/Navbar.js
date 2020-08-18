import React from 'react'
import './Navbar.css'

function Navbar (props) {

    return(

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <a className="a-sizing ml-auto navbar-brand col-12 col-lg-2 mt-lg-0" href="/">
                <strong>Pokemon Clicky Game!</strong>
            </a>

            <div className="title-text navbar-right col-12 col-lg-6 mt-2 mt-lg-0">
                <strong>Click any image to begin your game, but don't click the same picture twice!</strong>
            </div>

            <div className="scores col-12 col-lg-4 mt-1 mt-lg-0">
                <strong>Score: {props.score} | Top Score: {props.highScore}</strong>
            </div>

        </nav>

    )

}

export default Navbar