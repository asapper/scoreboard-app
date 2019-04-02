import * as PlayerActionTypes from './actionTypes';

// add player
export const addPlayer = name => {
  return {
    type: PlayerActionTypes.ADD_PLAYER,
    name
  }
}

// add score
export const addScoreToPlayer = (index, score) => {
  return {
    type: PlayerActionTypes.ADD_SCORE_TO_PLAYER,
    index,
    score
  }
}

// reset game
export const resetGame = () => {
  return {
    type: PlayerActionTypes.RESET_GAME
  }
}

// remove player
export const removePlayer = (index, name) => {
  return {
    type: PlayerActionTypes.REMOVE_PLAYER,
    index,
    name
  }
}

// sort players
export const sortPlayers = filter => {
  return {
    type: PlayerActionTypes.SORT_PLAYERS,
    filter
  }
}