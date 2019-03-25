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
  roundScores: [],
  // sort menu dialog
  settingsMenuDialogVisible: false,
  // messages snackbar
  messagesSnackbarMsg: '',
  messagesSnackbarVisible: false,
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
        currentScore: action.score,
        roundScores: action.roundScores
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
        settingsMenuDialogVisible: true,
      }
    }

    case DialogActionTypes.HIDE_SORT_MENU_DIALOG: {
      return {
        ...state,
        settingsMenuDialogVisible: false,
      }
    }

    // Message snackbar reducers
    case DialogActionTypes.SHOW_MESSAGE_SNACKBAR: {
      return {
        ...state,
        messagesSnackbarVisible: true,
        messagesSnackbarMsg: action.message
      }
    }

    case DialogActionTypes.HIDE_MESSAGE_SNACKBAR: {
      return {
        ...state,
        messagesSnackbarVisible: false,
      }
    }

    default:
      return state;
  }
}