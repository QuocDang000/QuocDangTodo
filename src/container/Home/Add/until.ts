import axios from "axios";

export const postTask = async (description: any) => {
    // console.log('description',description);
    
  const res = await axios.post("https://api-nodejs-todolist.herokuapp.com/task",{
      "description": description,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjFlNWIyMmJlMzcyZTAwMTc3ZWJiNDEiLCJpYXQiOjE2NTQ1NjIzNjR9.5reMUuPafhO0IsyGwI25_YSNTiFWbfs_44aiDjmmA3I",
      },
    }
  );

  console.log("RES", res.data.data.description);
  console.log(res);
  
  return res;
};
