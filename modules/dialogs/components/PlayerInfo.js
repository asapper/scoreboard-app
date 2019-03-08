import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Colors, Dialog, Divider, IconButton, Portal, Text, Title } from 'react-native-paper';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import NumberFormat from 'react-number-format';

// styles
import styles from '../styles';
// selectors
import { getName, getPlayerIndex, getScore, isPlayerInfoDialogVisible } from '../selectors';

const PlayerInfo = props => {
  const {
    dialogVisible,
    name,
    playerIndex,
    score,
    showRemovePlayerDialog,
    hidePlayerInfoDialog,
  } = props;

  return (
    <Portal>
      <Dialog
        visible={dialogVisible}
        onDismiss={hidePlayerInfoDialog}
      >
        {/* Player Info dialog: title */}
        <View style={styles.header}>
          <Title style={styles.title}>Player Info</Title>
          <IconButton 
            icon="block"
            color={Colors.red500}
            size={20}
            style={styles.blockIcon}
            onPress={() => showRemovePlayerDialog(playerIndex, name)}
          />
        </View>
        <Divider />
        {/* Player Info dialog: body */}
        <Dialog.Content>
          {/* Player info */}
          <View style={styles.content}>
            <Text style={[styles.contentHeader, styles.contentText]}>Name: </Text>
            <Text style={styles.contentText}>{name}</Text>
          </View>
          <View style={styles.content}>
            <Text style={[styles.contentHeader, styles.contentText]}>Score: </Text>
            <NumberFormat
              value={score}
              thousandSeparator={true}
              displayType='text'
              renderText={value => <Text style={styles.contentText}>{value}</Text>}
            />
          </View>
        </Dialog.Content>
        <Divider />
        {/* Player Info dialog: action buttons */}
        <Dialog.Actions>
          <Button onPress={hidePlayerInfoDialog}>Close</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

PlayerInfo.propTypes = {
  dialogVisible: PropTypes.bool.isRequired,
  playerIndex: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  showRemovePlayerDialog: PropTypes.func.isRequired,
  hidePlayerInfoDialog: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dialogVisible: isPlayerInfoDialogVisible,
  playerIndex: getPlayerIndex,
  name: getName,
  score: getScore,
});

export default connect(mapStateToProps)(PlayerInfo);