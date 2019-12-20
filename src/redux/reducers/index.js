import { combineReducers } from 'redux';
import jedis from '../modules/jedis';
import starships from '../modules/starships';

const reducer = combineReducers({
  jedis,
  starships,
});

export default reducer;
