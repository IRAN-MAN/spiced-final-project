const cryptoRandomString = require("crypto-random-string");

const resetPassEmail = require("../utilities/reset-pass-email");
const { hashPassword } = require("../utilities/hashPass");
const loginCheck = require("../utilities/loginCheck");

const {
    insertSecretCode,
    fetchSecretCode,
} = require("../database/resetCodesQueries");

const {
    createUser,
    getUserById,
    getUserByEmail,
    updateProfilePic,
    updateUser,
    updateUserWithPassword,
    updatePassword,
} = require("../database/usersQueries");

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
        response.status(201).json({ message: "login success" });
    } catch (error) {
        console.log("[userLogin: Error]", error);
        next(error);
    }
};

const userLoggedOut = async (request, response) => {
    request.session.user_id = null;
    response.status(200).json({ message: "logout successfull" });
};

const ResetPassOne = async (request, response, next) => {
    try {
        const user = await getUserByEmail(request.body);
        if (!user) {
            response.status(404).json({ message: "User Not Found!" });
            return;
        }
        const secret_code = cryptoRandomString({ length: 6 });
        const emailToSend = {
            sendTo: user.email,
            emailBody: renderhtmlBody(secret_code), //in line 197
            emailSubject: "Reset Password",
        };
        resetPassEmail(emailToSend);
        insertSecretCode({ ...user, secret_code });
        response.status(200).json({ message: "Success!" });
    } catch (error) {
        console.log("[ResetPassOne: Error]", error);
        next(error);
    }
};

const ResetPassTwo = async (request, response, next) => {
    try {
        const { reset_code, new_password, repeat_password } = request.body;
        const secret_code = await fetchSecretCode({ ...request.body });
        if (!secret_code || secret_code !== reset_code) {
            response.status(401).json({
                message: "This reset code is invalid, please use a new code.",
            });
            return;
        }
        if (new_password !== repeat_password) {
            response.status(400).json({
                message: "Password is not match!",
            });
            return;
        }
        const hashed_password = await hashPassword(new_password);
        await updatePassword({ ...request.body, hashed_password });
        response.status(201).json({ message: "Password Updated!" });
    } catch (error) {
        console.log("[ResetPassTwo: Error]", error);
        next(error);
    }
};

const uploadProfilePic = async (request, response, next) => {
    const { filename } = request.file;
    const imgURL = `https://community-cookbook.s3.amazonaws.com/${filename}`;
    try {
        const profilePicURL = await updateProfilePic({
            ...request.session,
            imgURL,
        });
        response.status(201).json(profilePicURL);
    } catch (error) {
        console.log("[uploadProfilePic: Error]", error);
        next(error);
    }
};

const getUserInfo = async (request, response, next) => {
    try {
        if (request.params.user_id === "-1") {
            const user = await getUserById({ ...request.session });
            console.log("[getUserById 114: user]", user);
            response.status(200).json(serializeUserInfo(user));
            return;
        }
        console.log("[session]", request.session);
        const user = await getUserById({ ...request.params });
        if (!user) {
            response.status(404).json({ message: "Such user does not exist!" });
        }
        console.log("[getUserById 119: user]", user);
        response.status(200).json(serializeUserInfo(user));
    } catch (error) {
        console.log("[getUserInfo: Error]", error);
        next(error);
    }
};

const editUserInfo = async (request, response, next) => {
    console.log("[editUserInfo: body]", request.body);
    const { new_password, repeat_password } = request.body;
    try {
        if (!new_password && !repeat_password) {
            const updatedUser = await updateUser({
                ...request.session,
                ...request.body,
            });
            console.log("updateUser", updatedUser);
            response.status(200).json(serializeUserInfo(updatedUser));
            return;
        }
        if (new_password !== repeat_password) {
            response.status(400).json({
                message: "Password is not match!",
            });
            return;
        }
        const hashed_password = await hashPassword(new_password);
        const updatedUserWithPass = await updateUserWithPassword({
            ...request.session,
            ...request.body,
            hashed_password,
        });
        console.log("[updateUserWithPassword]", updatedUserWithPass);
        response.status(200).json(serializeUserInfo(updatedUserWithPass));
    } catch (error) {
        console.log("[editUserInfo: Error]", error);
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
    editUserInfo,
    checkloggedIn,
};

const serializeUserInfo = (user) => {
    return {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        profile_pic: user.profile_pic,
        about: user.about,
        city: user.city,
        created_at: user.created_at,
    };
};

const renderhtmlBody = (secret_code) => {
    return `<html>
            <head></head>
            <body>
                <h2>Community Cookbook password reset</h2>
                  <p>We heard that you lost your password. Sorry about that!</p>
                  <p>But don’t worry! You can use the following code to reset your password:</p>
                  <p><strong>Reset-Code:</strong> ${secret_code}
                  <strong><p>Mind that If you don’t use this code within 10 minutes, it will expire.</p></strong>
                  <br><p>Have a blast day and stay safe!</p>
                  <p>Your Support Team</p>
            </body>
            </html>`;
};
