import { combineReducers } from 'redux';
import dialogs from '../modules/dialogs';
import players from '../modules/players';

export default combineReducers({
    [dialogs.constants.NAME]: dialogs.reducer,
    [players.constants.NAME]: players.reducer
});