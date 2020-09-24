import React from 'react'
import { connect } from 'react-redux';

import Cell from './Cell'

function Grid(props) {
    return (
        <div className='gridContainer'>
            <div className='grid'>
                {props.currentGrid.map(forRow => {
                    return forRow.map(cell => {
                        return (
                        <Cell
                            key = {`${cell.xVal}, ${cell.yVal}`}
                            gridSize = {props.gridSize}
                            cell = {cell}
                        />
                        )
                    })
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentGrid:state.currentGrid,
        gridSize:state.gridSize   
    }
   }

export default connect(mapStateToProps, {})(Grid)