import useStyles from "./style";
import {
  Grid,
  Box,
  Button,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Modal,
} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
// import Skeleton from "react-loading-skeleton";
import PanToolIcon from "@mui/icons-material/PanTool";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TodoItem from "./TodoItems";
import { useState } from "react";
import { useEffect } from "react";
import { json } from "stream/consumers";
import Logout from "./Logout";
import axios from "axios";
// import Pagination from "./Pagination";
import LoadingButton from "./Loading";
// import LoadingButton from "@mui/lab/LoadingButton";
import Skeleton from "@mui/material/Skeleton";
import ButtonComponent from "./Add";
import AddTask from "./Add";
import { postTask } from "./Add/until";
import { Description } from "@mui/icons-material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

// import Pagination from "./Pagination";

function HomePage() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [checked, setChecked] = useState(true);
  const [itemNumber, setItemNumber] = useState(10);
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  // const [tasks, setTasks] = useState([]);

  const [isAdd, setIsAdd] = useState(false);

  console.log("task", task);
  console.log("error", error);
  console.log("success", success);

  // console.log("tasks", tasks);

  // var storageTask = JSON.parse(localStorage.getItem("task"));
  // console.log("storage", storageTask);

  // const [pagination, setPagination] = useState({
  //     skip: 1,
  //     limit: 10,
  // })

  // console.log("posts", posts);
  // console.log("pageCount", pageCount);

  // const handleChange = (e) => {
  //   setItemNumber(e.target.value);
  //   setChecked(true);
  // };

  // const handleClickNext = async () => {
  //   setPageCount((pageCount) => pageCount + 1);
  //   setChecked(true);

  //   console.log("Next");
  // };

  // const handleClickPrev = async () => {
  //   setPageCount((pageCount) => pageCount - 1);
  //   setChecked(true);

  //   console.log("Prev");
  // };

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

  // const handleChange = (e) => {
  //   setTask(e.target.value)
  //   console.log("value");
  // }

  const handleAddTask = async () => {
    // values.preventDefault();

    // setTasks((prev) => {
    //   const newTask = [...prev, task];
    //   return newTask;
    // });
    // setTasks((prev) => [...prev, task]);

    // setTask(e.target.value)
    setIsAdd(true);
    // setSuccess("");

    setTask("");

    try {
      const response = await postTask(task);
      console.log("response file index", response.data.data.description);
      setSuccess(true)
      // setSuccess(response);
    } catch (error) {
      setError(true)
    }
  };

  const handleDelete = () => {
    console.log("aaa");
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

      // console.log("data", data);
      setPosts(data.data.data);
      return data;
    }
    getListTask();
  }, [pageCount, itemNumber, isAdd]);

  return (
    <div>
      <div>{checked ? <LoadingButton /> : ""}</div>

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
          <ul>
            {/* <div>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Person Name:
                  <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <button type="submit">Add</button>
              </form>
            </div> */}

            <div>
              <input
                type="text"
                onChange={(e) => setTask(e.target.value)}
                value={task}
                // onChange={handleChange}
              />
              <button className={classes.addBtn}>
                <AddTask handleAddTask={handleAddTask} />
                {/* <Stack sx={{ width: "100%" }} spacing={2}> */}
                {/* {error ? <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  This is an error alert — <strong>check it out!</strong>
                </Alert> : ""} */}

                {/* setTimeout(() => { */}
                  {/* success ? <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  This is an success alert — <strong>check it out!</strong>
                </Alert> : "" */}
                {/* }, 3000); */}
                
                {/* {
    setSuccess( 
    
    <Alert severity="success">
    <AlertTitle>Success</AlertTitle>
    This is a success alert — <strong>check it out!</strong>
  </Alert>)
  } */}

                {/* </Stack> */}
              </button>
            </div>

            {posts.map((post, id) =>
              checked ? (
                <Skeleton variant="text" />
              ) : (
                <li className={classes.li} key={id}>
                  <TodoItem title={post.description} />
                </li>
              )
            )}

            {/* {tasks.map((task, id) =>
              checked ? (
                <Skeleton variant="text" />
              ) : (
                <li className={classes.li} key={id}>
                  <TodoItem title={task} handleDelete={handleDelete} />
                </li>
              )
            )} */}
          </ul>
        </div>
      </div>

      <div className={classes.controlPage}>
        {/* <button className={classes.controlPage}> */}
        {/* <Pagination
          pageCount={pageCount}
          handleClickNext={handleClickNext}
          handleClickPrev={handleClickPrev}
        /> */}

        {/* <Box className={classes.itemNumber} sx={{ minWidth: 100}}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Page</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={itemNumber}
              label="Number"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box> */}

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
