import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Card, IconButton, List } from 'react-native-paper';
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
      <Card
        elevation={1}
        style={styles.card}
        onPress={() => showScoreInputDialog(index, name)}
        onLongPress={() => showRemovePlayerDialog(index, name)}
      >
        {/* Player card: title */}
        <Card.Title
          title={name}
          titleStyle={styles.playerRow}
          left={() => <Avatar.Icon icon="person" size={40} />}
          right={() => <View style={styles.scores}><Text style={styles.scoreText}>{score}</Text><IconButton icon="more-vert" /></View> }
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  playerRow: {
    fontSize: 25,
    fontWeight: 'normal'
  },
  scores: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
  },
  scoreText: {
    alignSelf: 'center',
    fontSize: 25,
  }
});