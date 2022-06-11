import useStyles from "./style";
import LoadingButton from "@mui/lab/LoadingButton";

function Loading() {
  const classes = useStyles();

  return (
    <LoadingButton loading variant="outlined" className={classes.loadingBtn}>
      Submit
    </LoadingButton>
  );
}

export default Loading;
