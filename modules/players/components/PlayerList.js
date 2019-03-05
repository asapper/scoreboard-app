import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

// player
import Player from './Player';
// selectors
import { getAllPlayers } from '../selectors';


class PlayerList extends Component {

  static propTypes = {
    players: PropTypes.array.isRequired,
    showScoreInputDialog: PropTypes.func.isRequired,
    showRemovePlayerDialog: PropTypes.func.isRequired,
  }

  render() {
    const { players, showScoreInputDialog, showRemovePlayerDialog } = this.props;

    return (
      <View>
        {players.map( (player, index) =>
          <Player
            key={index}
            index={index}
            score={player.score}
            name={player.name}
            showScoreInputDialog={showScoreInputDialog}
            showRemovePlayerDialog={showRemovePlayerDialog}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  players: getAllPlayers,
});

export default connect(mapStateToProps)(PlayerList);