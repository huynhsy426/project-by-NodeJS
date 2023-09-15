const connect = require('./connection')

class UserModel {

    constructor(UserModel) {
        this.userId = UserModel.UserId;
        this.full_name = UserModel.full_name;
        this.user_name = UserModel.user_name;
        this.user_password = UserModel.user_password;
        this.email = UserModel.email;
        this.phone = UserModel.phone;
    }


    // Check user login
    static checkUserLogin(user_name, user_password, results) {
        const sql = 'SELECT 1 FROM users WHERE user_name = ? AND user_password = ?'
        connect.query(
            sql,
            [user_name, user_password],
            (err, result) => {
                if (err) {
                    console.log("error: ", err);
                    return results(err, null);
                }
                return results(null, true);
            }
        )
    }

}

module.exports = UserModel;