import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Dialog, Divider, Portal, TextInput, HelperText } from 'react-native-paper';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

// actions
import * as PlayerActions from '../../players/actions';
import * as DialogActions from '../actions';
// selectors
import { isNewPlayerDialogVisible } from '../selectors';

class AddPlayerForm extends Component {
  state = {
    nameInput: '',
    scoreInput: 0,
    nameInputError: false
  }

  static propTypes = {
    dialogVisible: PropTypes.bool.isRequired,
  }

  isNameInputValid = () => {
    return this.state.nameInput.length > 0;
  }

  handleAddNewPlayer = () => {
    // verify name is not empty
    if (this.isNameInputValid()) {
      // add new player
      this.addNewPlayer(this.state.nameInput, this.state.scoreInput);
      this.hideDialog();
    } else {
      this.setState({ nameInputError: true });
    }
  }

  render() {
    const { dispatch, dialogVisible } = this.props;

    // player actions
    this.addNewPlayer = bindActionCreators(PlayerActions.addPlayer, dispatch);
    // dialog: new player
    this.hideDialog = bindActionCreators(DialogActions.hideAddPlayerDialog, dispatch);

    return (
      <Portal>
        <Dialog
          visible={dialogVisible}
          onDismiss={this.hideDialog}
        >
        {/* New Player dialog: title */}
        <Dialog.Title>New Player</Dialog.Title>
        <Divider />
        {/* New Player dialog: body */}
        <Dialog.Content>
          <View>
            {/* Input: player name */}
            <TextInput
              label='Name'
              placeholder="New player's name"
              selectionColor='#4e91fc'
              underlineColor='#4e91fc'
              style={styles.formInput}
              onChangeText={(nameInput) => this.setState({ nameInput })}
              onSubmitEditing={this.handleAddNewPlayer}
              error={this.state.nameInputError}
            />
            <HelperText type="error" visible={this.state.nameInputError}>
              Error: empty name not allowed
            </HelperText>
          </View>
          {/* Input: player initial score */}
          <TextInput
            label='Initial score'
            placeholder="Leave empty for initial score of 0"
            selectionColor='#4e91fc'
            underlineColor='#4e91fc'
            style={styles.formInput}
            onChangeText={(scoreInput) => this.setState({ scoreInput })}
            onSubmitEditing={this.handleAddNewPlayer}
            keyboardType='number-pad'
          />
        </Dialog.Content>
        {/* New Player dialog: action buttons */}
        <Dialog.Actions>
          <Button onPress={this.handleAddNewPlayer}>Add</Button>
          <Button onPress={this.hideDialog}>Cancel</Button>
        </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }
}

const styles = StyleSheet.create({
  formInput: {
    marginTop: 10
  }
});

const mapStateToProps = createStructuredSelector({
  dialogVisible: isNewPlayerDialogVisible
});

export default connect(mapStateToProps)(AddPlayerForm);