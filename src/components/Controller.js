/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import { connect } from 'react-redux';

import { Grid, Slider, IconButton, Typography } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import {makeRandom,tick_count,startPlaying,stopPlaying,clear} from '../store/actions'

const sizes = [
    {
        value:30,
        label:'30x30'
    },
    {
        value:70,
        label:'70x70'
    },
    {
        value:125,
        label:'125x125'
    },
    {
        value:300,
        label:'300x300'
    },
]

function Controller(props) {
    const [speed, setSpeed] = useState(500)
    const [size, setSize] = useState(30)

    //check if the game is running. if it is, stop it. otherwise, start it, using the speed determined by gamespeed.
    const togglePlay = () => {
        console.log('im here i just dont want to work')
        if (props.gameRunning) {
          clearInterval(props.timer);
          props.stopPlaying();
        } else {
          let interval = setInterval(props.tick_count,props.gamespeed);
          props.startPlaying(interval);
        }
    }
    //Use this function to reset back to the original table
    const clear = () => {
        if (props.gameRunning) {
          clearInterval(props.timer);
          props.stopPlaying();
        }
          props.clear();
      }

    return (
        <div className='controlContainer'>
            <h4>Current Generation: {props.generation}</h4>
            <h4>Speed (in ms): {props.gamespeed}</h4>
            <div className='buttonContainer'>
                <IconButton 
                    className='controlButton' 
                    onClick={() => togglePlay()}>
                    <PlayArrowIcon/>
                </IconButton>
                <IconButton 
                    className='controlButton' 
                    onClick={() => togglePlay()}>
                    <PauseIcon/>
                </IconButton>
                <IconButton 
                    className='controlButton'
                    onClick={() => clear()}>
                    <RotateLeftIcon/>
                </IconButton>
            </div>
            <div className='sliderContainer'>
                <Typography id='continuous-slider'>Speed Control</Typography>
                <Grid container spacing={2} className='speedSlider'>
                    <Grid item>
                        <p>Faster</p>
                    </Grid>
                    <Grid item xs>
                        <Slider 
                            aria-labelledby="continuous-slider" 
                            min={10}
                            max={1000}
                            defaultValue={500}
                        />
                    </Grid>
                    <Grid item>
                        <p>Slower</p>
                    </Grid>
                </Grid>
            </div>
            <div className='sliderContainer'>
                <Typography id="discrete-slider-restrict" gutterBottom>Grid Sizes</Typography>
                <Grid container spacing={2} className='sizeSlider'>
                    <Slider
                        max={300}
                        min={30}
                        defaultValue={30}
                        aria-labelledby="discrete-slider-restrict"
                        step={null}
                        valueLabelDisplay="auto"
                        marks={sizes}
                    />
                </Grid>
            </div>
            <button className='submit'>Apply Size Changes</button>
            <button className='submit' onClick={props.makeRandom}>Randomize me!</button>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        generation:state.generation,
        gridSize:state.gridSize,
        gamespeed:state.gamespeed,
        gameRunning:state.gameRunning,
        timer:state.timer   
    }
   }
const mapDispatchToProps = (dispatch) => {
    return {
        makeRandom: () => dispatch(makeRandom()),
        tick_count: () => dispatch(tick_count()),
        startPlaying: (timerId) => dispatch(startPlaying(timerId)),
        stopPlaying: () => dispatch(stopPlaying()),
        clear: () => dispatch(clear())
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Controller)