import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar, IconButton, Surface, Text } from 'react-native-paper';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

import styles from '../styles';

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

export default Player;