import React from "react";

import { MuiThemeProvider } from "@material-ui/core/styles";
import { Container, Box, Paper, Typography } from "@material-ui/core";

import DynamicTable from "./DynamicTable";

import THEMES from "../const/theme";
import RESOURCES from "../const/resources";

import "./style.css";

export const App = () => {
  return (
    <MuiThemeProvider theme={THEMES.primary}>
      <Container className="app" fixed>
        <Paper className="app__box">
          <Typography variant="h4">Users</Typography>
          <DynamicTable resource={RESOURCES.USERS} />
        </Paper>

        <Paper className="app__box">
          <Typography variant="h4">Projects</Typography>
          <DynamicTable resource={RESOURCES.PROJECTS} />
        </Paper>
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
