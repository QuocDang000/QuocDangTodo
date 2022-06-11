import Box from "@mui/system/Box/Box";
import { useState } from "react";
import { getApi } from "../Login/until";
import useStyles from "./style";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Logout() {
  const classes = useStyles();
//   const [checked, setChecked] = useState(true);
  let history = useHistory();
//   console.log(checked);
//   useEffect(() => {
//     checked && localStorage.removeItem("token");
//   });

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <Box>
      <button className={classes.logOutBtn} onClick={handleLogout}>
        <p className={classes.logOut}> Logout</p>
      </button>
    </Box>
  );
}

export default Logout;

// export function import { json } from 'stream/consumers';
