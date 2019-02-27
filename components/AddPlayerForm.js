import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Dialog, Divider, Portal, TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';

class AddPlayerForm extends Component {

    state = {
        newPlayerNameInput: '',
        newPlayerScoreInput: 0
    }

    static propTypes = {
        players: PropTypes.array.isRequired,
        newPlayerDialogVisible: PropTypes.bool.isRequired,
        hideDialog: PropTypes.func.isRequired,
        addNewPlayer: PropTypes.func.isRequired
    };

    handleAddNewPlayer = () => {
        this.props.addNewPlayer(this.state.newPlayerNameInput, this.state.newPlayerScoreInput);
    }

    render() {
        const {
            newPlayerDialogVisible,
            hideDialog
        } = this.props;

        return (
            <Portal>
                <Dialog
                    visible={newPlayerDialogVisible}
                    onDismiss={hideDialog}
                >
                {/* New Player dialog: title */}
                <Dialog.Title>New Player</Dialog.Title>
                <Divider />
                {/* New Player dialog: body */}
                <Dialog.Content>
                    {/* Input: player name */}
                    <TextInput
                        label='Name'
                        placeholder="New player's name"
                        selectionColor='#4e91fc'
                        underlineColor='#4e91fc'
                        style={styles.formInput}
                        onChangeText={(newPlayerNameInput) => this.setState({ newPlayerNameInput })}
                        onSubmitEditing={this.handleAddNewPlayer}
                    />
                    {/* Input: player initial score */}
                    <TextInput
                        label='Initial score'
                        placeholder="Leave empty for initial score of 0"
                        selectionColor='#4e91fc'
                        underlineColor='#4e91fc'
                        style={styles.formInput}
                        onChangeText={(newPlayerScoreInput) => this.setState({ newPlayerScoreInput })}
                        onSubmitEditing={this.handleAddNewPlayer}
                        keyboardType='number-pad'
                    />
                </Dialog.Content>
                {/* New Player dialog: action buttons */}
                <Dialog.Actions>
                    <Button onPress={this.handleAddNewPlayer}>Add</Button>
                    <Button onPress={hideDialog}>Cancel</Button>
                </Dialog.Actions>
                </Dialog>
            </Portal>
        );
    }
}

const styles = StyleSheet.create({
    formInput: {
        marginTop: 10
    }
});

const mapStateToProps = state => ({
    players: state.player.players,
    newPlayerDialogVisible: state.player.newPlayerDialogVisible
});

export default connect(mapStateToProps)(AddPlayerForm);