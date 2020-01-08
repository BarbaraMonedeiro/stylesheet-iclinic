import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ThemeProvider } from "@material-ui/core";

import theme from "../theme";

export default function Height() {
  return (
    <ThemeProvider theme={theme}>
    <Grid container>
      <Box
        boxShadow={0}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: "8rem", height: "5rem" }}
      >
        <Typography variant="body1" gutterBottom>boxShadow={0}</Typography>
      </Box>
      <Box
        boxShadow={2}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: "8rem", height: "5rem" }}
      >
        <Typography variant="body1" gutterBottom>boxShadow={2}</Typography>
      </Box>
      <Box
        boxShadow={6}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: "8rem", height: "5rem" }}
      >
        <Typography variant="body1" gutterBottom>boxShadow={6}</Typography>
      </Box>
      <Box
        boxShadow={24}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: "8rem", height: "5rem" }}
      >
        <Typography variant="body1" gutterBottom>boxShadow={24}</Typography>
      </Box>
    </Grid>
    </ThemeProvider>
  );
}
