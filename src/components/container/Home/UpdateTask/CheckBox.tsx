import * as React from "react";

import Checkbox from "@mui/material/Checkbox";

export default function ControlledCheckbox({ id, status, onUpdatePost }: any) {
  const [checked, setChecked] = React.useState(status);

  const handleChangeCheckBox = (e) => {
    setChecked(e.target.checked);
    onUpdatePost(id, e.target.checked);
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
