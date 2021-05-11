import {
  MOVIE_REQUEST,
  MOVIE_SUCCESS,
  MOVIE_FAILED,
  ACT_FETCH_MOVIE_REQUEST,
  ACT_FETCH_MOVIE_SUCCESS,
  ACT_FETCH_MOVIE_FAILED,
} from "./../constants";
import axios from "axios";

const actMovieRequest = () => {
  return {
    type: MOVIE_REQUEST,
  };
};

const actMovieSuccess = (data) => {
  return {
    type: MOVIE_SUCCESS,
    data,
  };
};

const actMovieFailed = (err) => {
  return {
    type: MOVIE_FAILED,
    err,
  };
};

const actFetchMovie = () => {
  return (dispatch) => {
    dispatch(actMovieRequest());
    Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP05&soTrang=1&soPhanTuTrenTrang=6`,
      method: "GET",
    })
      .then((result) => {
        dispatch(actMovieSuccess(result.data.items));
      })
      .catch((err) => {
        dispatch(actMovieFailed(err));
      });
  };
};

export { actFetchMovie };
