// model for Dialogs
export type State = {
  // new player dialog
  newPlayerDialogVisible?: boolean;
  // score input dialog
  scoreInputDialogVisible?: boolean;
  playerIndex?: number;
  name?: string;
  // reset game dialog
  resetGameDialogVisible?: boolean;
  // remove player dialog
  removePlayerDialogVisible?: boolean;
};