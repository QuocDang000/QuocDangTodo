import { Box, Grid } from "@mui/material";
import PanToolIcon from "@mui/icons-material/PanTool";

import Logout from "../container/Home/Logout";
import useStyles from "../container/Home/style";

export function Header() {
  const classes = useStyles();

  return (
    <Grid className={classes.header} container spacing={3}>
      <Grid item xs={4}>
        <Box>
          <div className={classes.content}>
            <h3>
              Hi Shobhit
              <PanToolIcon />
            </h3>
            <p className={classes.taskState}>tasks pending</p>
          </div>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box>
          <div>
            <h1 className={classes.title}>TaskDo</h1>
          </div>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Logout />
      </Grid>
    </Grid>
  );
}
