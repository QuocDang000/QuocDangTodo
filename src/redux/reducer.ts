import {
  ADD_TASK_ERROR,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,

  DELETE_TASK_ERROR,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,

  FETCH_TASK_ERROR,
  FETCH_TASK_REQUEST,
  FETCH_TASK_SUCCESS,

  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  
  UPDATE_TASK_ERROR,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
} from "./actions/actions";

const initialState = {
  todoList: [],
  checked: true,
  error: "",
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_TASK_REQUEST:
      return {
        ...state,
        checked: true,
      };
    case FETCH_TASK_SUCCESS:
      return {
        ...state,
        todoList: action.payload,
        checked: false,
      };
    case FETCH_TASK_ERROR:
      return {
        ...state,
        error: action.payload,
        checked: false,
      };

    case ADD_TASK_REQUEST:
      return {
        ...state,
        checked: true,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
        checked: false,
      };
    case ADD_TASK_ERROR:
      return {
        ...state,
        error: action.payload,
        checked: false,
      };

    case DELETE_TASK_REQUEST:
      return {
        ...state,
        checked: true,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        todoList: state.todoList.filter((item) => item._id !== action.payload),
        checked: false,
      };
    case DELETE_TASK_ERROR:
      return {
        ...state,
        error: action.payload,
        checked: false,
      };

    case UPDATE_TASK_REQUEST:
      return {
        ...state,
        checked: true,
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item._id === action.payload._id
            ? { ...item, completed: action.payload.completed }
            : item
        ),
        checked: false,
      };
    case UPDATE_TASK_ERROR:
      return {
        ...state,
        error: action.payload,
        checked: false,
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        checked: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        checked: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
        checked: false,
      };

    default:
      return state;
  }
};

export default rootReducer;
