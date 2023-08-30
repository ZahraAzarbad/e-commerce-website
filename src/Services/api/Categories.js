import publicAxios from "../instances/publicAxios";

export async function getCategories() {
  const response = await publicAxios.get("/categories");
  return response.data.data.categories;
}
