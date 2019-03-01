import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FAB, List, Portal } from 'react-native-paper';

import Player from '../components/Player';
import Header from '../components/Header';
// dialogs
import AddPlayerForm from '../components/dialogs/AddPlayerForm';
import ResetGame from '../components/dialogs/ResetGame';
import ScoreInput from '../components/dialogs/ScoreInput';
import RemovePlayer from '../components/dialogs/RemovePlayer';

import * as DialogActions from '../actions/DialogActions';
import * as PlayerActions from '../actions/PlayerActions';


class Scoreboard extends Component {
  state = {
    fabOpen: false,
    fabVisible: true,
  }

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
        <Header title="Scoreboard" />

        <List.Section>
        {players.map( (player, index) =>
          <Player
            key={index}
            index={index}
            score={player.score}
            name={player.name}
            showScoreInputDialog={this.showScoreInputDialog}
            showRemovePlayerDialog={this.showRemovePlayerDialog}
          />
        )}
        </List.Section>

        <Portal>
          <FAB.Group
            open={this.state.fabOpen}
            icon={this.state.fabOpen ? 'clear' : 'add'}
            actions={[
              { icon: 'person-add', label: 'Add player', onPress: this.showNewPlayerDialog },
              { icon: 'autorenew', label: 'New game', onPress: this.showResetGameDialog },
            ]}
            onStateChange={({ open }) => this.setState({ fabOpen: open })}
            visible={this.state.fabVisible}
          />
        </Portal>

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
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  formInput: {
    marginTop: 10
  }
});

const mapStateToProps = state => ({
  players: state.player.players,
});

export default connect(mapStateToProps)(Scoreboard);