import axios from "axios";
import { domain, token, groupId } from "./config";

export class AdminServices {
  getUserList = () => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupId}`,
      method: "GET",
    });
  };
  addUser = (userData) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data: userData,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
  updateUser = (userData) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "POST",
      data: userData,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
  deleteUser = (accountID) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${accountID}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
  addMovie = (movieData) => {
    return axios({
      url: `${domain}/QuanLyPhim/ThemPhimUploadHinh`,
      method: "POST",
      data: movieData,
    });
  };
  updateMovie = (movieData) => {
    return axios({
      url: `${domain}/QuanLyPhim/CapNhatPhim`,
      method: "POST",
      data: movieData,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
  deleteMovie = (movieID) => {
    return axios({
      url: `${domain}/QuanLyPhim/XoaPhim?MaPhim=${movieID}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
  addShowTime = (data) => {
    return axios({
      url: `${domain}/QuanLyDatVe/TaoLichChieu`,
      method: "POST",
      data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
}
