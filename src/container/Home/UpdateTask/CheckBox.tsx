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

  const handleChangeCheckBox = (e) => {
    setChecked(e.target.checked);

    const newPosts = posts.map((post) => {
      return post._id === id ? {...post , completed: e.target.checked} : post
    });

    onUpdatePost(newPosts);
    updateTask(id, e.target.checked);
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
