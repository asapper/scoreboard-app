import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Button, Colors, DataTable, Dialog, Divider, IconButton, Portal, Text, Title } from 'react-native-paper';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

// styles
import styles from '../styles';
// selectors
import { 
  getName,
  getPlayerIndex,
  getScore,
  getRoundScores,
  isPlayerInfoDialogVisible
} from '../selectors';


class PlayerInfo extends Component {

  state = {
    page: 0
  }

  scoresPerPage = 3;

  static propTypes = {
    dialogVisible: PropTypes.bool.isRequired,
    playerIndex: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    roundScores: PropTypes.array.isRequired,
    showRemovePlayerDialog: PropTypes.func.isRequired,
    hidePlayerInfoDialog: PropTypes.func.isRequired,
  };

  handleCloseDialog = () => {
    // hide dialog
    this.props.hidePlayerInfoDialog();
    // reset state
    this.setState({ page: 0 });
  }

  render() {
    const {
      dialogVisible,
      name,
      playerIndex,
      score,
      roundScores,
      showRemovePlayerDialog,
    } = this.props;

    const { page } = this.state;

    let startingPageScore = this.scoresPerPage * page;
    let numPagesInPagination = Math.ceil(roundScores.length / this.scoresPerPage);
    let paginationLabel = 'No scores to display';
    // determine pagination label to display based on scores info
    if (numPagesInPagination > 0) {
      paginationLabel = (startingPageScore + 1) + "-";
      let finalScoreOnPage = startingPageScore + this.scoresPerPage;
      if ((roundScores.length - startingPageScore) < this.scoresPerPage) {
        finalScoreOnPage = roundScores.length;
      }
      paginationLabel += finalScoreOnPage + " of " + roundScores.length;
    }

    return (
      <Portal>
        <Dialog
          visible={dialogVisible}
          onDismiss={this.handleCloseDialog}
        >
          {/* Player Info dialog: title */}
          <View style={styles.header}>
            <Title style={styles.title}>{name} - Score per Round</Title>
            <IconButton 
              icon="delete"
              color={Colors.red500}
              size={20}
              style={styles.blockIcon}
              onPress={() => showRemovePlayerDialog(playerIndex, name)}
            />
          </View>
          <Divider />
          {/* Player Info dialog: body */}
          <Dialog.Content>
            {/* Round Scores table */}
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Round</DataTable.Title>
                <DataTable.Title numeric>Score</DataTable.Title>
              </DataTable.Header>

              {/* Score per round */}
              {roundScores.map( (roundScore, index) => {
                if (index >= startingPageScore && index < (startingPageScore+this.scoresPerPage)) {
                  return (
                    <DataTable.Row key={index} background>
                      <DataTable.Cell>{roundScore.round}</DataTable.Cell>
                      <DataTable.Cell numeric>{roundScore.score}</DataTable.Cell>
                    </DataTable.Row>
                  )
                }
              })}

              <DataTable.Pagination
                page={page}
                numberOfPages={numPagesInPagination}
                label={paginationLabel}
                onPageChange={page => this.setState({ page })}
              />
            </DataTable>

          </Dialog.Content>
          <Divider />
          {/* Player Info dialog: action buttons */}
          <Dialog.Actions>
            <Button onPress={this.handleCloseDialog}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dialogVisible: isPlayerInfoDialogVisible,
  playerIndex: getPlayerIndex,
  name: getName,
  score: getScore,
  roundScores: getRoundScores
});

export default connect(mapStateToProps)(PlayerInfo);