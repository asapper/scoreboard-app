import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Appbar } from 'react-native-paper';

const Header = props => {
  return (
    <Appbar.Header>
      <Appbar.Content title={props.title} titleStyle={styles.title} />
    </Appbar.Header>
  );
}

Header.propTypes = {
  title: PropTypes.string
};

Header.defaultProps = {
  title: 'Scoreboard'
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: '#fff'
  }
});

export default Header;