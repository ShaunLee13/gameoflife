/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

function Cell(props) {
    //Size is determined by dividing 100 by the total amount of cells in the gridspace horizontally and vertically. Ultimately this will give us a percentage between 0-4% to help divide up the grid
    const size = 100/props.gridSize

    return (
        <div
            className={props.active ? 'cell active': 'cell'}
            onClick={props.handleClick}
            style={{width: `${size}%`, height: `${size}%`}}
        />


    )
}

export default Cell