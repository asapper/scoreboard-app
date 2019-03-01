import * as PlayerActionTypes from '../actiontypes/PlayerActionTypes';

const initialState = {
    players: [{
        name: 'Andy',
        score: 1250
    }],
    newPlayerDialogVisible: false
}

export default function Player(state=initialState, action) {
    switch(action.type) {
        // handle showing new player dialog
        case PlayerActionTypes.SHOW_NEW_PLAYER_FORM: {
            return {
                ...state,
                newPlayerDialogVisible: true
            };
        }
        // handle hiding new player dialog
        case PlayerActionTypes.HIDE_NEW_PLAYER_FORM: {
            return {
                ...state,
                newPlayerDialogVisible: false
            };
        }
        // handle adding new player
        case PlayerActionTypes.ADD_PLAYER: {
            return {
                ...state,
                // hide dialog
                newPlayerDialogVisible: false,
                players: [
                    // store old players
                    ...state.players,
                    // add new player
                    {
                        name: action.name,
                        score: action.score
                    }
                ]
            };
        }
        // handle updating a player's score
        case PlayerActionTypes.ADD_SCORE_TO_PLAYER: {
            const updatedPlayerList = state.players.map((player, index) => {
                if (index === action.index) {
                    return {
                        ...player,
                        score: player.score + parseInt(action.score)
                    }
                }
                return player;
            });
            return {
                ...state,
                players: updatedPlayerList
            }
        }
        // handle resetting current game
        case PlayerActionTypes.RESET_GAME: {
            return {
                ...state,
                players: []
            }
        }
        
        default:
            return state;
    }
}