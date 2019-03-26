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

/**
 * Player info actions
 */
export const showPlayerInfoDialog = (playerIndex, name, score, roundScores) => {
  return {
    type: DialogActionTypes.SHOW_PLAYER_INFO_DIALOG,
    playerIndex,
    name,
    score,
    roundScores
  }
}

export const hidePlayerInfoDialog = () => {
  return {
    type: DialogActionTypes.HIDE_PLAYER_INFO_DIALOG
  }
}

/**
 * Settings menu actions
 */
export const showSettingsMenuDialog = () => {
  return {
    type: DialogActionTypes.SHOW_SETTINGS_MENU_DIALOG
  }
}

export const hideSettingsMenuDialog = () => {
  return {
    type: DialogActionTypes.HIDE_SETTINGS_MENU_DIALOG
  }
}

/**
 * Messages snackbar actions
 */
export const showMessagesSnackbar = message => {
  return {
    type: DialogActionTypes.SHOW_MESSAGE_SNACKBAR,
    message
  }
}

export const hideMessagesSnackbar = () => {
  return {
    type: DialogActionTypes.HIDE_MESSAGE_SNACKBAR
  }
}