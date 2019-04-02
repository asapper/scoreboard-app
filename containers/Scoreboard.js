import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// core components
import Header from '../modules/core/components/Header';
import Messages from '../modules/dialogs/components/Messages';
// player list component
import PlayerList from '../modules/players/components/PlayerList';
// dialog components
import AddPlayerForm from '../modules/dialogs/components/AddPlayerForm';
import ResetGame from '../modules/dialogs/components/ResetGame';

// actions
import * as DialogActions from '../modules/dialogs/actions';


const Scoreboard = props => {
  const { dispatch, players } = props;
  // dialog actions
  // dialog: reset game
  this.showResetGameDialog = bindActionCreators(DialogActions.showResetGameDialog, dispatch);
  // dialog: new player
  this.showNewPlayerDialog = bindActionCreators(DialogActions.showAddPlayerDialog, dispatch);
  // dialog: sort menu
  this.showSortMenuDialog = bindActionCreators(DialogActions.showSettingsMenuDialog, dispatch);

  return (
    <View style={styles.container}>
      {/* Appbar header */}
      <Header
        showSortMenu={this.showSortMenuDialog}
        showNewPlayerDialog={this.showNewPlayerDialog}
        showResetGameDialog={this.showResetGameDialog}
      />
      {/* Player list */}
      <PlayerList />
      {/* New Player dialog */}
      <AddPlayerForm />
      {/* Confirm game reset dialog */}
      <ResetGame />
      {/* Snackbar for messages */}
      <Messages  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fafafa',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});

export default connect(null)(Scoreboard);