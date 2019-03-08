import React from 'react';
import { StyleSheet, View } from 'react-native';
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

// actions
import * as DialogActions from '../modules/dialogs/actions';


const Scoreboard = props => {
  const { dispatch, players } = props;
  // dialog actions
  // dialog: reset game
  this.showResetGameDialog = bindActionCreators(DialogActions.showResetGameDialog, dispatch);
  // dialog: new player
  this.showNewPlayerDialog = bindActionCreators(DialogActions.showAddPlayerDialog, dispatch);

  return (
    <View style={styles.container}>
      {/* Appbar header */}
      <Header />
      {/* Player list */}
      <PlayerList   />
      {/* Floating action button: new player and reset game dialogs */}
      <FloatingActionButton
        showNewPlayerDialog={this.showNewPlayerDialog}
        showResetGameDialog={this.showResetGameDialog}
      />
      {/* New Player dialog */}
      <AddPlayerForm />
      {/* Confirm game reset dialog */}
      <ResetGame />
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