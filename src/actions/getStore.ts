import { api } from "../service/api";

export const getStore = async (storeId: string) => {
  try {
    const { data } = await api.get(`/postagem/${storeId}/distribuidora`);

    console.log(data);
    return data;
  } catch (error) {
    return null;
  }
};
