import http from "../http-common";

class ListDataService {
  getAll() {
    return http.get("/product");
  }

  get(id: string) {
    return http.get(`/product/${id}`);
  }
}

export default new ListDataService();