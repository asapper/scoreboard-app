import * as ScoreInputActionTypes from '../actiontypes/ScoreInputActionTypes';

const initialState = {
    dialogVisible: false,
    playerIndex: 0,
    score: 0,
    name: '',
};

export default function ScoreInput(state=initialState, action) {
    switch(action.type) {
        case ScoreInputActionTypes.SHOW_DIALOG:
            return {
                ...state,
                dialogVisible: true,
                playerIndex: action.playerIndex,
                name: action.name
            };
        case ScoreInputActionTypes.HIDE_DIALOG:
            return {
                ...state,
                dialogVisible: false,
                playerIndex: 0,
                name: ''
            };
        default:
            return state;
    }
}