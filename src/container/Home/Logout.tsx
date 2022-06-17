import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import useStyles from "./style";

function Logout() {
  const classes = useStyles();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <Button
      variant="contained"
      className={classes.logOutBtn}
      onClick={handleLogout}
    >
      <p className={classes.logOut}> Logout</p>
    </Button>
  );
}

export default Logout;
