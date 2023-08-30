import publicAxios from "../instances/publicAxios";

export const getAllProducts = () => {
  return publicAxios
    .get("/products", { params: { limit: 1000 } })
    .then((res) => res.data);
};
