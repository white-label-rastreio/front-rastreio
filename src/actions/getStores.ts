import { api } from "../service/api";

export const getStores = async () => {
  try {
    const data = await api.get("/store");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
