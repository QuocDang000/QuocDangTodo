import { useState, useEffect } from "react";

import {
  Grid,
  Box,
  IconButton,
  TextField,
  TablePagination,
  Skeleton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PanToolIcon from "@mui/icons-material/PanTool";
import axios from "axios";

import Loading from "./Loading";
import AddTask from "./Add/AddTask";
import { deleteTask } from "./Delete/until";
import TodoItem from "./TodoItems";
import Logout from "./Logout";

import useStyles from "./style";

function HomePage() {
  const classes = useStyles();
  const [posts, setPosts] = useState<Array<any>>([]);
  const [pageCount, setPageCount] = useState(1);
  const [checked, setChecked] = useState(true);
  const [itemNumber, setItemNumber] = useState(10);
  const [task, setTask] = useState("");
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
      <div>{checked && <Loading />}</div>

      <Grid className={classes.header} container spacing={3}>
        <Grid item xs={4}>
          <Box>
            <div className={classes.content}>
              <h3>
                Hi Shobhit
                <PanToolIcon />
              </h3>
              <p className={classes.taskState}>{itemNumber} tasks pending</p>
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
                      />
                    </div>

                    <div className={classes.status}>
                      <p>Status: {post.completed ? "Done" : "Pending"} </p>
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
