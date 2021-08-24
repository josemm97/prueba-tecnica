import { combineReducers } from 'redux';
import BloqueReducer from './blocksReducer';

const reducer = combineReducers({
  blocks: BloqueReducer,
});
export default reducer;
