import React, { useState } from 'react'
import { Grid, Slider, IconButton, Typography } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

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

    return (
        <div className='controlContainer'>
            <h4>Current Generation: 0</h4>
            <h4>Speed (in ms): 0</h4>
            <div className='buttonContainer'>
                <IconButton className='controlButton'>
                    <PlayArrowIcon/>
                </IconButton>
                <IconButton className='controlButton'>
                    <PauseIcon/>
                </IconButton>
                <IconButton className='controlButton'>
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
        </div>
    )
}

export default Controller