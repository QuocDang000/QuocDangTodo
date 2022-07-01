import { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Box, TextField, TablePagination } from "@mui/material";

import Loading from "./Loading";
import AddTask from "./Add/AddTask";
import { Header } from "../../Header/Header";
import TodoList from "../../TodoList/TodoList";
import {
  addTasks,
  deleteTasks,
  fetchTask,
  updateTask,
} from "../../../redux/actions/actions";

import useStyles from "./style";

function HomePage({ GetUsers, AddTasks, DeleteTasks, UpdateTasks }) {
  const classes = useStyles();
  const [pageCount, setPageCount] = useState(1);
  const [itemNumber, setItemNumber] = useState(10);
  const [task, setTask] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const posts = useSelector((state: any) => state?.task || []);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPageCount(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setItemNumber(parseInt(event.target.value, 10));
    setPageCount(0);
  };

  const handleAddTask = () => {
    AddTasks({ description: task });
    setTask("");
  };

  const handleUpdatePost = (id: any, status: any) => {
    UpdateTasks(id, status);
  };

  const handleDelete = (id: any) => {
    DeleteTasks(id);
  };

  useEffect(() => {
    GetUsers({ itemNumber, pageCount });
  }, [pageCount, itemNumber, isAdd]);

  return (
    <div>
      <div>{posts.checked && <Loading />}</div>

      <Header />

      <div className={classes.body}>
        <div>
          <div className={classes.textFieldBox}>
            <Box
              sx={{
                width: 300,
                maxWidth: "100%",
              }}
            >
              <TextField
                className={classes.textField}
                fullWidth
                label="New Task"
                id="fullWidth"
                onChange={(e) => setTask(e.target.value)}
                value={task}
              />
            </Box>

            <AddTask onAddTask={handleAddTask} posts={posts} task={task} />
          </div>

          <TodoList
            posts={posts.todoList}
            checked={posts.checked}
            handleDelete={handleDelete}
            handleUpdatePost={handleUpdatePost}
          />
        </div>
      </div>

      <div className={classes.controlPage}>
        <TablePagination
          component="div"
          count={100}
          page={pageCount}
          onPageChange={handleChangePage}
          rowsPerPage={itemNumber}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({ 
})
const mapDispacthToProps = (dispatch: any) => {
  return {
    GetUsers: (action: any) => dispatch(fetchTask(action)),
    AddTasks: (task: any) => dispatch(addTasks(task)),
    DeleteTasks: (id: any) => dispatch(deleteTasks(id)),
    UpdateTasks: (id: any, status: any) => dispatch(updateTask(id, status)),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(HomePage);
