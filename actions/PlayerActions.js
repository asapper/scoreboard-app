import * as PlayerActionTypes from '../actiontypes/PlayerActionTypes';

// add player
export const addPlayer = (name, score) => {
    return {
        type: PlayerActionTypes.ADD_PLAYER,
        name,
        score
    }
}

// add score
export const addScoreToPlayer = (index, score) => {
    return {
        type: PlayerActionTypes.ADD_SCORE_TO_PLAYER,
        index,
        score
    }
}

// reset game
export const resetGame = () => {
    return {
        type: PlayerActionTypes.RESET_GAME
    }
}