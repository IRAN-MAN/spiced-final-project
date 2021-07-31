const {
    getCookBookByUserId,
    createCookbook,
} = require("../database/cookbooksQueries");

const cookBookInfo = async (request, response, next) => {
    try {
        console.log("cookBookInfo", request.params);
        const NewCookbooks = await getCookBookByUserId({ ...request.params });
        console.log("cookBookInfo", NewCookbooks);
        response.status(200).json({ NewCookbooks });
    } catch (error) {
        console.log("[cookBookInfo: Error]", error);
        next(error);
    }
};

const createNewCookBook = async (request, response, next) => {
    try {
        console.log("createNewCookBook", request.body);
        const cookbook = await createCookbook({ ...request.body });
        console.log("cookBookInfo", cookbook);
        response.status(200).json(serializeCookbook(cookbook));
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

module.exports = { cookBookInfo, createNewCookBook, updateCookBookInfo };
