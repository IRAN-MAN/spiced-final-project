const {
    getCookBookByUserId,
    createCookbook,
    updateCookbookCover,
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
    const author = request.session.user_id;
    try {
        console.log("createNewCookBook", request.body);
        const cookbook = await createCookbook({ ...request.body, author });
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

const updateCookBookCover = async (request, response, next) => {
    const { filename } = request.file;
    const imgURL = `https://community-cookbook.s3.amazonaws.com/${filename}`;
    try {
        const cookbookCoverURL = await updateCookbookCover({
            ...request.params,
            imgURL,
        });
        response.status(201).json({ ...cookbookCoverURL });
    } catch (error) {
        console.log("[updateCookBookCover: Error]", error);
        next(error);
    }
};

module.exports = {
    cookBookInfo,
    createNewCookBook,
    updateCookBookInfo,
    updateCookBookCover,
};

const serializeCookbook = (cookbook) => {
    return {
        cookbook_id: cookbook.id,
        isPrivate: cookbook.isPrivate,
        cookbook_name: cookbook.cookbook_name,
        author: cookbook.author,
        created_at: cookbook.created_at,
    };
};
