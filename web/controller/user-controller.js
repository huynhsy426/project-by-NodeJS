import {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} from 'http-status-codes';



const {
    loginByUserService,
    createUserService
} = require('../services/userService')


// list Project
const listUsers = (req, res) => {

};


// login
const loginByUser = (req, res) => {
    console.log(req.body, "body")
    console.log('aaaa');
    const { user_name, user_password } = req.body;
    loginByUserService(
        user_name,
        user_password,
        function (err, result) {
            if (err) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    errorMessage: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)

                })
            }
            if (result) {
                session = req.session;
                session.username = user_name;
                session.password = user_password;
                session.loggedIn = true;
                return res.status(StatusCodes.OK).json({
                    loginMessage: "Login successful"
                })
            }
        }
    )
};


// Logout
const logOutUser = (req, res) => {
    console.log(req);
    req.session.destroy();
    return res.status(StatusCodes.OK).json({
        loginMessage: "Logout successful"
    })
};


// create Project
const createUser = (req, res) => {
    const users = {
        userId: req.body.userId,
        full_name: req.body.full_name,
        user_name: req.body.user_name,
        user_password: req.body.user_password,
        email: req.body.email,
        phone: req.body.phone
    }



    createUserService(
        users,
        function (err, result, userCreate) {
            if (err) {
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                    errorMessage: err
                })
            }
            if (!result) {
                return res.status(StatusCodes.OK).json({
                    registerMessage: " Register successfully"
                })
            } else {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    registerMessage: "user name is exist"
                })
            }
        }
    )

};


// Search Project
const searchUser = (req, res) => {

};


// delete project
const deleteById = (req, res) => {

};


// Update project
const updateByID = (req, res) => {

};


module.exports = {
    listUsers,
    createUser,
    searchUser,
    deleteById,
    updateByID,
    loginByUser,
    logOutUser
}