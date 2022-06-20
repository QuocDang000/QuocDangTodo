import { useState } from "react";

import TransitionAlertsSuccess from "../Alert/AlertSuccess";
import TransitionAlertsError from "../Alert/AlertError";
import { postTask } from "./until";
import Loading from "../Loading";
import ButtonComponent from "../ButtonComponent/ButtonReuse";

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

      <ButtonComponent action={handleAdd} styleClass={classes.addBtn} />

      {success && <TransitionAlertsSuccess />}
      {error && <TransitionAlertsError />}
    </>
  );
}

export default AddTask;
