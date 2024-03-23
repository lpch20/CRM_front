import api from "./api_RULE";

export const confirmar = async (token) => {
  const url = `/confirmar/${token}`;
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const recoveryPassword = async (token, data) => {
  const url = `/lostPassword/${token}`;
  try {
    const response = await api.put(url, data);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};

export const sendTokenPassword = async (data) => {
  const url = `/lostPassword`;
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};


