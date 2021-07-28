const cookBookInfo = async (request, response, next) => {
    try {
        console.log("cookBookInfo");
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
