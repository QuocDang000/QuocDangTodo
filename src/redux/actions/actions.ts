import axios from "axios";

export const FETCH_TASK_REQUEST = "FETCH_TASK_REQUEST";
export const FETCH_TASK_SUCCESS = "FETCH_TASK_SUCCESS";
export const FETCH_TASK_ERROR = "FETCH_TASK_ERROR";

export const ADD_TASK_REQUEST = "ADD_TASK_REQUEST";
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";
export const ADD_TASK_ERROR = "ADD_TASK_ERROR";

export const DELETE_TASK_REQUEST = "DELETE_TASK_REQUEST";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const DELETE_TASK_ERROR = "DELETE_TASK_ERROR";

export const UPDATE_TASK_REQUEST = "UPDATE_TASK_REQUEST";
export const UPDATE_TASK_SUCCESS = "UPDATE_TASK_SUCCESS";
export const UPDATE_TASK_ERROR = "UPDATE_TASK_ERROR";

export const fetchTask = (action: any) => {
  const { itemNumber, pageCount } = action;

  return async (dispatch: any) => {
    dispatch({ type: FETCH_TASK_REQUEST });
    try {
      const data: any = await axios.get(
        `https://api-nodejs-todolist.herokuapp.com/task?limit=${itemNumber}&skip=${pageCount}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.token,
          },
        }
      );
      dispatch({
        type: FETCH_TASK_SUCCESS,
        payload: data.data.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_TASK_ERROR,
        payload: error,
      });
    }
  };
};

export const addTasks = (description: any) => {
  return async (dispatch: any) => {
    dispatch({ type: ADD_TASK_REQUEST });
    try {
      const res = await axios.post(
        "https://api-nodejs-todolist.herokuapp.com/task",
        description,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.token,
          },
        }
      );
      dispatch({
        type: ADD_TASK_SUCCESS,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: ADD_TASK_ERROR,
        payload: error,
      });
    }
  };
};

export const deleteTasks = (id: any) => {
  return async (dispatch: any) => {
    dispatch({ type: DELETE_TASK_REQUEST });
    try {
      await axios.delete(
        `https://api-nodejs-todolist.herokuapp.com/task/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.token,
          },
        }
      );
      dispatch({
        type: DELETE_TASK_SUCCESS,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: DELETE_TASK_ERROR,
        payload: error,
      });
    }
  };
};

export const updateTask = (id: any, status: any) => {
  return async (dispatch: any) => {
    dispatch({ type: UPDATE_TASK_REQUEST });
    try {
      const res = await axios.put(
        `https://api-nodejs-todolist.herokuapp.com/task/${id}`,
        {
          completed: status,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.token,
          },
        }
      );
      dispatch({
        type: UPDATE_TASK_SUCCESS,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_TASK_ERROR,
        payload: error,
      });
    }
  };
};
