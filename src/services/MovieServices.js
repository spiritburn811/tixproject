import axios from "axios";
import { domain, groupId } from "./config";

export class MovieServices {
  getMovieList = () => {
    return axios({
      url: `${domain}/QuanLyPhim/LayDanhSachPhim?maNhom=${groupId}`,
      method: "GET",
    });
  };
  getMovieDetail = (movieCode) => {
    return axios({
      url: `${domain}/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`,
      method: "GET",
    });
  };
  getCinemaChainDetail = () => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
    });
  };
  getCinemasByChain = (chainCode) => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${chainCode}`,
      method: "GET",
    });
  };
  getShowTimesByChain = (chainCode) => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${chainCode}&maNhom=${groupId}`,
      method: "GET",
    });
  };
  getShowTimesByMovie = (movieCode) => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieCode}`,
      method: "GET",
    });
  };
}
