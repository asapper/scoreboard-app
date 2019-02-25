import * as ScoreInputDialogActionTypes from '../actiontypes/scoreInputDialogActionTypes';

const initialState = [];

export default function ScoreInputDialogReducer(state=initialState, action) {
    switch(action.type) {
        case ScoreInputDialogActionTypes.SHOW_DIALOG:
            return [
                ...state,
                scoreInputDialogVisible = true,
                scoreInputDialogPlayerIndex = action.playerIndex,
                scoreInputDialogPlayerScore = state.players[action.playerIndex].score,
                scoreInputDialogPlayerName = action.playerName
            ];
        case ScoreInputDialogActionTypes.HIDE_DIALOG:
            return [
                ...state,
                scoreInputDialogVisible = false,
                scoreInputDialogPlayerIndex = 0,
                scoreInputDialogPlayerScore = 0,
                scoreInputDialogPlayerName = ''
            ];
        default:
            return state;
    }
}