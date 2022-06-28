import { useEffect } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { StyledEngineProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import "./App.css";
import Login from "./components/Login";
import Home from "./components/container/Home";

const theme = createTheme({});
function App() {
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      <Redirect
        to={{
          pathname: "/login",
        }}
      />;
    } 
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
