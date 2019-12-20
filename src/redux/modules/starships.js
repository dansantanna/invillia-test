import { createReducer } from '@/utils/redux-utils';
import swapi from '@/utils/swapi';

// Constants
const STARSHIP_SET_SUCCESS = 'STARSHIP_SET_SUCCESS';
const STARSHIP_SET_ERROR = 'STARSHIP_SET_ERROR';

// Action Creators
const fetchStarshipsSuccess = ({ link, ...data }) => ({
  type: STARSHIP_SET_SUCCESS,
  payload: { [link]: data },
});

const fetchStarshipsError = () => ({
  type: STARSHIP_SET_ERROR,
  payload: 'Erro ao buscar Starship',
});

export const fetchStarship = link => async dispatch => {
  try {
    const { data } = await swapi.get(link);
    dispatch(fetchStarshipsSuccess({ link, ...data }));
  } catch (error) {
    dispatch(fetchStarshipsError(error));
  }
};

// Initial State
const initialState = {};

// Reducer

export default createReducer(initialState, {
  [STARSHIP_SET_SUCCESS]: (state, action) => ({
    ...state,
    ...action.payload,
  }),

  [STARSHIP_SET_ERROR]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
});
