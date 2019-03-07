import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

// actions
import * as DialogActions from '../actions';
import * as PlayerActions from '../../players/actions';
// selectors
import { isResetGameDialogVisible } from '../selectors';

class ResetGame extends Component {
  static propTypes = {
    dialogVisible: PropTypes.bool.isRequired
  };

  handleResetGame = () => {
    this.resetGame();
    this.hideDialog();
  }

  render() {
    const { dispatch, dialogVisible } = this.props;

    // dialog actions
    // dialog: reset game
    this.hideDialog = bindActionCreators(DialogActions.hideResetGameDialog, dispatch);
    // player actions
    this.resetGame = bindActionCreators(PlayerActions.resetGame, dispatch);

    return (
      <Portal>
        <Dialog
          visible={dialogVisible}
          onDismiss={this.hideDialog}
        >
          {/* Game reset dialog: title */}
          <Dialog.Title>Warning!</Dialog.Title>
          {/* <Divider /> */}
          {/* Game reset dialog: body */}
          <Dialog.Content>
            {/* Warning text */}
            <Text>
              Are you sure you want to reset the game? All data from this game will be lost.
            </Text>
          </Dialog.Content>
          {/* Game reset dialog: action buttons */}
          <Dialog.Actions>
            <Button onPress={this.handleResetGame}>Continue</Button>
            <Button onPress={this.hideDialog}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dialogVisible: isResetGameDialogVisible,
});

export default connect(mapStateToProps)(ResetGame);