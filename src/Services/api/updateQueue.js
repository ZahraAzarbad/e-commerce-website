import axios from "axios";

export async function updateQueue(list_of_data) {
  try {
    const requestQueue = list_of_data.map((request) => {
      const id = request.id;
      delete request.id;
      return axios.patch(`http://localhost:8000/api/products/${id}`, request);
    });

    if (requestQueue.length === 0)
      throw new Error("هیچ لیستی از درخواست یافت نشد");

    return await Promise.all(requestQueue);
  } catch (error) {
    throw new Error(error.message);
  }
}
