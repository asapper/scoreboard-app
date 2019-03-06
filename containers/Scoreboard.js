import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// core components
import Header from '../modules/core/components/Header';
import FloatingActionButton from '../modules/core/components/FloatingActionButton';
// player list component
import PlayerList from '../modules/players/components/PlayerList';
// dialog components
import AddPlayerForm from '../modules/dialogs/components/AddPlayerForm';
import ResetGame from '../modules/dialogs/components/ResetGame';
import ScoreInput from '../modules/dialogs/components/ScoreInput';
import RemovePlayer from '../modules/dialogs/components/RemovePlayer';

// actions
import * as DialogActions from '../modules/dialogs/actions';
import * as PlayerActions from '../modules/players/actions';


class Scoreboard extends Component {
  
  render() {
    const { dispatch, players } = this.props;
    // dialog actions
    // dialog: score input
    this.showScoreInputDialog = bindActionCreators(DialogActions.showScoreInputDialog, dispatch);
    this.hideScoreInputDialog = bindActionCreators(DialogActions.hideScoreInputDialog, dispatch);
    // dialog: reset game
    this.showResetGameDialog = bindActionCreators(DialogActions.showResetGameDialog, dispatch);
    this.hideResetGameDialog = bindActionCreators(DialogActions.hideResetGameDialog, dispatch);
    // dialog: new player
    this.showNewPlayerDialog = bindActionCreators(DialogActions.showAddPlayerDialog, dispatch);
    this.hideNewPlayerDialog = bindActionCreators(DialogActions.hideAddPlayerDialog, dispatch);
    // dialog: remove player
    this.showRemovePlayerDialog = bindActionCreators(DialogActions.showRemovePlayerDialog, dispatch);
    this.hideRemovePlayerDialog = bindActionCreators(DialogActions.hideRemovePlayerDialog, dispatch);

    // player actions
    this.addNewPlayer = bindActionCreators(PlayerActions.addPlayer, dispatch);
    this.addScoreToPlayer = bindActionCreators(PlayerActions.addScoreToPlayer, dispatch);
    this.removePlayer = bindActionCreators(PlayerActions.removePlayer, dispatch);
    this.resetGame = bindActionCreators(PlayerActions.resetGame, dispatch);

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {/* Appbar header */}
        <Header />
        {/* Player list */}
        <PlayerList showScoreInputDialog={this.showScoreInputDialog} showRemovePlayerDialog={this.showRemovePlayerDialog} />
        {/* Floating action button: new player and reset game dialogs */}
        <FloatingActionButton showNewPlayerDialog={this.showNewPlayerDialog} showResetGameDialog={this.showResetGameDialog} />
        {/* New Player dialog */}
        <AddPlayerForm addNewPlayer={this.addNewPlayer} hideDialog={this.hideNewPlayerDialog} />
        {/* Score input dialog */}
        <ScoreInput addScoreToPlayer={this.addScoreToPlayer} hideDialog={this.hideScoreInputDialog} />
        {/* Confirm game reset dialog */}
        <ResetGame resetGame={this.resetGame} hideDialog={this.hideResetGameDialog} />
        {/* Remove player dialog */}
        <RemovePlayer removePlayer={this.removePlayer} hideDialog={this.hideRemovePlayerDialog} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#efefef',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  formInput: {
    marginTop: 10
  }
});

export default connect(null)(Scoreboard);