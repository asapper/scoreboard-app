import * as PlayerActionTypes from '../actiontypes/PlayerActionTypes';

const initialState = {
    players: [],
}

export default function Player(state=initialState, action) {
    switch(action.type) {
        // handle adding new player
        case PlayerActionTypes.ADD_PLAYER: {
            return {
                ...state,
                players: [
                    // store old players
                    ...state.players,
                    // add new player
                    {
                        name: action.name,
                        score: parseInt(action.score)
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