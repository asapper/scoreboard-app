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
    // removePlayer: PropTypes.func.isRequired,
  };

  render() {
    
    const { 
      name,
      score,
      index,
      showScoreInputDialog,
      // removePlayer
    } = this.props;

    return (
      <List.Item
        key={index}
        title={name}
        right={() => <Text>{score}</Text>}
        onPress={() => showScoreInputDialog(index, name)}
      />
    );
  }
}

const styles = StyleSheet.create({
});