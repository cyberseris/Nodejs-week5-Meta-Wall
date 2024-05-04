const User = require("../models/usersModel");

const getUserController = async function (req, res, next) {
    let user = "";
    let keywordFilter = {};

    if (req.query.Keyword) {
        keywordFilter.userName = new RegExp(req.query.Keyword);
    }
    try {
        user = await User.find(keywordFilter);
        res.status(200).json({
            success: true,
            message: "搜尋成功",
            user
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "查詢異常",
            errMsg: err.message
        });
    }
};

const createUserController = async function (req, res, next) {
    try {
        const newUser = await User.create(req.body);
        res.status(200).json({
            success: true,
            message: "新增用戶成功",
            post: newUser
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: "新增用戶失敗",
            errMsg: err.message
        });
    }
};

module.exports = {
    getUserController: getUserController,
    createUserController: createUserController
}