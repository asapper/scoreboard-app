import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Dialog, Divider, Paragraph, Portal, RadioButton, Text, TouchableRipple } from 'react-native-paper';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

// actions
import * as DialogActions from '../actions';
import * as PlayerActions from '../../players/actions';
// constants
import { FILTER_BY_INITIAL, FILTER_BY_NAME, FILTER_BY_SCORE } from '../../players/constants';
// selectors
import { isSettingsMenuDialogVisible } from '../selectors';
// styles 
import styles from '../styles';


class SettingsMenu extends Component {
  state = {
    checked: FILTER_BY_INITIAL
  }

  static propTypes = {
    dialogVisible: PropTypes.bool.isRequired,
    showResetGameDialog: PropTypes.func.isRequired
  }

  handleRadioButtonPress = value => {
    this.setState({ checked: value });
    this.sortPlayers(value);
  }

  render() {
    const { dispatch, dialogVisible, showResetGameDialog } = this.props;
    
    // dialog actions
    // dialog: sort menu
    this.hideDialog = bindActionCreators(DialogActions.hideSettingsMenuDialog, dispatch);
    // players: sort list
    this.sortPlayers = bindActionCreators(PlayerActions.sortPlayers, dispatch);

    return (
      <Portal>
        <Dialog
          visible={dialogVisible}
          onDismiss={this.hideDialog}
        >
          {/* Sort menu dialog: title */}
          <Dialog.Title>Settings</Dialog.Title>
          <Divider />
          {/* Sort menu dialog: body */}
          <Dialog.Content>

            {/* Sort by settings */}
            <View>
              {/* Heading */}
              <Text style={styles.heading}>
                Sort
              </Text>
              <View style={styles.radioButtonRow}>
                {/* Sort by: Initial order */}
                <Button
                  mode={this.state.checked === FILTER_BY_INITIAL ? 'contained' : 'outlined'}
                  onPress={() => this.handleRadioButtonPress(FILTER_BY_INITIAL)}
                  compact={true}
                  style={styles.radioButton}
                >
                Initial Order
                </Button>

                {/* Sort by: Name */}
                <Button
                  mode={this.state.checked === FILTER_BY_NAME ? 'contained' : 'outlined'}
                  onPress={() => this.handleRadioButtonPress(FILTER_BY_NAME)}
                  compact={true}
                  style={styles.radioButton}
                >
                Name
                </Button>

                {/* Sort by: Score */}
                <Button
                  mode={this.state.checked === FILTER_BY_SCORE ? 'contained' : 'outlined'}
                  onPress={() => this.handleRadioButtonPress(FILTER_BY_SCORE)}
                  compact={true}
                  style={styles.radioButton}
                >
                Score
                </Button>
              </View>
            </View>

            {/* Settings: reset game */}
            <View>
              {/* Heading */}
              <Text style={styles.heading}>
                Reset
              </Text>
              <View style={styles.radioButtonRow}>
                <Button
                    compact={true}
                    uppercase={false}
                    style={styles.radioButton}
                    onPress={showResetGameDialog}
                  >
                  Reset game
                </Button>
              </View>
            </View>

          </Dialog.Content>
          {/* Sort menu dialog: action buttons */}
          <Dialog.Actions>
            <Button onPress={this.hideDialog}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dialogVisible: isSettingsMenuDialogVisible,
});

export default connect(mapStateToProps)(SettingsMenu);