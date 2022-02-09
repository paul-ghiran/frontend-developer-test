
import api from "../lib/api";

const ProjectsAPI = {
  getProjectChanges: api.getProjectsDiff,
};

export default ProjectsAPI;
