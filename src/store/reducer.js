import { CHANGE_SIZE, CHANGE_SPEED, TOGGLE_CELL } from "./actions"

export const initialGame = {
    currentGrid:[
    ],
    gridSize:30,
    generation:0,
    gameRunning:false,
    gamespeed:500
}

export const gameReducer = (state=initialGame, action) => {
    switch(action.type) {
        case CHANGE_SPEED:
            return{

            }
        case CHANGE_SIZE:
            return {
                
            }
        case TOGGLE_CELL:
            return {...state,
                currentGrid: action.payload
            }
        default:
            return state
    }
}