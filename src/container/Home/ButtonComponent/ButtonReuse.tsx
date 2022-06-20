import { Box, Button } from "@mui/material";

import AddBoxIcon from "@mui/icons-material/AddBox";

import useStyles from "../style";

export default function ButtonComponent({ action, styleClass }: any) {
  const classes = useStyles();

  return (
    <Button onClick={action} className={styleClass}>
      <Box display="flex" alignItems="center">
        <AddBoxIcon />
        <p>Add New Task</p>
      </Box>
    </Button>
  );
}
