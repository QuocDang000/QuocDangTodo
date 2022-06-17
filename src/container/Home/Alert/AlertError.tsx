import { useState } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export default function TransitionAlertsError() {
  const [open, setOpen] = useState(true);

  return (
    <Box
      sx={{
        width: "160px",
        position: "absolute",
        display: "inline-block",
        marginLeft: "100px",
      }}
    >
      <Collapse in={open}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Error
        </Alert>
      </Collapse>
    </Box>
  );
}
