import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {toggleCell} from '../store/actions'

function Cell(props) {
    //This code determines the conditions of our cells. our color and useEffect are determined by the status of the cell's lifecycle. Size is determined by dividing 100 by the total amount of cells in the gridspace. Ultimately this will give us a percentage between 0-4% to help divide up the grid
    const [color, setColor] = useState('white')
    const size = 100/props.gridSize
    useEffect(() => {
        if (props.cell.active) {
            setColor('black')
        } else {
            setColor('white')
        }
    }, props.cell.active)
//End of Cell conditions

//The Cell click handler starts by making a copy of the current grid. It then sets the life value at the current x,y coords as the opposite of what it is currently. Then, a call to toggleCell is made, and we are going to pass in our copy which will overwrite the old array.
    const toggleClick = e => {
        const change = props.currentGrid
        change[props.cell.xVal][props.cell.yVal].active = !props.cell.active
        toggleCell(change)
    }

    return (
            <div className='cell'
                onClick={toggleClick}
                style={{background: `${color}`, width: `${size}%`, height: `${size}%`}}
            />

    )
}

const mapStateToProps = state => {
    return {
        currentGrid:state.currentGrid   
    }
   }

export default connect(mapStateToProps, {toggleCell})(Cell)