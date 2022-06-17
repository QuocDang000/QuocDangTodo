import axios from "axios";

export const deleteTask = async (id: any) => {
  const res = await axios.delete(`https://api-nodejs-todolist.herokuapp.com/task/${id}`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.token,
    },
  }
  );
  
  return res;
}