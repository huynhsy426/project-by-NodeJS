const ProjectModel = require("../models/projectModel")
const { listProjectService } = require("../services/projectService")

// list Project
const listProject = (req, res) => {
    listProjectService(
        function (err, result) {
            console.log(result)
            if (err) {
                return res.status(200).json({
                    errorMessage: err
                })
            }
            return res.status(200).json({
                projectList: result
            })
        }
    )
}

// create Project
const createProject = (req, res) => {
    const today = new Date();
    const rojectModel = {
        project_id: req.body.project_id,
        project_name: req.body.project_name,
        dept_id: req.body.dept_id,
        difficulty: req.body.difficulty,
        ins_tm: today.getDate(),
        upd_tm: '',
        version: req.body.version
    }

    ProjectModel.createProject = (req, res) => {

    }
}


// Search Project
const searchProject = (req, res) => {

}


// delete project
const deleteById = (req, res) => {

}


// Update project
const updateByID = (req, res) => {

}


module.exports = {
    listProject,
    createProject,
    searchProject,
    deleteById,
    updateByID
}