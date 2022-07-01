import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { Box } from "@mui/material";

import App from "./App";
import "./index.css";
import configureStore from "../src/redux/store";

let { store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Box>
      <App />
    </Box>
  </Provider>,
  document.getElementById("root")
);
