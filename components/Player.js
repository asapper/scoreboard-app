import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { List } from 'react-native-paper';
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
      <List.Item
        key={index}
        title={<Text style={styles.playerRow}>{name}</Text>}
        right={() => <Text style={styles.scores}>{score}</Text>}
        onPress={() => showScoreInputDialog(index, name)}
        onLongPress={() => showRemovePlayerDialog(index, name)}
      />
    );
  }
}

const styles = StyleSheet.create({
  playerRow: {
    fontSize: 35
  },
  scores: {
    alignSelf: 'center',
    fontSize: 35,
  }
});