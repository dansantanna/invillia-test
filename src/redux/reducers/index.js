import { combineReducers } from 'redux';
import jedis from '../modules/jedis';

const reducer = combineReducers({
  jedis,
});

export default reducer;
