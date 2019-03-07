import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import Scoreboard from './containers/Scoreboard';

const store = createStore(rootReducer);

const App = () => {
  theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#4e91fc',
    }
  };

  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={this.theme}>
        <Scoreboard />
      </PaperProvider>
    </ReduxProvider>
  );
}

export default App;