/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react'
import Controller from './Controller'
import Grid from './Grid'
import { connect } from 'react-redux';
import { createNew } from './componentFunctions/gameCode'



function Game(props) {

    return (
        <div className='gameContainer'>
            <Controller />
            <Grid/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentGrid:state.currentGrid,
        gridSize:state.gridSize   
    }
   }

export default connect(mapStateToProps, {})(Game)