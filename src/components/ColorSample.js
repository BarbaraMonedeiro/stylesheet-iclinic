import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core";

import theme from "../theme";

export default function Color() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box color="primary.light">
            <Typography variant="body1" gutterBottom>
              primary.light
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box color="primary.main">
            <Typography variant="body1" gutterBottom>
              primary.main
            </Typography></Box>
        </Grid>
        <Grid item>
          <Box color="primary.dark">
            <Typography variant="body1" gutterBottom>
              primary.dark
            </Typography></Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box color="secondary.light">
            <Typography variant="body1" gutterBottom>
              secondary.light
            </Typography></Box>
        </Grid>
        <Grid item>
          <Box color="secondary.main"><Typography variant="body1" gutterBottom>
              secondary.main
            </Typography></Box>
        </Grid>
        <Grid item>
          <Box color="secondary.dark"><Typography variant="body1" gutterBottom>
              secondary.dark
            </Typography></Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box color="error.light">
            <Typography variant="body1" gutterBottom>
              error.light
            </Typography></Box>
        </Grid>
        <Grid item>
          <Box color="error.main">
            <Typography variant="body1" gutterBottom>
              error.main
            </Typography></Box>
        </Grid>
        <Grid item>
          <Box color="error.dark">
            <Typography variant="body1" gutterBottom>
              error.dark
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box color="text.primary">
            <Typography variant="body1" gutterBottom>
              text.primary
            </Typography></Box>
        </Grid>
        <Grid item>
          <Box color="text.secondary"><Typography variant="body1" gutterBottom>
              text.secondary
            </Typography></Box>
        </Grid>
        <Grid item>
          <Box color="text.disabled"><Typography variant="body1" gutterBottom>
              text.disabled
            </Typography></Box>
        </Grid>
        <Grid item>
          <Box color="text.hint"><Typography variant="body1" gutterBottom>
              text.hint
            </Typography></Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="primary.light"
          >
            <Typography variant="body1" gutterBottom>
            primary.light
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="primary.main"
          >
            <Typography variant="body1" gutterBottom>
            primary.main
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="primary.dark"
          >
            <Typography variant="body1" gutterBottom>
            primary.dark
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="secondary.light"
          >
            <Typography variant="body1" gutterBottom>
            secondary.light
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="secondary.main"
          >
            <Typography variant="body1" gutterBottom>
            secondary.main
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="secondary.dark"
          >
            <Typography variant="body1" gutterBottom>
            secondary.dark
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="error.light"
          >
            <Typography variant="body1" gutterBottom>
            error.light
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="error.main"
          >
            <Typography variant="body1" gutterBottom>
            error.main
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="error.dark"
          >
            <Typography variant="body1" gutterBottom>
            error.dark
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="success.light"
          >
            <Typography variant="body1" gutterBottom>
            success.light
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="success.main"
          >
            <Typography variant="body1" gutterBottom>
            success.main
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="success.dark"
          >
            <Typography variant="body1" gutterBottom>
            success.dark
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="warning.light"
          >
            <Typography variant="body1" gutterBottom>
            warning.light
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="warning.main"
          >
            <Typography variant="body1" gutterBottom>
            warning.main
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="warning.dark"
          >
            <Typography variant="body1" gutterBottom>
            warning.dark
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="text.primary"
            color="primary.contrastText"
          >
            <Typography variant="body1" gutterBottom>
            text.primary
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="text.secondary"
          >
            <Typography variant="body1" gutterBottom>
            text.secondary
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="text.disabled"
          >
            <Typography variant="body1" gutterBottom>
            text.disabled
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Box
            style={{ width: "8rem", height: "2rem" }}
            p={1}
            bgcolor="text.hint"
          >
            <Typography variant="body1" gutterBottom>
            text.hint
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
