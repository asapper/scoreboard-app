import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Avatar, IconButton, Surface } from 'react-native-paper';
import PropTypes from 'prop-types';

export default class Player extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    showScoreInputDialog: PropTypes.func.isRequired,
    showRemovePlayerDialog: PropTypes.func.isRequired,
  };

  render() {
    
    const { 
      name,
      score,
      index,
      showScoreInputDialog,
      showRemovePlayerDialog
    } = this.props;

    return (
      <Surface style={styles.playerRowContent}>
        <TouchableOpacity activeOpacity={0.9} style={styles.playerData} onPress={() => showScoreInputDialog(index, name)} >
          <Avatar.Icon style={styles.playerAvatar} icon="person" size={40} />
          <Text style={styles.playerTextInfo}>{name}</Text>
          <Text style={[styles.playerTextInfo, styles.playerScore]}>{score}</Text>
        </TouchableOpacity>
        <IconButton style={styles.moreIcon} icon="more-vert" onPress={() => showRemovePlayerDialog(index, name)} />
      </Surface>
    );
  }
}

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