import {
    StatusCodes
} from 'http-status-codes';



const {
    listDeptsService,
    createDeptService,
    searchDeptService,
    deleteByIdService,
    updateByIdService
} = require('../services/deptService')


// list depts
const listDepts = (req, res) => {
    listDeptsService(
        function (err, result) {
            if (err) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    errorMessage: err
                })
            }

            return res.status(StatusCodes.OK).json({
                deptList: result
            })
        }
    )
}


const createDept = (req, res) => {

    const deptModel = {
        dept_id: req.body.dept_id,
        dept_name: req.body.dept_name
    }

    createDeptService(
        deptModel,
        (err, result) => {
            if (err) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    errorMessage: err
                })
            }

            if (result === 'isExistName') {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    CreateMessage: "dept Name is exist"
                })
            }

            if (result) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    CreateMessage: "Duplicate dept"
                })
            } else {
                return res.status(StatusCodes.OK).json({
                    CreateMessage: "Dept is created successfully"
                })
            }
        }
    )
}


const searchDept = (req, res) => {
    searchDeptService(
        req.query.inputName,
        function (err, searchResult) {
            if (err) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    errorMessage: err
                })
            }

            return res.status(StatusCodes.OK).json({
                deptList: searchResult
            })
        }
    )
}


const deleteById = (req, res) => {
    deleteByIdService(
        req.params.dept_id,
        function (err, result) {
            if (err) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    errorMessage: err
                })
            }

            if (!result) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    errorMessage: "Dept not found"
                })
            }
            return res.status(StatusCodes.OK).json({
                deptList: result,
                successMessage: "Delete dept successfully"
            })
        }
    )
}


const updateById = (req, res) => {
    const deptModel = {
        dept_id: req.body.dept_id,
        dept_name: req.body.dept_name
    }

    updateByIdService(
        deptModel,
        function (err, result) {
            if (err) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    errorMessage: err
                })
            }

            if (!result) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    errorMessage: "Dept not found"
                })
            }
            return res.status(StatusCodes.OK).json({
                deptList: result,
                successMessage: "Delete dept successfully"
            })
        }
    )
}

module.exports = {
    listDepts,
    createDept,
    searchDept,
    deleteById,
    updateById
}

