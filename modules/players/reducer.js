import * as PlayerActionTypes from './actionTypes';
import * as constants from './constants';

const initialState = {
  // keep track of players in current game
  players: [
    {
      name: 'Andy',
      totalScore: 750,
      roundScores: [
        {
          round: 1,
          score: 500
        },
        {
          round: 2,
          score: 250
        },
      ],
      isHighScore: false,
      dateAdded: new Date()
    },
  ],
  // keep track of current sort order for players array
  sortOrder: constants.FILTER_BY_INITIAL,
  // keep track of whether current game has started
  isCurrentGameStarted: false,
}

/**
 * Sort given players array based on sort order passed in.
 */
sortPlayers = (players, sortOrder) => {
  switch (sortOrder) {
    case constants.FILTER_BY_INITIAL: {
      players.sort((a, b) => a.dateAdded - b.dateAdded);
      break;
    }
    case constants.FILTER_BY_NAME: {
      players.sort((a, b) => a.name.localeCompare(b.name));
      break;
    }
    case constants.FILTER_BY_SCORE: {
      players.sort((a, b) => b.totalScore - a.totalScore);
      break;
    }
  }
}

/**
 * Player reducer.
 */
export default function Player(state=initialState, action) {
  switch(action.type) {
    // handle adding new player
    case PlayerActionTypes.ADD_PLAYER: {
      // add new player and sort final array
      let updatedPlayersList = [
        // store old players
        ...state.players,
        // add new player
        {
          name: action.name,
          totalScore: 0,
          isHighScore: false,
          dateAdded: new Date(),
          roundScores: []
        }
      ];
      // sort list
      sortPlayers(updatedPlayersList, state.sortOrder);

      return {
        ...state,
        players: updatedPlayersList
      };
    }

    // handle updating a player's score
    case PlayerActionTypes.ADD_SCORE_TO_PLAYER: {
      const updatedPlayerList = state.players.map((player, index) => {
        if (index === action.index) {
          return {
            ...player,
            totalScore: player.totalScore + parseInt(action.score),
            roundScores: [
              ...player.roundScores,
              {
                round: player.roundScores.length+1,
                score: parseInt(action.score),
              }
            ]
          }
        }
        return player;
      });
      // sort list
      sortPlayers(updatedPlayerList, state.sortOrder);
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
      sortPlayers(sortedPlayers, action.filter);
      
      return {
        ...state,
        players: sortedPlayers,
        sortOrder: action.filter
      }
    }
    
    default:
      return state;
  }
}