const connect = require('./connection')

class ProjectModel {

    constructor(ProjectModel) {
        this.project_id = ProjectModel.project_id;
        this.project_name = ProjectModel.project_name;
        this.dept_id = ProjectModel.dept_id;
        this.difficulty = ProjectModel.difficulty;
        this.ins_tm = ProjectModel.ins_tm;
        this.upd_tm = ProjectModel.upd_tm;
        this.version = ProjectModel.version;
    }


    static listProject(results) {
        const sql = "SELECT * FROM project";
        connect.query(
            sql,
            (err, result) => {
                if (err) {
                    console.log("error: ", err);
                    return results(err, null);
                }
                return results(null, result);
            }
        )
    }


    static createProject(project, results) {
        const sql = 'INSERT INTO project SET ?'
        connect.query(
            sql,
            project,
            (err) => {
                if (err) {
                    console.log("error: ", err);
                    return results(err, null);
                }
                return results(null, project);
            }
        )
    }


    static searchProject(inputSearch, results) {
        const sql = "SELECT * FROM project WHERE project_id = ? OR project_name LIKE CONCAT( ? ) or difficulty LIKE CONCAT( ? ) or dept_id = ?"

        connect.query(
            [inputSearch, inputSearch, inputSearch, inputSearch],
            (err, result) => {
                if (err) {
                    console.log("error: ", err);
                    return results(err, null);
                }
                return results(null, result);
            }
        )
    }


    static deleteById(id, results) {
        const sql = "DELETE FROM project WHERE project_id = ?"
        connect.query(
            sql,
            id,
            (err, result) => {
                if (err) {
                    console.log("error: ", err);
                    return results(err, null);
                }
                return results(null, result);
            }
        )
    }


    static updateByID(project, results) {
        const sql = "UPDATE project SET ? WHERE project_id = ?"
        connect.query(
            sql,
            [project, project.project_id],
            (err, result) => {
                if (err) {
                    console.log("error: ", err);
                    return results(err, null);
                }
                return results(null, result);
            }
        )
    }

}

module.exports = ProjectModel;