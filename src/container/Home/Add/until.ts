import axios from "axios";

export const postTask = async (description: any) => {
  const res = await axios.post(
    "https://api-nodejs-todolist.herokuapp.com/task",
    {
      description: description,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.token,
      },
    }
  );
  return res;
};
