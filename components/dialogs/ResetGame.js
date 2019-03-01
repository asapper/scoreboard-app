import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import PropTypes from 'prop-types';

class ResetGame extends Component {
  static propTypes = {
    dialogVisible: PropTypes.bool.isRequired,
    hideDialog: PropTypes.func.isRequired,
    resetGame: PropTypes.func.isRequired
  };

  handleResetGame = () => {
    const { resetGame, hideDialog } = this.props;
    resetGame();
    hideDialog();
  }

  render() {
    const {
      dialogVisible,
      hideDialog
    } = this.props;

    return (
      <Portal>
        <Dialog
          visible={dialogVisible}
          onDismiss={hideDialog}
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
            <Button onPress={hideDialog}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }
}

const mapStateToProps = state => ({
  dialogVisible: state.dialogs.resetGameDialogVisible,
});

export default connect(mapStateToProps)(ResetGame);