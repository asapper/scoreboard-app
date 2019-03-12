import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Appbar } from 'react-native-paper';

// dialog components
import SortMenu from '../../dialogs/components/SortMenu';

const Header = props => {
  const { title, showSortMenu } = props;

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title={title} titleStyle={styles.title} />
        <Appbar.Action icon="sort" color='white' onPress={showSortMenu} />
      </Appbar.Header>

      <SortMenu />
    </View>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  showSortMenu: PropTypes.func.isRequired
};

Header.defaultProps = {
  title: 'Scoreboard'
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: 'white'
  }
});

export default Header;