import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Dialog, Divider, FAB, List, Portal, TextInput } from 'react-native-paper';

import Player from '../components/Player';
import Header from '../components/Header';
import ScoreInputDialog from '../components/ScoreInputDialog';
import * as ScoreInputDialogActionCreators from '../actions/scoreInputDialogActionCreator';


class Scoreboard extends Component {
  state = {
    fabOpen: false,
    fabVisible: true,
    newPlayerDialogVisible: false,
    newPlayerNameInput: '',
    newPlayerScoreInput: 0,
    players: []
  };

  // keep track of latest id used
  prevPlayerId = 0;

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

  constructor(props) {
    super(props);
    
    const { dispatch } = this.props;

    this.hideScoreInputDialog = bindActionCreators(ScoreInputDialogActionCreators.hideDialog, dispatch);
    this.showScoreInputDialog = bindActionCreators(ScoreInputDialogActionCreators.showDialog, dispatch);
  }

  render() {
    return (
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
                    showScoreInputDialog={this.showScoreInputDialog}
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
            <ScoreInputDialog hideScoreInputDialog={this.hideScoreInputDialog} />
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
    scoreInputDialogVisible: state.scoreInputDialogVisible,
    scoreInputDialogPlayerIndex: state.scoreInputDialogPlayerIndex,
    scoreInputDialogPlayerScore: state.scoreInputDialogPlayerScore,
    scoreInputDialogPlayerName: state.scoreInputDialogPlayerName,
    // addScoreToPlayer: state.addScoreToPlayer,
    // hideScoreInputDialog: state.hideScoreInputDialog
});

export default connect(mapStateToProps)(Scoreboard);