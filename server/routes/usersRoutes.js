const express = require("express");
const usersRoutes = express.Router();

const {
    createUsers,
    userLogin,
    userLoggedOut,
    ResetPassOne,
    ResetPassTwo,
    uploadProfilePic,
    getUserInfo,
    changeUserInfo,
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

usersRoutes.get("/:user_id", getUserInfo);

usersRoutes.put("/change_userInfo", changeUserInfo);

module.exports = { usersRoutes };
