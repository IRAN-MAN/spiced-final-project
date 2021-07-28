const checkloggedIn = async (request, response) =>
    response.json({ user_id: request.session.user_id });

const createUsers = async (request, response, next) => {
    try {
        console.log("createUsers", request.body);
    } catch (error) {
        console.log("[createUsers: Error]", error);
        next(error);
    }
};

const userLogin = async (request, response, next) => {
    try {
        console.log("userLogin");
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
        console.log("getUserInfo");
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
