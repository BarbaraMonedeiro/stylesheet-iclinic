import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";

import theme from "../theme";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

export default function SimpleBackdrop() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
    <div>
      <button
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Show
      </button>
      <Backdrop
        className={classes.backdrop}
        open={open}
        onClick={() => {
          setOpen(false);
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
    </ThemeProvider>
  );
}
