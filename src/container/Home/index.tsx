import { useState, useEffect } from "react";
import { Grid, Box, Button, IconButton, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TablePagination from "@mui/material/TablePagination";
import PanToolIcon from "@mui/icons-material/PanTool";
import Skeleton from "@mui/material/Skeleton";
import LoadingButton from "./Loading";
import AddTask from "./Add/AddTask";
import { postTask } from "./Add/until";
import TransitionAlertsError from "./Alert/AlertError";
import TransitionAlertsSuccess from "./Alert/AlertSuccess";
import { deleteTask } from "./Delete/until";
import useStyles from "./style";
import TodoItem from "./TodoItems";
import Logout from "./Logout";
import axios from "axios";

function HomePage() {
  const classes = useStyles();
  const [posts, setPosts] = useState<Array<any>>([]);
  const [pageCount, setPageCount] = useState(1);
  const [checked, setChecked] = useState(true);
  const [itemNumber, setItemNumber] = useState(10);
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isAdd, setIsAdd] = useState(false);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPageCount(newPage);
    setChecked(true);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setItemNumber(parseInt(event.target.value, 10));
    setPageCount(0);
    setChecked(true);
  };

  const handleAddTask = async (listPost) => {
    setIsAdd(true);
    setTask("");
    setPosts(listPost);

    try {
      await postTask(task);
      setSuccess(true);
    } catch (error) {
      setError(true);
    }
  };

  const handleUpdatePost = (newPosts) => {
    setPosts(newPosts);
  };

  const handleDelete = async (id: any) => {
    const newPosts = [...posts];

    newPosts.splice(id, 1);
    setPosts(newPosts);

    try {
      await deleteTask(id);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    async function getListTask() {
      const data: any = await axios.get(
        `https://api-nodejs-todolist.herokuapp.com/task?limit=${itemNumber}&skip=${pageCount}`,
        {
          headers: {
            Authorization: localStorage.token,
          },
        }
      );
      setChecked(false);
      setPosts(data.data.data);
      return data;
    }
    getListTask();
  }, [pageCount, itemNumber, isAdd]);

  return (
    <div>
      <div>{checked && <LoadingButton />}</div>

      <Grid className={classes.header} container spacing={3}>
        <Grid item xs={4}>
          <Box>
            <div className={classes.content}>
              <h3>
                Hi Shobhit
                <PanToolIcon />
              </h3>
              <p className={classes.taskState}>4 tasks pending</p>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <div>
              <h1 className={classes.title}>TaskDo</h1>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Logout />
        </Grid>
      </Grid>

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
            {success && <TransitionAlertsSuccess />}
            {error && <TransitionAlertsError />}
          </div>
          <ul>
            <div className={classes.li}>
              {posts.map((post, index) =>
                checked ? (
                  <Skeleton variant="text" />
                ) : (
                  <li className={classes.liItem} key={index}>
                    <div className={classes.item}>
                      <IconButton
                        className={classes.iconDelete}
                        aria-label="delete"
                        size="large"
                      >
                        <DeleteIcon
                          fontSize={"large"}
                          onClick={() => handleDelete(post._id)}
                        />
                      </IconButton>

                      <TodoItem
                        title={post.description}
                        id={post._id}
                        status={post.completed}
                        onUpdatePost={handleUpdatePost}
                        posts={posts}
                      ></TodoItem>
                    </div>
                  </li>
                )
              )}
            </div>
          </ul>
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

export default HomePage;
