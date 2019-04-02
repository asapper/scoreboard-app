import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import Scoreboard from './containers/Scoreboard';
import { customMiddleware } from './containers/Middleware';

const store = createStore(
  rootReducer,
  applyMiddleware(customMiddleware)
);

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