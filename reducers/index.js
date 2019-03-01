import { combineReducers } from 'redux';
import dialogs from './dialogs';
import player from './player';

export default combineReducers({
    dialogs,
    player
});