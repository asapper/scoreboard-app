import React from 'react';
import { connect } from 'react-redux';
import { Button, Dialog, Portal, Text } from 'react-native-paper';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

// selectors
import { isRemovePlayerDialogVisible, getPlayerIndex, getName } from '../selectors';

const RemovePlayer = props => {
  handleRemovePlayer = () => {
    const { name, playerIndex, removePlayer, hideDialog, hidePlayerInfoDialog, showMessage } = props;

    // remove player at given index
    removePlayer(playerIndex);
    // hide current remove-player dialog
    hideDialog();
    // hide parent dialog
    hidePlayerInfoDialog();
    // display success message
    showMessage('Removed ' + name + ' from this game.');
  }
  const { name, dialogVisible, hideDialog } = props;

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

RemovePlayer.propTypes = {
  dialogVisible: PropTypes.bool.isRequired,
  playerIndex: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  hideDialog: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
  hidePlayerInfoDialog: PropTypes.func.isRequired,
  showMessage: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dialogVisible: isRemovePlayerDialogVisible,
  playerIndex: getPlayerIndex,
  name: getName,
});

export default connect(mapStateToProps)(RemovePlayer);