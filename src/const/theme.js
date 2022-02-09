import { createMuiTheme } from "@material-ui/core/styles";

const primaryTheme = createMuiTheme({
  palette: {
    primary: { main: "#2197f3" }, // took this out of the design screenshot
    error: {main: "#f54e42"}
  },
});

const THEMES = {
  primary: primaryTheme,
};

export default THEMES;
