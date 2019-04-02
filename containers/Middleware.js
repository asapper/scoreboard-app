import * as PlayerActionTypes from '../modules/players/actionTypes';
import * as DialogActions from '../modules/dialogs/actions';
import { NAME } from '../modules/players/constants';

export const customMiddleware = store => next => action => {
  // catch adding new player action
  if (action.type === PlayerActionTypes.ADD_PLAYER) {
    const players = store.getState()[NAME].players;
    // verify that player to insert is not repeted
    let repeatedPlayer = players.find( player => player.name === action.name);
    // if valid, add player and show success message
    if (!repeatedPlayer) {
      // add player
      next(action);
      // show success message
      return store.dispatch(DialogActions.showMessagesSnackbar(action.name + ' was added to the game!'));
    } else {
      // if repeated, show error
      return store.dispatch(DialogActions.showMessagesSnackbar('ERROR: player with name ' + action.name + ' already exists.'));
    }
  }

  // catch removing a player
  if (action.type === PlayerActionTypes.REMOVE_PLAYER) {
    // remove player
    next(action);
    // display info message
    return store.dispatch(DialogActions.showMessagesSnackbar('Removed ' + action.name + ' from this game.'));
  }
  
  // catch game reset
  if (action.type === PlayerActionTypes.RESET_GAME) {
    // reset game
    next(action);
    // display info message
    return store.dispatch(DialogActions.showMessagesSnackbar('Game was reset successfully!'));
  }

  // continue as regular
  next(action);
}