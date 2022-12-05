import axiosClient from "./axiosClient";

const countriesApi = {
  getAll(params) {
    const url = "/countries";
    return axiosClient.get(url, { params });
  },
  get(id) {
    const url = "/countries/${id}";
    return axiosClient.get(url);
  },
  add(data) {
    const url = "/countries";
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = "/countries/${data.id}";
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = "/countries/${id}";
    return axiosClient.delete(url);
  },
};
export default countriesApi;
