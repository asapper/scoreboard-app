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
  // player info dialog
  playerInfoDialogVisible: false,
  currentScore: 0,
  // sort menu dialog
  sortMenuDialogVisible: false,
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

    // Player info reducers
    case DialogActionTypes.SHOW_PLAYER_INFO_DIALOG: {
      return {
        ...state,
        playerInfoDialogVisible: true,
        playerIndex: action.playerIndex,
        name: action.name,
        currentScore: action.score
      }
    }

    case DialogActionTypes.HIDE_PLAYER_INFO_DIALOG: {
      return {
        ...state,
        playerInfoDialogVisible: false
      }
    }

    // Sort Menu reducers
    case DialogActionTypes.SHOW_SORT_MENU_DIALOG: {
      return {
        ...state,
        sortMenuDialogVisible: true,
      }
    }

    case DialogActionTypes.HIDE_SORT_MENU_DIALOG: {
      return {
        ...state,
        sortMenuDialogVisible: false,
      }
    }

    default:
      return state;
  }
}