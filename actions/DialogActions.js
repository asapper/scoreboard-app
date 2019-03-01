import * as DialogActionTypes from '../actiontypes/DialogActionTypes';

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
};

export const hideResetGameDialog = () => {
  return {
    type: DialogActionTypes.HIDE_RESET_GAME_DIALOG
  }
};