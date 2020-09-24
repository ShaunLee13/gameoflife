export const CHANGE_SPEED = 'CHANGE_SPEED'
export const CHANGE_SIZE = 'CHANGE_SIZE'
export const TOGGLE_CELL = 'TOGGLE_CELL'

export const changeSpeed = speed => {
    return { type : CHANGE_SPEED, payload: speed}
}

export const changeSize = size => {
    return { type : CHANGE_SIZE, payload: size}
}

export const toggleCell = newGrid => {
    return { type : TOGGLE_CELL, payload: newGrid}
}