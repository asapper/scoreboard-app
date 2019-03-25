import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { Appbar } from 'react-native-paper';

// dialog components
import SettingsMenu from '../../dialogs/components/SettingsMenu';

const Header = props => {
  const { title, showSortMenu, showNewPlayerDialog, showResetGameDialog } = props;

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title={title} titleStyle={styles.title} />
        <Appbar.Action icon="sort" color='white' onPress={showSortMenu} />
        <Appbar.Action icon="add" color='white' onPress={showNewPlayerDialog} />
      </Appbar.Header>

      <SettingsMenu showResetGameDialog={showResetGameDialog} />
    </View>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  showSortMenu: PropTypes.func.isRequired,
  showNewPlayerDialog: PropTypes.func.isRequired,
  showResetGameDialog: PropTypes.func.isRequired
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