/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import { connect } from 'react-redux';

import { Grid, Slider, IconButton, Typography } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import {makeRandom,tick_count,startPlaying,stopPlaying,clear, changeSpeed, changeSize} from '../store/actions'

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

    //This function controls the ability to adjust speed. Taking the change event and the new value, it sets the in place speed to such and then changes the speed in the store.
    const speedSlider = (e, newVal) => {
        setSpeed(newVal)
        props.changeSpeed(newVal)
    }

    const sizeSlider = (e, newVal) => {
        setSize(newVal)
    }

    const submitSize = e => {
        props.changeSize(size)
    }

    //check if the game is running. if it is, stop it. otherwise, start it, using the speed determined by gamespeed.
    const togglePlay = () => {
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
            <p className='details'>Current Generation: {props.generation}</p>
            <p className='details'>Current Board Size: {props.gridSize}x{props.gridSize}</p>
            <p className='details'>Speed (in ms): {props.gamespeed}</p>
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
                            value={speed}
                            onChange={speedSlider}
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
                        value={size}
                        aria-labelledby="discrete-slider-restrict"
                        step={null}
                        valueLabelDisplay="auto"
                        marks={sizes}
                        onChange={sizeSlider}
                    />
                </Grid>
            </div>
            <button className='submit' onClick={submitSize}>Apply Size Changes</button>
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
        startPlaying: (timer) => dispatch(startPlaying(timer)),
        stopPlaying: () => dispatch(stopPlaying()),
        clear: () => dispatch(clear()),
        changeSpeed: (speed) => dispatch(changeSpeed(speed)),
        changeSize: (size) => dispatch(changeSize(size))
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Controller)