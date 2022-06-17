import ControlledCheckbox from "./UpdateTask/CheckBox";
import useStyles from "./style";

function TodoItems({ title, id, status, onUpdatePost, posts }: any) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.item}>
        <ControlledCheckbox
          id={id}
          status={status}
          onUpdatePost={onUpdatePost}
          posts={posts}
        />
        <p>{title}</p>
      </div>

      <p>Status: {status ? "SUCCESS" : "ERROR"} </p>
    </>
  );
}

export default TodoItems;
