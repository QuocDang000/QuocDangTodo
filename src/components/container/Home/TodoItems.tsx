import ControlledCheckbox from "./UpdateTask/CheckBox";

import useStyles from "./style";

function TodoItems({ title, ...props }: any) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.item}>
        <ControlledCheckbox {...props} />
        <p>{title}</p>
      </div>
    </>
  );
}

export default TodoItems;
