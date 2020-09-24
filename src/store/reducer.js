import { createNew, operateGame } from "../components/componentFunctions/gameCode"
import { TOGGLE_CELL, MAKE_RANDOM, CLEAR_BOARD, TICK_COUNT, START_GAME, STOP_GAME, CHANGE_SPEED, CHANGE_SIZE } from "./actions"

export const initialGame = {
    gridSize:30,
    generation:0,
    gameRunning:false,
    gamespeed:500,
    timer:null
}
initialGame.currentGrid = createNew(initialGame.gridSize)


export const gameReducer = (state=initialGame, action) => {
    switch(action.type) {
        //Following Cases in regards to state of board
        case TOGGLE_CELL:
            let game = state.currentGrid.slice(0)
            let cell = game[action.x][action.y]
            cell.active = !cell.active
            cell.new = !cell.new
            console.log(game)
            return {...state,
                currentGrid: game
            }
        case MAKE_RANDOM:
            //true param requests a random grid from makeGrid method
            return {...state,
                currentGrid: createNew(initialGame.gridSize, true),
                generation: 0
            }
        case CLEAR_BOARD:
            return {...state,
                currentGrid: createNew(initialGame.gridSize),
                generation: 0
            }
        case TICK_COUNT:
            let runGame = state.currentGrid.slice(0)
            return {...state,
                currentGrid: operateGame(runGame),
                generation: state.generation+1
            }
        case CHANGE_SPEED:
            return {...state,
                gamespeed:action.payload
        }
        case CHANGE_SIZE:
            console.log('here i am in the reducer now')
            return {...state,
                currentGrid:createNew(action.payload)
            }
        //End of Board States
        //Beginning of Play
        case START_GAME:
            return {...state,
              timer: action.timer,
              gameRunning: true
            }
        case STOP_GAME:
            return {...state,
              timer: null,
              gameRunning: false
            }

        default:
            return state;
    }
}