import * as ScoreInputDialogActionTypes from '../actiontypes/scoreInputDialogActionTypes';

export const showDialog = (playerIndex, playerName) => {
    return {
        type: ScoreInputDialogActionTypes.SHOW_DIALOG,
        playerIndex,
        playerName
    }
}

export const hideDialog = () => {
    return {
        type: ScoreInputDialogActionTypes.HIDE_DIALOG
    }
}