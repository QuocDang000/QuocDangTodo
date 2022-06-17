import { Box, Button, CircularProgress, Grid, Stack } from "@mui/material";
import { TextField } from "@mui/material";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputAdornment from "@mui/material/InputAdornment";
// import IconButton from "@mui/material/IconButton";
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useStyles from "./styles";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { getApi } from "./until";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { LoadingButton } from '@mui/lab';
import { Formik, Form, Field, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

function Login() {
  const classes = useStyles();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [error , setError] = useState('')
  let history = useHistory();

  // const handleChangeEmail = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleChangePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleLogin = async () => {
  //   console.log("da clock ");

    // setChecked(true);
    // const response = await getApi(email, password);
    // console.log("response file index", response);
    // localStorage.setItem("token", response);
    // history.push("/home");
  // };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().min(7).max(255).required(),
      password: Yup.string().min(7).max(255).required(),
    }),
    onSubmit: async (values) => {
      setChecked(true);

      try {
        const response = await getApi(values.email, values.password);
        localStorage.setItem("token", response);
        console.log("response file index", response);
        // console.log("erros", response.request.status);
        history.push("/home");
      } catch (error) {
        // console.log('error', error.response.data)
        setError(error.response.data);
      }

    },
  });

  return (
    <div className={classes.wrapper}>
      <Grid className={classes.wrapperColumn} container spacing={2}>
        <Grid className={classes.columnLeft} item xs={6}>
          <Box className={classes.wrapper_content}>
            <div className={classes.introduce}>
              <div className={classes.title}>
                <h2>Sign in to</h2>
                <h3>Lorem Ipsum is sipmly</h3>
              </div>
              <div className={classes.content}>
                <p>If you don't have an account register</p>
                <p>
                  You can <a href="">Register here !</a>
                </p>
              </div>
            </div>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Box className={classes.formInput}>
            <h3>Sign in</h3>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                // onChange={() => handleChangeEmail}
                fullWidth
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className={classes.mailInput}
                placeholder="Enter your email"
                label="Your email"
                value={formik.values.email}
                name="email"
                error={Boolean(formik.touched.email && formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <br></br>

              <TextField
                // onChange={() => handleChangePassword}
                className={classes.passwordInput}
                onBlur={formik.handleBlur}
                placeholder="Password"
                label="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
                helperText={formik.touched.password && formik.errors.password}
              />
              <p className={classes.contentPassword}>forgot password ?</p>
              
              <div >
              <Button 
                className={classes.submitBtn} type="submit" variant="contained" 
                >
                {checked ? <CircularProgress /> : "Login"}
              </Button>
                <p className={classes.notiContent}>{error}</p>
              </div>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
