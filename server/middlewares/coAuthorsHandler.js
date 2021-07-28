const cookBookCoAuthorsInfo = async (request, response, next) => {
    try {
        console.log("cookBookCoAuthorsInfo");
    } catch (error) {
        console.log("[cookBookCoAuthorsInfo: Error]", error);
        next(error);
    }
};

const addCoAuthor = async (request, response, next) => {
    try {
        console.log("addCoAuthor");
    } catch (error) {
        console.log("[addCoAuthor: Error]", error);
        next(error);
    }
};

const deleteCoAuthor = async (request, response, next) => {
    try {
        console.log("deleteCoAuthor");
    } catch (error) {
        console.log("[deleteCoAuthor: Error]", error);
        next(error);
    }
};

module.exports = { cookBookCoAuthorsInfo, addCoAuthor, deleteCoAuthor };
