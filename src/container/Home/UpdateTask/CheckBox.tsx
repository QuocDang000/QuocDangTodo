import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { updateTask } from "./until";

export default function ControlledCheckbox({
  id,
  status,
  onUpdatePost,
  posts,
}: any) {
  const [checked, setChecked] = React.useState(status);

  const handleChangeCheckBox = async (e) => {
    setChecked(e.target.checked);

    const newPosts = posts.map(post => {
      if (post._id === id) {
        if (post.completed === false) {
          post.completed = true 
          status = post.completed 
        } else {
          post.completed = false 
          status = post.completed
        }
        console.log("abcd");
      } 
      return post
    });
    
    onUpdatePost(newPosts);
    try {
      await updateTask(id, status);
    } catch (error) {
      console.log("error", error);
    }
    console.log("statusss", status);
  };

  return (
    <div>
      <Checkbox
        checked={checked}
        onChange={handleChangeCheckBox}
        inputProps={{ "aria-label": "controlled" }}
      />
    </div>
  );
}
