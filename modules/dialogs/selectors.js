import { NAME } from './constants';

export const getPlayerIndex = state => state[NAME].playerIndex;
export const getName = state => state[NAME].name;
export const getScore = state => state[NAME].currentScore;
export const getRoundScores = state => state[NAME].roundScores;
export const isScoreInputDialogVisible = state => state[NAME].scoreInputDialogVisible;
export const isNewPlayerDialogVisible = state => state[NAME].newPlayerDialogVisible;
export const isResetGameDialogVisible = state => state[NAME].resetGameDialogVisible;
export const isRemovePlayerDialogVisible = state => state[NAME].removePlayerDialogVisible;
export const isPlayerInfoDialogVisible = state => state[NAME].playerInfoDialogVisible;
export const isSettingsMenuDialogVisible = state => state[NAME].settingsMenuDialogVisible;