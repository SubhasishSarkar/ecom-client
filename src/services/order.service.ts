import http from "../http-common";

class CartService {
    createOrder(user_id: string, data: any, token: string) {
        return http.post(`/order/${user_id}`, data, { headers: { "token": `Bearer ${token}` } });
    }

    getAllOrders(user_id: string, token: string) {
        return http.get(`/order/${user_id}`, { headers: { "token": `Bearer ${token}` } });
    }

    // addToCart(user_id: string, data: any, token: string) {
    //     return http.put(`/order/${user_id}`, data, { headers: { "token": `Bearer ${token}` } });
    // }
    // clearCart(user_id: string, token: string) {
    //     return http.delete(`/order/${user_id}`, { headers: { "token": `Bearer ${token}` } });
    // }
}

export default new CartService();