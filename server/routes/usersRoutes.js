const express = require("express");
const usersRoutes = express.Router();

const { s3Upload } = require("../utilities/S3_config");
const { uploader } = require("../utilities/uploader_config");
const errorHandler = require("../middlewares/errorHandler");

const {
    createUsers,
    userLogin,
    userLoggedOut,
    ResetPassOne,
    ResetPassTwo,
    uploadProfilePic,
    getUserInfo,
    editUserInfo,
    checkloggedIn,
} = require("../middlewares/usersRoutesHandler");

usersRoutes.post("/signup", createUsers, errorHandler);
usersRoutes.post("/login", userLogin, errorHandler);
usersRoutes.post("/logout", userLoggedOut);

usersRoutes.post("/resetPass/step1", ResetPassOne, errorHandler);
usersRoutes.post("/resetPass/step2", ResetPassTwo, errorHandler);
usersRoutes.post(
    "/profile/upload_profile_pic",
    uploader.single("file"),
    s3Upload,
    uploadProfilePic,
    errorHandler
);

usersRoutes.get("/profile/:user_id", getUserInfo, errorHandler);
usersRoutes.get("/checkLogin", checkloggedIn);

usersRoutes.put("/edit_userInfo", editUserInfo, errorHandler);

module.exports = { usersRoutes };
