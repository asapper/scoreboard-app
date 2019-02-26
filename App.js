import React, { Component } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createStore } from 'redux';
import ScoreInputDialogReducer from './reducers/scoreInputDialogReducer';
import Scoreboard from './containers/Scoreboard';

const store = createStore(ScoreInputDialogReducer);

export default class App extends Component {

  theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#4e91fc',
    }
  };

  render() {
    return (
      <ReduxProvider store={store}>
        <PaperProvider theme={this.theme}>
          <Scoreboard />
        </PaperProvider>
      </ReduxProvider>
    );
  }
}