import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
// import { Provider as ReduxProvider } from 'react-redux';
// import { bindActionCreators, createStore, dispatch } from 'redux';
import {
  Button, DefaultTheme, Dialog, Divider, FAB,
  List, Portal, Provider as PaperProvider,  TextInput
} from 'react-native-paper';

import Player from './components/Player';
import Header from './components/Header';
import ScoreInputDialog from './components/ScoreInputDialog';
// import ScoreInputDialogReducer from './reducers/scoreInputDialogReducer';
// import * as ScoreInputDialogActionCreators from './actions/scoreInputDialogActionCreator';

// const store = createStore(ScoreInputDialogReducer);

// const hideScoreInputDialog = bindActionCreators(ScoreInputDialogActionCreators.hideDialog, dispatch);
// const showScoreInputDialog = bindActionCreators(ScoreInputDialogActionCreators.showDialog, dispatch);

export default class App extends Component {
  state = {
    fabOpen: false,
    fabVisible: true,
    newPlayerDialogVisible: false,
    newPlayerNameInput: '',
    newPlayerScoreInput: 0,
    scoreInputDialogVisible: false,
    scoreInputDialogPlayerIndex: 0,
    scoreInputDialogPlayerScore: 0,
    scoreInputDialogPlayerName: '',
    players: []
  };

  // keep track of latest id used
  prevPlayerId = 0;

  theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#4e91fc',
    }
  };

  handleNewGame = () => {
    // reset player id
    prevPlayerId = 0;
    // reset list of players
    this.setState({ players: [] });
  }

  _hideDialog = () => {
    this.setState({ newPlayerDialogVisible: false });
  }

  _showDialog = () => {
    this.setState({ newPlayerDialogVisible: true });
  }

  _hideScoreInputDialog = () => {
    this.setState({
      scoreInputDialogVisible: false,
      scoreInputDialogPlayerIndex: 0,
      scoreInputDialogPlayerScore: 0,
      scoreInputDialogPlayerName: ''
    });
  }

  _showScoreInputDialog = (playerIndex, playerName) => {
    this.setState( prevState => ({
      scoreInputDialogVisible: true,
      scoreInputDialogPlayerIndex: playerIndex,
      scoreInputDialogPlayerScore: prevState.players[playerIndex].score,
      scoreInputDialogPlayerName: playerName
    }));
  }

  _addNewPlayer = () => {
    // add new player, reset input values
    this.setState( prevState => ({
      players: [
        ...prevState.players,
        {
          name: prevState.newPlayerNameInput,
          score: parseInt(prevState.newPlayerScoreInput),
          id: this.prevPlayerId += 1
        }
      ],
      newPlayerNameInput: '',
      newPlayerScoreInput: 0
    }));
    // close input dialog
    this._hideDialog();
  }

  _addScoreToPlayer = (index, score) => {
    // add score to player with given id, reset input value
    this.setState( prevState => ({
      score: prevState.players[index].score += parseInt(score)
    }));
    // close input dialog
    this._hideScoreInputDialog();
  }

  render() {
    return (
      // <ReduxProvider store={store}>
        <PaperProvider theme={this.theme}>
          <ScrollView contentContainerStyle={styles.container}>
            <Header title="Scoreboard" />

            <List.Section>
            {this.state.players.map( (player, index) =>
              <Player
                id={player.id}
                key={player.id.toString()}
                index={index}
                score={player.score}
                name={player.name}
                showScoreInputDialog={this._showScoreInputDialog}
              />
            )}
            </List.Section>

            <Portal>
              <FAB.Group
                open={this.state.fabOpen}
                icon={this.state.fabOpen ? 'clear' : 'add'}
                actions={[
                  { icon: 'person-add', label: 'Add player', onPress: this._showDialog },
                  { icon: 'autorenew', label: 'New game', onPress: this.handleNewGame },
                ]}
                onStateChange={({ open }) => this.setState({ fabOpen: open })}
                visible={this.state.fabVisible}
              />
            </Portal>

            {/* New Player dialog */}
            <Portal>
              <Dialog
                visible={this.state.newPlayerDialogVisible}
                onDismiss={this._hideDialog}
              >
                {/* New Player dialog: title */}
                <Dialog.Title>New Player</Dialog.Title>
                <Divider />
                {/* New Player dialog: body */}
                <Dialog.Content>
                  {/* Input: player name */}
                  <TextInput
                    label='Name'
                    placeholder="New player's name"
                    selectionColor='#4e91fc'
                    underlineColor='#4e91fc'
                    style={styles.formInput}
                    onChangeText={(newPlayerNameInput) => this.setState({ newPlayerNameInput })}
                    onSubmitEditing={this._addNewPlayer}
                  />
                  {/* Input: player initial score */}
                  <TextInput
                    label='Initial score'
                    placeholder="Leave empty for initial score of 0"
                    selectionColor='#4e91fc'
                    underlineColor='#4e91fc'
                    style={styles.formInput}
                    onChangeText={(newPlayerScoreInput) => this.setState({ newPlayerScoreInput })}
                    onSubmitEditing={this._addNewPlayer}
                    keyboardType='number-pad'
                  />
                </Dialog.Content>
                {/* New Player dialog: action buttons */}
                <Dialog.Actions>
                  <Button onPress={this._addNewPlayer}>Add</Button>
                  <Button onPress={this._hideDialog}>Cancel</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>

            {/* Score input dialog */}
            <Portal>
              <Dialog
                visible={this.state.scoreInputDialogVisible}
                onDismiss={this._hideScoreInputDialog}
              >
                {/* Score input dialog: title */}
                <Dialog.Title>Add score to {this.state.scoreInputDialogPlayerName}</Dialog.Title>
                <Divider />
                {/* Score input dialog: body */}
                <Dialog.Content>
                  {/* Input: score */}
                  <TextInput
                  label='Score for this round'
                  placeholder="Leave empty for score of 0"
                  selectionColor='#4e91fc'
                  underlineColor='#4e91fc'
                  style={styles.formInput}
                  onChangeText={(scoreInputDialogPlayerScore) => this.setState({ scoreInputDialogPlayerScore })}
                  onSubmitEditing={() => addScoreToPlayer(scoreInputDialogPlayerIndex, scoreInputDialogPlayerScore)}
                  keyboardType='number-pad'
                  />
                </Dialog.Content>
                {/* Score input dialog: action buttons */}
                <Dialog.Actions>
                  <Button onPress={() => addScoreToPlayer(scoreInputDialogPlayerIndex, scoreInputDialogPlayerScore)}>Add Score</Button>
                  <Button onPress={this._hideScoreInputDialog}>Cancel</Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>

          </ScrollView>
        </PaperProvider>
      // </ReduxProvider>
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
