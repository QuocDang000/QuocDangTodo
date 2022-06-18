import { useState } from "react";

import { Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Box } from "@mui/system";

import TransitionAlertsSuccess from "../Alert/AlertSuccess";
import TransitionAlertsError from "../Alert/AlertError";
import { postTask } from "./until";
import Loading from "../Loading";

import useStyles from "../style";

function AddTask({ onAddTask, posts, task }: any) {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [checked, setChecked] = useState(false);

  const classes = useStyles();
  const handleAdd = async () => {
    setChecked(true);
    try {
      const res = await postTask(task);
      const listBox = [res.data.data, ...posts];
      onAddTask(listBox);
      setSuccess(true);
      setChecked(false);
    } catch (error) {
      setError(true);
      setChecked(false);
    }
  };

  return (
    <>
      <div>{checked && <Loading />}</div>

      <Button onClick={handleAdd} className={classes.addBtn}>
        <Box display="flex" alignItems="center">
          <AddBoxIcon />
          <p>Add New Task</p>
        </Box>
      </Button>
      {success && <TransitionAlertsSuccess />}
      {error && <TransitionAlertsError />}
    </>
  );
}

export default AddTask;
