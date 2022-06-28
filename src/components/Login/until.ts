import axios from "axios";

export const getApi = async (email, password) => {
  const res = await axios.post(
    "https://api-nodejs-todolist.herokuapp.com/user/login",
    {
      email: email,
      password: password,
    }
  );
  return res.data.token;
};
