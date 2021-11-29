import http from "../http-common";

class CartService {
    createCart(user_id: string, data: any, token: string) {
        return http.post(`/cart/${user_id}`, data, { headers: { "token": `Bearer ${token}` } });
    }

    getCart(user_id: string, token: string) {
        return http.get(`/cart/${user_id}`, { headers: { "token": `Bearer ${token}` } });
    }

    addToCart(user_id: string, data: any, token: string) {
        return http.put(`/cart/${user_id}`, data, { headers: { "token": `Bearer ${token}` } });
    }
    clearCart(user_id: string, token: string) {
        return http.delete(`/cart/${user_id}`, { headers: { "token": `Bearer ${token}` } });
    }
}

export default new CartService();