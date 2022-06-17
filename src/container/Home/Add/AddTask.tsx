import { Button } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Box } from "@mui/system";
import useStyles from "../style";
import { postTask } from "./until";

function AddTask({ onAddTask, posts, task }: any) {
  const classes = useStyles();
  const handleAdd = async () => {
    try {
      const res = await postTask(task);
      const listBox = [res.data.data, ...posts];
      onAddTask(listBox);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Button onClick={handleAdd} className={classes.addBtn}>
      <Box display="flex" alignItems="center">
        <AddBoxIcon />
        <p>Add New Task</p>
      </Box>
    </Button>
  );
}

export default AddTask;
