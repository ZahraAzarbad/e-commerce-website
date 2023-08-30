import privateAxios from "../instances/privateAxios";
export const refreshToken = (token) => {
  return privateAxios
    .post("/auth/token", {
      refreshToken: token,
    })
    .then((res) => res.data);
};
