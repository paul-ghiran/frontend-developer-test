import { useState } from "react";

import { FUNCTIONS_MAP, mapData } from "../helpers";
import STATUSES from "../../const/statuses";

const useDataProvider = (resource) => {
  const [localTotal, setLocalTotal] = useState(-1);
  const [localData, setLocalData] = useState([]);
  const [localStatus, setLocalStatus] = useState(STATUSES.INITIAL);
  const [localError, setLocalError] = useState("");

  const fetchData = FUNCTIONS_MAP.fetchData[resource];

  const getData = () => {
    setLocalStatus(STATUSES.LOADING);
    fetchData().then(
      ({ data, total }) => {
        setLocalStatus(STATUSES.LOADED);
        setLocalData([...localData, ...mapData(data)]);
        setLocalTotal(total);
        setLocalError("");
      },
      ({ error }) => {
        setLocalStatus(STATUSES.ERROR);
        setLocalError(error);
      }
    );
  };

  return {
    state: { data: localData, status: localStatus, error: localError, total: localTotal },
    fetchData: getData,
  };
};

export default useDataProvider;
