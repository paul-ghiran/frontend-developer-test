/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Button, Box } from "@material-ui/core";

import useDataProvider from "../../data/DataProvider";

import SimpleTable from "./SimpleTable";
import Loader from "../utils/Loader/";
import GenericError from "../utils/GenericError/";

import TABLE_CONFIG from "../../const/tableConfig";
import STATUSES from "../../const/statuses";

import "./style.css";

const DynamicTable = ({ resource }) => {
  const { state, fetchData } = useDataProvider(resource);

  const { total, data, status, error } = state;

  const tableData = {
    headColumns: TABLE_CONFIG[resource],
    rows: state.data,
  };

  useEffect(() => {
    fetchData();
  }, []);

  const hasLoadedAll = data.length === total;
  const hasError = error;
  const isLoading = status === STATUSES.LOADING;
  const isButtonDisabled = hasLoadedAll || isLoading;

  return (
    <Box className="data-visualizer">
      <SimpleTable data={tableData} className="data-visualizer__table" />

      <Box py={2}>
        {hasError && <GenericError />}
        {isLoading ? (
          <Loader />
        ) : (
          <Button
            disabled={isButtonDisabled}
            variant="contained"
            color="primary"
            onClick={fetchData}
          >
            {hasError ? "Retry" : "Fetch More"}
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default DynamicTable;
