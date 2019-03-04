import * as DialogActionTypes from './actionTypes';

const initialState = {
  // score input dialog
  scoreInputDialogVisible: false,
  playerIndex: 0,
  name: '',
  // new player dialog
  newPlayerDialogVisible: false,
  // reset game dialog
  resetGameDialogVisible: false,
  // remove player dialog
  removePlayerDialogVisible: false,
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
    
    
    // New player reducers
    case DialogActionTypes.SHOW_NEW_PLAYER_DIALOG: {
      return {
        ...state,
        newPlayerDialogVisible: true
      };
    }
    
    case DialogActionTypes.HIDE_NEW_PLAYER_DIALOG: {
      return {
        ...state,
        newPlayerDialogVisible: false
      };
    }

    // Remove player reducers
    case DialogActionTypes.SHOW_REMOVE_PLAYER_DIALOG: {
      return {
        ...state,
        removePlayerDialogVisible: true,
        playerIndex: action.playerIndex,
        name: action.name
      }
    }

    case DialogActionTypes.HIDE_REMOVE_PLAYER_DIALOG: {
      return {
        ...state,
        removePlayerDialogVisible: false
      }
    }

    default:
      return state;
  }
}