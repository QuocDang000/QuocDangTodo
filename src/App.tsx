import { ThemeProvider } from "@emotion/react";
import { StyledEngineProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./container/Login";
import Home from "./container/Home";
import { useHistory } from "react-router-dom";

const theme = createTheme({});
function App() {
  const history = useHistory();
  const token = localStorage.getItem("token");
  console.log("token: ", token);
  useEffect(() => {
    if (!token) {
      <Redirect
        to={{
          pathname: "/login",
        }}
      />;
    } 
    // else {
    //   <Redirect
    //     to={{
    //       pathname: "/home",
    //     }}
    //   />;
    // }
  }, [token]);

  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
          </Switch>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
