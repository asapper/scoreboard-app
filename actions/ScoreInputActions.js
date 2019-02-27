import * as ScoreInputActionTypes from '../actiontypes/ScoreInputActionTypes';

export const showDialog = (playerIndex, name) => {
    return {
        type: ScoreInputActionTypes.SHOW_DIALOG,
        playerIndex,
        name
    }
}

export const hideDialog = () => {
    return {
        type: ScoreInputActionTypes.HIDE_DIALOG
    }
}