import { api } from "../service/api";

export const getPostagem = async (trackCode: string) => {
  try {
    const { data } = await api.get(`/postagem/${trackCode}`);

    console.log(data.codigoRastreio);
    return data;
  } catch (error) {
    return null;
  }
};
