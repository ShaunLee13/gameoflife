import React from 'react'
import { connect } from 'react-redux';
import {toggleCell} from '../store/actions'

import Cell from './Cell'

function Grid(props) {
    return (
        <div className='gridContainer'>
            <div className='grid'>
                {props.currentGrid.map((forRow,x) => {  return forRow.map((cell,y) =>
                    <Cell
                        key = {y}
                        gridSize = {props.gridSize}
                        cell = {cell}
                        active = {cell.active}
                        new = {cell.new}
                        handleClick= {() => props.toggleCell(x,y)}
                    />)}
                )}
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

const mapDispatchToProps = (dispatch) => {
return { toggleCell: (x,y) => dispatch(toggleCell(x,y)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)