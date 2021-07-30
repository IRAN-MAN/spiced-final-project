const { getCookBookByUserId } = require("../database/db");

const cookBookInfo = async (request, response, next) => {
    try {
        console.log("cookBookInfo", request.params);
        const cookbooks = await getCookBookByUserId({ ...request.params });
        console.log("cookBookInfo", cookbooks);
        response.status(200).json({ cookbooks });
    } catch (error) {
        console.log("[cookBookInfo: Error]", error);
        next(error);
    }
};

const createCookBook = async (request, response, next) => {
    try {
        console.log("createCookBook");
    } catch (error) {
        console.log("[createCookBook: Error]", error);
        next(error);
    }
};

const updateCookBookInfo = async (request, response, next) => {
    try {
        console.log("createCookBook");
    } catch (error) {
        console.log("[createCookBook: Error]", error);
        next(error);
    }
};

module.exports = { cookBookInfo, createCookBook, updateCookBookInfo };
