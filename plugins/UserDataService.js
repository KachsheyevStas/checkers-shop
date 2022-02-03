import http from "./http-common";

class UserDataService {
  getAll() {
    return http.get("/users");
  }

  get(name) {
    return http.get(`/users/${name}`);
  }

  create(data) {
    return http.post("/users", data);
  }

  update(name, data) {
    return http.put(`/users/${name}`, data);
  }
}

export default new UserDataService();