import { MOVIE_REQUEST, MOVIE_SUCCESS, MOVIE_FAILED } from "./../constants";

let initialState = {
  loading: false,
  movie: [],
  err: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_REQUEST:
      state.loading = true;
      state.movie = [];
      state.err = null;
      return { ...state };
    case MOVIE_SUCCESS:
      state.loading = false;
      state.movie = action.data;
      state.err = null;
      return { ...state };
    case MOVIE_FAILED:
      state.loading = false;
      state.movie = [];
      state.err = action.err;
      return { ...state };
    default:
      return { ...state };
  }
};

export default movieReducer;
