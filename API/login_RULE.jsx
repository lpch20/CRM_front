import api from "./api_RULE";


export const login = async (data) =>{
    const url = `/login`;

    try {
      const response = await api.post(url, data);
      return response.data;
    } catch (error) {
      throw error.response.data.error;
    }
}