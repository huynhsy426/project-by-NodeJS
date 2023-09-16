const ProjectModel = require("../models/projectModel")

const listProjectService = (results) => {
    ProjectModel.listProject(
        function (err, result) {
            console.log(result)
            if (err) {
                return results(err, null)
            }
            return results(null, result)
        }
    )
}

const createProjectService = (project, results) => {
    ProjectModel.createProject(
        project,
        function (err, result) {
            console.log(result)

        }
    )
}

module.exports = {
    listProjectService,
    createProjectService
}