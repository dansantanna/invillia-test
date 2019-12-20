import { createReducer } from '@/utils/redux-utils';
import swapi from '@/utils/swapi';

// Constants
const JEDI_SET_SUCCESS = 'JEDI_SET_SUCCESS';
const JEDI_SET_ERROR = 'JEDI_SET_ERROR';

// Action Creators
const fetchJedisSuccess = payload => ({ type: JEDI_SET_SUCCESS, payload });
const fetchJedisError = payload => ({ type: JEDI_SET_ERROR, payload });

export const fetchJedis = (page = 1) => async dispatch => {
  try {
    const { data } = await swapi.get('people', { params: { page } });
    dispatch(fetchJedisSuccess(data));
  } catch (error) {
    dispatch(fetchJedisError(error));
  }
};

// Initial State
const initialState = {
  results: [],
  count: null,
  next: null,
  error: null,
};

// Reducer

export default createReducer(initialState, {
  [JEDI_SET_SUCCESS]: (state, action) => ({
    ...state,
    count: action.payload.count,
    next: !!action.payload.next,
    results: state.results.concat(action.payload.results),
    error: null,
  }),

  [JEDI_SET_ERROR]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
});
