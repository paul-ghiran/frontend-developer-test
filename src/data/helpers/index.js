import UsersAPI from "../../api/users";
import ProjectsAPI from "../../api/projects";
import RESOURCES from "../../const/resources";

const FUNCTIONS_MAP = {
  fetchData: {
    [RESOURCES.USERS]: UsersAPI.getUserChanges,
    [RESOURCES.PROJECTS]: ProjectsAPI.getProjectChanges,
  },
};

const formatDate = (timestamp) =>
  new Date(timestamp).toISOString().split("T")[0];

const mapData = (dataRows) =>
  dataRows.map(({ id, timestamp, diff }) => [
    formatDate(timestamp),
    id,
    diff[0].oldValue,
    diff[0].newValue,
  ]);

export { FUNCTIONS_MAP, mapData };
