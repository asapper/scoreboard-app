import * as DialogActionTypes from './actionTypes';

/*
 * Score Input actions
 */
export const showScoreInputDialog = (playerIndex, name) => {
  return {
    type: DialogActionTypes.SHOW_SCORE_INPUT_DIALOG,
    playerIndex,
    name
  }
}

export const hideScoreInputDialog = () => {
  return {
    type: DialogActionTypes.HIDE_SCORE_INPUT_DIALOG
  }
}

/*
 * Reset game confirmation actions
 */
export const showResetGameDialog = () => {
  return {
    type: DialogActionTypes.SHOW_RESET_GAME_DIALOG
  }
}

export const hideResetGameDialog = () => {
  return {
    type: DialogActionTypes.HIDE_RESET_GAME_DIALOG
  }
}

/*
 * New player actions
 */
export const showAddPlayerDialog = () => {
  return {
      type: DialogActionTypes.SHOW_NEW_PLAYER_DIALOG
  }
}

export const hideAddPlayerDialog = () => {
  return {
    type: DialogActionTypes.HIDE_NEW_PLAYER_DIALOG
  }
}

/*
 * Remove player actions
 */
export const showRemovePlayerDialog = (playerIndex, name) => {
  return {
    type: DialogActionTypes.SHOW_REMOVE_PLAYER_DIALOG,
    playerIndex,
    name
  }
}

export const hideRemovePlayerDialog = () => {
  return {
    type: DialogActionTypes.HIDE_REMOVE_PLAYER_DIALOG
  }
}