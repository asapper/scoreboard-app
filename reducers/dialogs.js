import * as DialogActionTypes from '../actiontypes/DialogActionTypes';

const initialState = {
  // new player dialog
  newPlayerDialogVisible: false,
  // score input dialog
  scoreInputDialogVisible: false,
  playerIndex: 0,
  name: '',
  // reset game dialog
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
    
    
    // handle showing new player dialog
    case DialogActionTypes.SHOW_NEW_PLAYER_DIALOG: {
      return {
        ...state,
        newPlayerDialogVisible: true
      };
    }
    // handle hiding new player dialog
    case DialogActionTypes.HIDE_NEW_PLAYER_DIALOG: {
      return {
        ...state,
        newPlayerDialogVisible: false
      };
    }

    default:
      return state;
  }
}