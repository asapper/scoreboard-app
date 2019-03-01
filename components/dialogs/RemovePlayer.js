import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import PropTypes from 'prop-types';

class RemovePlayer extends Component {
  static propTypes = {
    dialogVisible: PropTypes.bool.isRequired,
    playerIndex: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    hideDialog: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired
  };

  handleRemovePlayer = () => {
    const { playerIndex, removePlayer, hideDialog } = this.props;
    removePlayer(playerIndex);
    hideDialog();
  }

  render() {
    const {
      name,
      dialogVisible,
      hideDialog
    } = this.props;

    return (
      <Portal>
        <Dialog
          visible={dialogVisible}
          onDismiss={hideDialog}
        >
          {/* Remove player dialog: title */}
          <Dialog.Title>Warning!</Dialog.Title>
          {/* Remove player dialog: body */}
          <Dialog.Content>
            {/* Warning text */}
            <Text>
              Are you sure you want to remove {name} from this game?
            </Text>
          </Dialog.Content>
          {/* Remove player dialog: action buttons */}
          <Dialog.Actions>
            <Button onPress={this.handleRemovePlayer}>Remove</Button>
            <Button onPress={hideDialog}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }
}

const mapStateToProps = state => ({
  dialogVisible: state.dialogs.removePlayerDialogVisible,
  playerIndex: state.dialogs.playerIndex,
  name: state.dialogs.name,
});

export default connect(mapStateToProps)(RemovePlayer);