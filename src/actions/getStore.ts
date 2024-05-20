import { api } from "../service/api";

export const getStore = async (storeId: string) => {
  try {
    const { data } = await api.get(`/postagem/${storeId}/distribuidora`);

    return data;
  } catch (error) {
    return null;
  }
};
