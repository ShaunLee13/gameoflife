export const TOGGLE_CELL = 'TOGGLE_CELL'
export const MAKE_RANDOM = 'MAKE_RANDOM'
export const TICK_COUNT = 'TICK_COUNT'
export const START_GAME = 'START_GAME'
export const STOP_GAME = 'STOP_GAME'
export const CLEAR_BOARD = 'CLEAR_BOARD'
export const CHANGE_SPEED = 'CHANGE_SPEED'
export const CHANGE_SIZE = 'CHANGE_SIZE'

export function toggleCell(x,y) {
    return { type: TOGGLE_CELL, x,y };
  }
  
  export function makeRandom() {
    return { type: MAKE_RANDOM };
  }
  
  export function tick_count() {
    return { type: TICK_COUNT };
  }
  
  export function startPlaying(timer) {
    return { type: START_GAME, timer };
  }
  
  export function stopPlaying(timer) {
    return { type: STOP_GAME, timer };
  }
  
  export function clear() {
    return { type: CLEAR_BOARD };
  }

  export function changeSpeed(speed) {
    return { type: CHANGE_SPEED, payload: speed}
  }

  export function changeSize(size) {
    console.log('in the action, sending', size)
    return { type: CHANGE_SIZE, payload: size }
  }