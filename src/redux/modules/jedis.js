import { createReducer } from '@/utils/redux-utils';
import swapi from '@/utils/swapi';

// Constants
const JEDI_SET_LOADING = 'JEDI_SET_LOADING';

// Action Creators
export const setLoading = loading => ({
  type: JEDI_SET_LOADING,
  payload: loading,
});

export const fetchJedis = async (page = 1) => {
  try {
    const { data } = await swapi.get('people', { params: { page } });
  } catch (error) {
    console.error('Erro People:', error);
  }
  return { type: JEDI_SET_LOADING };
};

// Initial State
const initialState = {
  loading: false,
  list: [],
  count: null,
  next: null,
  previous: null,
};

// Reducer

export default createReducer(initialState, {
  [JEDI_SET_LOADING]: (state, action) => ({
    ...state,
    loading: action.payload,
  }),
});
