import apiClient from "./api-client";

class AuthService {
  register(email: string, password: string) {
    return apiClient.post("/Auth/register", { email, password });
  }
  login(email: string, password: string) {
    return apiClient.post("/Auth/login", { email, password });
  }
}
export default new AuthService();
