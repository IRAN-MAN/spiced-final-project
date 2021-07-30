const {
    getAllCoAuthors,
    insertCoAuthor,
    deleteCoAuthor,
} = require("../database/coAuthorsQueries");

const cookBookCoAuthorsInfo = async (request, response, next) => {
    try {
        console.log("[cookBookCoAuthorsInfo : cookbook_id]", request.params);
        const allCoAuthors = await getAllCoAuthors({
            ...request.params,
        });
        console.log("[insertCoAuthor]", allCoAuthors);
        response.status(200).json({ allCoAuthors });
    } catch (error) {
        console.log("[cookBookCoAuthorsInfo: Error]", error);
        next(error);
    }
};

const addCoAuthor = async (request, response, next) => {
    try {
        console.log("[addCoAuthor : cookbook_id]", request.params);
        const addedCoAuthor = await insertCoAuthor({
            ...request.params,
            ...request.session,
        });
        console.log("[insertCoAuthor]", addedCoAuthor);
        response.status(200).json(serializeCoAuthor(addedCoAuthor));
    } catch (error) {
        console.log("[addCoAuthor: Error]", error);
        next(error);
    }
};

const deleteFromCoAuthor = async (request, response, next) => {
    try {
        console.log("[deleteCoAuthor : cookbook_id]", request.params);
        await deleteCoAuthor({
            ...request.params,
            ...request.session,
        });
        response.status(200).json({ message: "Delete successful" });
    } catch (error) {
        console.log("[deleteCoAuthor: Error]", error);
        next(error);
    }
};

module.exports = { cookBookCoAuthorsInfo, addCoAuthor, deleteFromCoAuthor };

const serializeCoAuthor = (coAuthor) => {
    return {
        coAuthor_id: coAuthor.id,
        user_id: coAuthor.user_id,
        cookbook_id: coAuthor.cookbook_id,
        created_at: coAuthor.created_at,
    };
};
