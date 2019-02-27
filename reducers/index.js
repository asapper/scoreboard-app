import { combineReducers } from 'redux';
import scoreInput from './scoreInput';
import player from './player';

export default combineReducers({
    scoreInput,
    player
});