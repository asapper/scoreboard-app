import * as PlayerActionTypes from './actionTypes';
import * as constants from './constants';

const initialState = {
  // keep track of players in current game
  players: [
    {
      name: 'Andy',
      score: 1250,
      isHighScore: false,
      dateAdded: new Date()
    },
  ],
  // keep track of whether current game has started
  isCurrentGameStarted: false,
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
            score: 0,
            isHighScore: false,
            dateAdded: new Date(),
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
        players: updatedPlayerList,
        isCurrentGameStarted: true
      }
    }
    // handle resetting current game
    case PlayerActionTypes.RESET_GAME: {
      return {
        ...state,
        players: []
      }
    }

    // handle removing player
    case PlayerActionTypes.REMOVE_PLAYER: {
      const removePlayerList = [
        ...state.players.slice(0, action.index),
        ...state.players.slice(action.index + 1)
      ];
      return {
        ...state,
        players: removePlayerList
      };
    }

    // handle sorting players
    case PlayerActionTypes.SORT_PLAYERS: {
      const sortedPlayers = state.players.slice();
      switch (action.filter) {
        case constants.FILTER_BY_INITIAL: {
          sortedPlayers.sort((a, b) => a.dateAdded - b.dateAdded);
          break;
        }
        case constants.FILTER_BY_NAME: {
          sortedPlayers.sort((a, b) => a.name.localeCompare(b.name));
          break;
        }
        case constants.FILTER_BY_SCORE: {
          sortedPlayers.sort((a, b) => b.score - a.score);
          break;
        }
      }
      return {
        ...state,
        players: sortedPlayers
      }
    }
    
    default:
      return state;
  }
}