import { createSelector } from 'reselect';
import { NAME } from './constants';

export const getAllPlayers = state => state[NAME].players;
export const isCurrentGameStarted = state => state[NAME].isCurrentGameStarted;

// get highest score from all players in current game
export const getHighScore = createSelector(
  [getAllPlayers],
  (players) => {
    const scores = players.map(p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  }
);