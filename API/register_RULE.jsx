import api from "./api_RULE";

 const register = async (data) => {
  const url = "/register";
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};


export default register