import axios from "axios";
import { domain, token } from "./config";

export class UserServices {
  login = (loginData) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: loginData,
    });
  };
  signup = (signupData) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: signupData,
    });
  };
  getAccountDetails = (accountID) => {
    return axios({
      url: `${domain}/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      data: accountID,
    });
  };
  bookTicket = (data) => {
    return axios({
      url: `${domain}/quanlydatve/datve`,
      method: "POST",
      data,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(token),
      },
    });
  };
}
