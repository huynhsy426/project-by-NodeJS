const express = require('express');
const router = express.Router();
const {
    listProject,
    createProject,
    searchProject,
    deleteById,
    updateByID
} = require('../controller/project-controller');

// getListPage
router.get("/projectList", listProject)

router.post("/createProject", createProject)



module.exports = router