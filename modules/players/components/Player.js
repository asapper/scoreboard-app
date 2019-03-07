import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, IconButton, Surface, Text } from 'react-native-paper';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const Player = props => {
  const { 
    name,
    score,
    index,
    showScoreInputDialog,
    showRemovePlayerDialog,
    showPlayerInfoDialog
  } = props;

  return (
    <Surface style={styles.playerRowContent}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.playerData}
        onPress={() => showScoreInputDialog(index, name)}
        onLongPress={() => showRemovePlayerDialog(index, name)}
      >
        <Avatar.Icon style={styles.playerAvatar} icon="person" size={40} />
        <Text style={styles.playerTextInfo}>{name}</Text>
        <NumberFormat
          value={score}
          thousandSeparator={true}
          displayType='text'
          renderText={value => <Text style={[styles.playerTextInfo, styles.playerScore]}>{value}</Text>}
        />
      </TouchableOpacity>
      <IconButton
        style={styles.moreIcon}
        icon="more-vert"
        onPress={() => showPlayerInfoDialog(index, name, score)}
      />
    </Surface>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  showScoreInputDialog: PropTypes.func.isRequired,
  showRemovePlayerDialog: PropTypes.func.isRequired,
  showPlayerInfoDialog: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  playerRowContent: {
    marginTop: 20,
    marginBottom: 0,
    marginLeft: 15,
    marginRight: 15,
    padding: 15,
    elevation: 2,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  playerData: {
    flex: 9,
    flexDirection: 'row',
  },
  playerAvatar: {
    flex: 1,
    marginRight: 10,
    backgroundColor: 'steelblue'
  },
  playerTextInfo: {
    flex: 3,
    fontSize: 35,
    alignSelf: 'center',
  },
  playerScore: {
    textAlign: 'right',
  },
  moreIcon: {
    flex: 1,
  }
});

export default Player;