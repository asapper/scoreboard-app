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
import { isSortMenuDialogVisible } from '../selectors';
// styles 
import styles from '../styles';


class SortMenu extends Component {
  state = {
    checked: FILTER_BY_INITIAL
  }

  handleRadioButtonPress = value => {
    this.setState({ checked: value });
    this.sortPlayers(value);
  }

  render() {
    const { dispatch, dialogVisible } = this.props;
    
    // dialog actions
    // dialog: sort menu
    this.hideDialog = bindActionCreators(DialogActions.hideSortMenuDialog, dispatch);
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
              {/* Sort by: Initial order */}
              <TouchableRipple onPress={() => this.handleRadioButtonPress(FILTER_BY_INITIAL) }>
                <View style={styles.radioButtonRow}>
                  <Paragraph style={styles.radioButtonText}>Initial order</Paragraph>
                  <View pointerEvents="none">
                    <RadioButton
                      value={FILTER_BY_INITIAL}
                      status={this.state.checked === FILTER_BY_INITIAL ? 'checked' : 'unchecked'}
                    />
                  </View>
                </View>
              </TouchableRipple>

              {/* Sort by: Name */}
              <TouchableRipple onPress={() => this.handleRadioButtonPress(FILTER_BY_NAME) }>
                <View style={styles.radioButtonRow}>
                  <Paragraph style={styles.radioButtonText}>Name</Paragraph>
                  <View pointerEvents="none">
                    <RadioButton
                      value={FILTER_BY_NAME}
                      status={this.state.checked === FILTER_BY_NAME ? 'checked' : 'unchecked'}
                    />
                  </View>
                </View>
              </TouchableRipple>

              {/* Sort by: Score */}
              <TouchableRipple onPress={() => this.handleRadioButtonPress(FILTER_BY_SCORE) }>
                <View style={styles.radioButtonRow}>
                  <Paragraph style={styles.radioButtonText}>Score</Paragraph>
                  <View pointerEvents="none">
                    <RadioButton
                      value={FILTER_BY_SCORE}
                      status={this.state.checked === FILTER_BY_SCORE ? 'checked' : 'unchecked'}
                      onPress={() => this.handleRadioButtonPress(FILTER_BY_SCORE) }
                    />
                  </View>
                </View>
              </TouchableRipple>

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

SortMenu.propTypes = {
  dialogVisible: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  dialogVisible: isSortMenuDialogVisible,
});

export default connect(mapStateToProps)(SortMenu);