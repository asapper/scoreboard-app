import * as DialogActionTypes from '../actiontypes/DialogActionTypes';

const initialState = {
  scoreInputDialogVisible: false,
  playerIndex: 0,
  name: '',
  resetGameDialogVisible: false,
};

export default function Dialogs(state=initialState, action) {
  switch(action.type) {
    // Score Input reducers
    case DialogActionTypes.SHOW_SCORE_INPUT_DIALOG:
      return {
        ...state,
        scoreInputDialogVisible: true,
        playerIndex: action.playerIndex,
        name: action.name
      };

    case DialogActionTypes.HIDE_SCORE_INPUT_DIALOG:
      return {
        ...state,
        scoreInputDialogVisible: false,
        playerIndex: 0,
        name: ''
      };

    // Reset game reducers
    case DialogActionTypes.SHOW_RESET_GAME_DIALOG:
      return {
        ...state,
        resetGameDialogVisible: true
      }

    case DialogActionTypes.HIDE_RESET_GAME_DIALOG:
      return {
        ...state,
        resetGameDialogVisible: false
      }

    default:
      return state;
  }
}