import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TransitionAlertsSuccess from "../Alert/AlertSuccess";
import TransitionAlertsError from "../Alert/AlertError";
import Loading from "../Loading";
import ButtonReuse from "../ButtonComponent/ButtonReuse";
import { todoListSelector } from "../../../../redux/selector";
import useStyles from "../style";

function AddTask({ onAddTask, task }: any) {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [checked, setChecked] = useState(false);
  // const dispatch = useDispatch();

  const todoList = useSelector(todoListSelector);

  const classes = useStyles();
  const handleAdd = () => {
    onAddTask(task);
  };

  return (
    <>
      <div>{checked && <Loading />}</div>

      <ButtonReuse action={handleAdd} styleClass={classes.addBtn} />

      {success && <TransitionAlertsSuccess />}
      {error && <TransitionAlertsError />}
    </>
  );
}

export default AddTask;
