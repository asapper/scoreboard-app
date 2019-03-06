import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Appbar } from 'react-native-paper';

export default class Header extends Component {

  static propTypes = {
    title: PropTypes.string
  };

  static defaultProps = {
    title: 'Scoreboard'
  };

  render() {
    const { title } = this.props;

    return (
      <Appbar.Header>
        <Appbar.Content title={title} titleStyle={styles.title} />
      </Appbar.Header>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: '#fff'
  }
});