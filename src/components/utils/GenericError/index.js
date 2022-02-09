import { Typography } from "@material-ui/core";
import React from "react";

import "./style.css";

const GenericError = () => (
  <Typography className="generic-error" color="error">
    We had problems fetching your data. Please try again
  </Typography>
);

export default GenericError;
