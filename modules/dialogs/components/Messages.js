import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Snackbar } from 'react-native-paper';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';

// actions
import * as DialogActions from '../actions';
// selectors
import { getMessageSnackbarText, isMessageSnackbarVisible } from '../selectors';


const Messages = props => {
  // dialog: message snackbar
  this.hideDialog = bindActionCreators(DialogActions.hideMessagesSnackbar, props.dispatch);

  return (
    <Snackbar
      visible={props.dialogVisible}
      onDismiss={this.hideDialog}
      duration={Snackbar.DURATION_SHORT}
      action={{
        label: 'Close',
        onPress: this.hideDialog,
      }}
    >
      {props.message}
    </Snackbar>
  );
}

Messages.propTypes = {
  dialogVisible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dialogVisible: isMessageSnackbarVisible,
  message: getMessageSnackbarText,
});

export default connect(mapStateToProps)(Messages);