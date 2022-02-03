import http from "./http-common";

class ItemDataService {
  getAll() {
    return http.get("/items");
  }

  get(name) {
    return http.get(`/items/${name}`);
  }

  create(data) {
    return http.post("/items", data);
  }

  update(name, data) {
    return http.put(`/items/${name}`, data);
  }
}

export default new ItemDataService();