const express = require("express");
const usersRoutes = express.Router();

const { s3Upload } = require("../utilities/S3_config");
const { uploader } = require("../utilities/uploader_config");

const {
    createUsers,
    userLogin,
    userLoggedOut,
    ResetPassOne,
    ResetPassTwo,
    uploadProfilePic,
    getUserInfo,
    changeUserInfo,
    checkloggedIn,
} = require("../middlewares/usersRoutesHandler");

usersRoutes.post("/signUp", createUsers);
usersRoutes.post("/login", userLogin);
usersRoutes.post("/logout", userLoggedOut);

usersRoutes.post("/resetPass/step1", ResetPassOne);
usersRoutes.post("/resetPass/step2", ResetPassTwo);
usersRoutes.post(
    "/profile/upload_profile_pic",
    uploader.single("file"),
    s3Upload,
    uploadProfilePic
);

usersRoutes.get("/profile/:user_id", getUserInfo);
usersRoutes.get("/checkLogin", checkloggedIn);

usersRoutes.put("/change_userInfo", changeUserInfo);

module.exports = { usersRoutes };
