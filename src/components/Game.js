import React from 'react'
import Controller from './Controller'
import Grid from './Grid'

function Game(props) {
    return (
        <div className='gameContainer'>
            <Controller />
            <Grid/>
        </div>
    )
}

export default Game