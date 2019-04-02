import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Dialog, Portal, TextInput, HelperText } from 'react-native-paper';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

// styles
import styles from '../styles';
// actions
import * as PlayerActions from '../../players/actions';
import * as DialogActions from '../actions';
// selectors
import { isNewPlayerDialogVisible } from '../selectors';

class AddPlayerForm extends Component {
  // store initial state
  initialState = {
    nameInput: '',
    nameInputError: false
  };
  
  // init state
  state = this.initialState;
  
  // verify all necessary props are passed in
  static propTypes = {
    dialogVisible: PropTypes.bool.isRequired,
  }
  
  /**
   * Restore state to its initial state.
   */
  resetState = () => {
    this.setState(this.initialState);
  }

  /**
   * Verify name input is valid.
   */
  isNameInputValid = () => {
    return this.state.nameInput.length > 0;
  }

  /**
   * Handle the adding of a player with input data.
   */
  handleAddNewPlayer = () => {
    // player actions
    addNewPlayer = bindActionCreators(PlayerActions.addPlayer, this.props.dispatch);
    
    // verify name is not empty
    if (this.isNameInputValid()) {
      let playerName = this.state.nameInput;
      // add new player
      addNewPlayer(playerName);
      this.handleHideDialog();
    } else {
      this.setState({ nameInputError: true });
    }
  }

  /**
   * Handle hiding the dialog.
   */
  handleHideDialog = () => {
    // dialog: new player
    hideDialog = bindActionCreators(DialogActions.hideAddPlayerDialog, this.props.dispatch);

    this.resetState();
    hideDialog();
  }
  
  /**
   * Return view for component.
   */
  render() {
    const { dialogVisible } = this.props;

    return (
      <Portal>
        <Dialog
          visible={dialogVisible}
          onDismiss={this.handleHideDialog}
        >
        {/* New Player dialog: title */}
        <Dialog.Title>New Player</Dialog.Title>
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
        </Dialog.Content>
        {/* New Player dialog: action buttons */}
        <Dialog.Actions>
          <Button onPress={this.handleAddNewPlayer}>Add</Button>
          <Button onPress={this.handleHideDialog}>Cancel</Button>
        </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }
}

/**
 * Create a selector for all properties obtained from state.
 */
const mapStateToProps = createStructuredSelector({
  dialogVisible: isNewPlayerDialogVisible
});

export default connect(mapStateToProps)(AddPlayerForm);