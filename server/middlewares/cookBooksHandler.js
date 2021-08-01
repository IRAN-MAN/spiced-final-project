const {
    getCookBookByUserId,
    getCookBookById,
    createCookbook,
    updateCookbookCover,
    updateCookBook,
} = require("../database/cookbooksQueries");

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

const cookBookInfoById = async (request, response, next) => {
    try {
        console.log("cookBookInfo", request.params);
        const cookbook = await getCookBookById({ ...request.params });
        console.log("getCookBookByUserId", cookbook);
        response.status(200).json(cookbook);
    } catch (error) {
        console.log("[getCookBookByUserId: Error]", error);
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
        console.log(
            "[updateCookBookInfo: params and body]",
            request.params,
            request.body
        );
        const updatedCookbooks = await updateCookBook({
            ...request.params,
            ...request.body,
        });
        console.log("updateCookBook", updatedCookbooks);
        response.status(200).json(serializeCookbook(updatedCookbooks));
    } catch (error) {
        console.log("[cookBookInfo: Error]", error);
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
        response.status(201).json(cookbookCoverURL);
    } catch (error) {
        console.log("[updateCookBookCover: Error]", error);
        next(error);
    }
};

module.exports = {
    cookBookInfo,
    cookBookInfoById,
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
        cover_pic: cookbook.cover_pic,
        created_at: cookbook.created_at,
    };
};
