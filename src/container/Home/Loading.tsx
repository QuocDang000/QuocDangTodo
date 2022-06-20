import LoadingButton from "@mui/lab/LoadingButton";

import useStyles from "./style";

function Loading() {
  const classes = useStyles();

  return (
    <LoadingButton loading variant="outlined" className={classes.loadingBtn}>
      Submit
    </LoadingButton>
  );
}

export default Loading;
