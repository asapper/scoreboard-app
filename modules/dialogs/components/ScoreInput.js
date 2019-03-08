import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Dialog, Divider, Portal, TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

// styles
import styles from '../styles';
// selectors
import { isScoreInputDialogVisible, getPlayerIndex, getName } from '../selectors';

class ScoreInput extends Component {
  state = {
    score: 0
  }

  static propTypes = {
    dialogVisible: PropTypes.bool.isRequired,
    playerIndex: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    addScoreToPlayer: PropTypes.func.isRequired,
    hideDialog: PropTypes.func.isRequired
  };

  handleAddScore = () => {
    const { playerIndex, addScoreToPlayer, hideDialog } = this.props;
    addScoreToPlayer(playerIndex, this.state.score);
    hideDialog();
  }

  render() {
    const {
        dialogVisible,
        name,
        hideDialog
    } = this.props;

    return (
      <Portal>
        <Dialog
            visible={dialogVisible}
            onDismiss={hideDialog}
        >
          {/* Score input dialog: title */}
          <Dialog.Title>Add score to {name}</Dialog.Title>
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
              onChangeText={(score) => this.setState({ score })}
              onSubmitEditing={this.handleAddScore}
              keyboardType='number-pad'
            />
          </Dialog.Content>
          {/* Score input dialog: action buttons */}
          <Dialog.Actions>
            <Button onPress={this.handleAddScore}>Add Score</Button>
            <Button onPress={hideDialog}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dialogVisible: isScoreInputDialogVisible,
  playerIndex: getPlayerIndex,
  name: getName
});

export default connect(mapStateToProps)(ScoreInput);