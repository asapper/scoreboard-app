import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FAB, List, Portal } from 'react-native-paper';
import { createStructuredSelector } from 'reselect';

// core
import Header from '../modules/core/components/Header';
// player
import Player from '../modules/players/components/Player';
// dialogs
import AddPlayerForm from '../modules/dialogs/components/AddPlayerForm';
import ResetGame from '../modules/dialogs/components/ResetGame';
import ScoreInput from '../modules/dialogs/components/ScoreInput';
import RemovePlayer from '../modules/dialogs/components/RemovePlayer';

// actions
import * as DialogActions from '../modules/dialogs/actions';
import * as PlayerActions from '../modules/players/actions';
// selectors
import { getAllPlayers } from '../modules/players/selectors';


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

const mapStateToProps = createStructuredSelector({
  players: getAllPlayers,
});

export default connect(mapStateToProps)(Scoreboard);