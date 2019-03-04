import { NAME } from './constants';

export const getPlayerIndex = state => state[NAME].playerIndex;
export const getName = state => state[NAME].name;
export const isScoreInputDialogVisible = state => state[NAME].scoreInputDialogVisible;
export const isNewPlayerDialogVisible = state => state[NAME].newPlayerDialogVisible;
export const isResetGameDialogVisible = state => state[NAME].resetGameDialogVisible;
export const isRemovePlayerDialogVisible = state => state[NAME].removePlayerDialogVisible;
