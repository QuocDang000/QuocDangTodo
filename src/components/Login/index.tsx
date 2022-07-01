import { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { Box, Button, CircularProgress, Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import { getApi } from "./until";

import useStyles from "./styles";
import { fetchData } from "../../redux/actions/actions";

function Login({ GetData }) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().min(7).max(255).required(),
      password: Yup.string().min(7).max(255).required(),
    }),
    // onSubmit: async (values) => {
    //   setChecked(true);
    //   try {
    //     const response = await getApi(values.email, values.password);
    //     localStorage.setItem("token", response);
    //     history.push("/home");
    //     // GetData(values.email, values.password)
    //   } catch (error) {
    //     setError(error.response.data);
    //   }
    // },

    onSubmit: (values) => {
      setChecked(true);
      GetData(values.email, values.password);
      history.push("/home");
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

              <div>
                <Button
                  className={classes.submitBtn}
                  type="submit"
                  variant="contained"
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
const mapStateToProps = () => ({});

const mapDispacthToProps = (dispatch: any) => {
  return {
    GetData: (email: any, password: any) =>
      dispatch(fetchData(email, password)),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(Login);
