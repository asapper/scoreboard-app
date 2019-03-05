import React, { Component } from 'react';
import { FAB, Portal } from 'react-native-paper';
import PropTypes from 'prop-types';

export default class FloatingActionButton extends Component {
  state = {
    fabOpen: false,
    fabVisible: true,
  }

  static propTypes = {
    showNewPlayerDialog: PropTypes.func.isRequired,
    showResetGameDialog: PropTypes.func.isRequired,
  }

  render() {
    const { showNewPlayerDialog, showResetGameDialog } = this.props;

    return (
      <Portal>
          <FAB.Group
            open={this.state.fabOpen}
            icon={this.state.fabOpen ? 'clear' : 'add'}
            actions={[
              { icon: 'person-add', label: 'Add player', onPress: showNewPlayerDialog },
              { icon: 'autorenew', label: 'New game', onPress: showResetGameDialog },
            ]}
            onStateChange={({ open }) => this.setState({ fabOpen: open })}
            visible={this.state.fabVisible}
          />
        </Portal>
    );
  }
}