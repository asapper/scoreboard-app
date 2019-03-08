import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Dialog, HelperText, Portal, TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

// styles
import styles from '../styles';
// selectors
import { isScoreInputDialogVisible, getPlayerIndex, getName } from '../selectors';

class ScoreInput extends Component {
  // store initial state
  initialState = {
    score: 0,
    scoreInputError: false
  }
  // init state
  state = this.initialState;

  // verify all necessary props are passed in
  static propTypes = {
    dialogVisible: PropTypes.bool.isRequired,
    playerIndex: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    addScoreToPlayer: PropTypes.func.isRequired,
    hideDialog: PropTypes.func.isRequired
  };

  /**
   * Reset score input back to 0.
   */
  resetScoreInput = () => {
    this.setState(this.initialState);
  }

  /**
   * Handle adding inputted score to selected player.
   */
  handleAddScore = () => {
    const { playerIndex, addScoreToPlayer, hideDialog } = this.props;
    // verifiy score input is valid
    if (this.state.score > 0) {
      // add score
      addScoreToPlayer(playerIndex, this.state.score);
      this.handleHideDialog();
    } else {
      this.setState({ scoreInputError: true });
    }
  }

  handleHideDialog = () => {
    this.resetScoreInput();
    this.props.hideDialog();
  }

  /**
   * Return view for component.
   */
  render() {
    const {
      dialogVisible,
      name,
    } = this.props;

    return (
      <Portal>
        <Dialog
            visible={dialogVisible}
            onDismiss={this.handleHideDialog}
        >
          {/* Score input dialog: title */}
          <Dialog.Title>Add score to {name}</Dialog.Title>
          {/* Score input dialog: body */}
          <Dialog.Content>
            <View>
              {/* Input: score */}
              <TextInput
                label='Score for this round'
                placeholder='Score for this round'
                selectionColor='#4e91fc'
                underlineColor='#4e91fc'
                style={styles.formInput}
                onChangeText={(score) => this.setState({ score })}
                onSubmitEditing={this.handleAddScore}
                keyboardType='number-pad'
                error={this.state.scoreInputError}
              />
              <HelperText type="error" visible={this.state.scoreInputError}>
                Error: score input has to be greater than 0
              </HelperText>
            </View>
          </Dialog.Content>
          {/* Score input dialog: action buttons */}
          <Dialog.Actions>
            <Button onPress={this.handleAddScore}>Add Score</Button>
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
  dialogVisible: isScoreInputDialogVisible,
  playerIndex: getPlayerIndex,
  name: getName
});

export default connect(mapStateToProps)(ScoreInput);