import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

// player
import Player from './Player';
// dialogs
import PlayerInfo from '../../dialogs/components/PlayerInfo';
import RemovePlayer from '../../dialogs/components/RemovePlayer';
import ScoreInput from '../../dialogs/components/ScoreInput';
// actions
import * as DialogActions from '../../dialogs/actions';
import * as PlayerActions from '../actions';
// selectors
import { getAllPlayers, getHighScore, isCurrentGameStarted } from '../selectors';


const PlayerList = props => {
  const { dispatch, players, isCurrentGameStarted, highScore } = props;

  // dialog actions
  // dialog: score input
  this.showScoreInputDialog = bindActionCreators(DialogActions.showScoreInputDialog, dispatch);
  this.hideScoreInputDialog = bindActionCreators(DialogActions.hideScoreInputDialog, dispatch);
  // dialog: player info
  this.showPlayerInfoDialog = bindActionCreators(DialogActions.showPlayerInfoDialog, dispatch);
  this.hidePlayerInfoDialog = bindActionCreators(DialogActions.hidePlayerInfoDialog, dispatch);
  // dialog: remove player
  this.showRemovePlayerDialog = bindActionCreators(DialogActions.showRemovePlayerDialog, dispatch);
  this.hideRemovePlayerDialog = bindActionCreators(DialogActions.hideRemovePlayerDialog, dispatch);

  // player actions
  this.addScoreToPlayer = bindActionCreators(PlayerActions.addScoreToPlayer, dispatch);
  this.removePlayer = bindActionCreators(PlayerActions.removePlayer, dispatch);

  return (
    <View>
      {/* Player data */}
      {players.map( (player, index) =>
        <Player
          key={index}
          index={index}
          score={player.score}
          name={player.name}
          showScoreInputDialog={this.showScoreInputDialog}
          showRemovePlayerDialog={this.showRemovePlayerDialog}
          showPlayerInfoDialog={this.showPlayerInfoDialog}
          isHighScore={isCurrentGameStarted && highScore === player.score}
        />
      )}
      {/* Player info dialog */}
      <PlayerInfo
        showRemovePlayerDialog={this.showRemovePlayerDialog}
        hidePlayerInfoDialog={this.hidePlayerInfoDialog}
      />
      {/* Score input dialog */}
      <ScoreInput
        addScoreToPlayer={this.addScoreToPlayer}
        hideDialog={this.hideScoreInputDialog}
      />
      {/* Remove player dialog */}
      <RemovePlayer
        removePlayer={this.removePlayer}
        hideDialog={this.hideRemovePlayerDialog}
        hidePlayerInfoDialog={this.hidePlayerInfoDialog}
      />
    </View>
  );
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
}

const mapStateToProps = createStructuredSelector({
  players: getAllPlayers,
  isCurrentGameStarted,
  highScore: getHighScore
});

export default connect(mapStateToProps)(PlayerList);