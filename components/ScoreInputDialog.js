import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Dialog, Divider, Portal, TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';

class ScoreInputDialog extends Component {

    static propTypes = {
        scoreInputDialogVisible: PropTypes.bool.isRequired,
        scoreInputDialogPlayerIndex: PropTypes.number.isRequired,
        scoreInputDialogPlayerScore: PropTypes.number.isRequired,
        scoreInputDialogPlayerName: PropTypes.string.isRequired,
        // addScoreToPlayer: PropTypes.func.isRequired,
        hideScoreInputDialog: PropTypes.func.isRequired
    };

    render() {
        const {
            scoreInputDialogVisible,
            scoreInputDialogPlayerIndex,
            scoreInputDialogPlayerScore,
            scoreInputDialogPlayerName,
            addScoreToPlayer,
            hideScoreInputDialog
        } = this.props;

        return (
            <Portal>
                <Dialog
                    visible={scoreInputDialogVisible}
                    onDismiss={hideScoreInputDialog}
                >
                    {/* Score input dialog: title */}
                    <Dialog.Title>Add score to {scoreInputDialogPlayerName}</Dialog.Title>
                    <Divider />
                    {/* Score input dialog: body */}
                    <Dialog.Content>
                        {/* Input: score */}
                        <TextInput
                        label='Score for this round'
                        placeholder="Leave empty for score of 0"
                        selectionColor='#4e91fc'
                        underlineColor='#4e91fc'
                        style={styles.formInput}
                        onChangeText={(scoreInputDialogPlayerScore) => this.setState({ scoreInputDialogPlayerScore })}
                        onSubmitEditing={() => addScoreToPlayer(scoreInputDialogPlayerIndex, scoreInputDialogPlayerScore)}
                        keyboardType='number-pad'
                        />
                    </Dialog.Content>
                    {/* Score input dialog: action buttons */}
                    <Dialog.Actions>
                        <Button onPress={() => addScoreToPlayer(scoreInputDialogPlayerIndex, scoreInputDialogPlayerScore)}>Add Score</Button>
                        <Button onPress={hideScoreInputDialog}>Cancel</Button>
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
    scoreInputDialogVisible: state.scoreInputDialogVisible,
    scoreInputDialogPlayerIndex: state.scoreInputDialogPlayerIndex,
    scoreInputDialogPlayerScore: state.scoreInputDialogPlayerScore,
    scoreInputDialogPlayerName: state.scoreInputDialogPlayerName
});

export default connect(mapStateToProps)(ScoreInputDialog);