const { hashPassword } = require("../utilities/hashPass");
const loginCheck = require("../utilities/loginCheck");
const { createUser, getUserById } = require("../database/db");

const checkloggedIn = async (request, response) =>
    response.json({ user_id: request.session.user_id });

const createUsers = async (request, response, next) => {
    try {
        console.log("[createUsers: body]", request.body);
        const { first_name, last_name, email, password, repeat_password } =
            request.body;
        if (
            !first_name ||
            !last_name ||
            !email ||
            !password ||
            !repeat_password
        ) {
            response.status(400).json({
                message: "Please provide the requirements!",
            });
            return;
        }

        if (password !== repeat_password) {
            response.status(400).json({
                message: "Password is not match!",
            });
            return;
        }
        const hashed_password = await hashPassword(password);
        const user = await createUser({
            ...request.body,
            hashed_password,
        });
        console.log("[createUsers: user]", user);
        request.session.user_id = user.id;
        response.status(201).json({
            message: "User successfully created!",
            user,
        });
    } catch (error) {
        console.log("[createUsers: Error]", error);
        if (error.code === "ECONNREFUSED") {
            response
                .status(500)
                .json({ message: "Unable to connect to Database" });
            return;
        }
        next(error);
    }
};

const userLogin = async (request, response, next) => {
    try {
        const matchUser = await loginCheck({ ...request.body });
        if (!matchUser) {
            response
                .status(401)
                .json({ message: "Email or Password is wrong" });
            return;
        }
        request.session.user_id = matchUser.id;
    } catch (error) {
        console.log("[userLogin: Error]", error);
        next(error);
    }
};

const userLoggedOut = async (request, response, next) => {
    try {
        console.log("userLoggedOut");
    } catch (error) {
        console.log("[userLoggedOut: Error]", error);
        next(error);
    }
};

const ResetPassOne = async (request, response, next) => {
    try {
        console.log("ResetPassOne");
    } catch (error) {
        console.log("[ResetPassOne: Error]", error);
        next(error);
    }
};

const ResetPassTwo = async (request, response, next) => {
    try {
        console.log("ResetPassTwo");
    } catch (error) {
        console.log("[ResetPassTwo: Error]", error);
        next(error);
    }
};

const uploadProfilePic = async (request, response, next) => {
    try {
        console.log("uploadProfilePic");
    } catch (error) {
        console.log("[uploadProfilePic: Error]", error);
        next(error);
    }
};

const getUserInfo = async (request, response, next) => {
    try {
        console.log("getUserInfo: params", request.params);
        const user = await getUserById({ ...request.params });
        response.status(200).json({
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            profile_pic: user.profile_pic,
            about: user.about,
            city: user.city,
            created_at: user.created_at,
        });
    } catch (error) {
        console.log("[getUserInfo: Error]", error);
        next(error);
    }
};

const changeUserInfo = async (request, response, next) => {
    try {
        console.log("changeUserInfo");
    } catch (error) {
        console.log("[changeUserInfo: Error]", error);
        next(error);
    }
};

module.exports = {
    createUsers,
    userLogin,
    userLoggedOut,
    ResetPassOne,
    ResetPassTwo,
    uploadProfilePic,
    getUserInfo,
    changeUserInfo,
    checkloggedIn,
};
