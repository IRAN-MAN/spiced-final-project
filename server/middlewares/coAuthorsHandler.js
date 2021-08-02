const loginCheck = require("../utilities/loginCheck");

const {
    getAllCoAuthors,
    getCoAuthorById,
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
    console.log("[addCoAuthor : cookbook_id]", request.params);
    try {
        const coAuthor = await getCoAuthorById({
            ...request.session,
            ...request.params,
        });
        if (!coAuthor) {
            console.log("[CoAuthor is NEW!]");
            const addedCoAuthor = await insertCoAuthor({
                ...request.params,
                ...request.session,
            });
            console.log("[insertCoAuthor: addedCoAuthor]", addedCoAuthor);
            response.status(200).json(serializeCoAuthor(addedCoAuthor));
            return;
        }
        response
            .status(403)
            .json({ message: "You already are a co-author of this CookBook!" });
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

const cookBookinvite = async (request, response, next) => {
    console.log("[cookBookinvite: params]", request.params);
    if (!request.session.user_id) {
        response.redirect(
            `http://localhost:3000/cookbookinvite/${request.params.cookbook_id}`
        );
        return;
    }
    try {
        const co_author = await insertCoAuthor({
            ...request.params,
            ...request.session,
        });
        console.log("[Invite: add co_author]", co_author);

        response.redirect(
            `http://localhost:3000/cookbook/${request.params.cookbook_id}`
        );
    } catch (error) {
        console.log("[deleteCoAuthor: Error]", error);
        next(error);
    }
};

const cookBookInviteLogin = async (request, response, next) => {
    try {
        const matchUser = await loginCheck({ ...request.body });
        if (!matchUser) {
            response
                .status(401)
                .json({ message: "Email or Password is wrong" });
            return;
        }
        request.session.user_id = matchUser.id;
        const co_author = await insertCoAuthor({
            ...request.params,
            ...request.session,
        });
        console.log("[cookBookInviteLogin: add co_author]", co_author);
        response.redirect(
            `http://localhost:3000/cookbook/${request.params.cookbook_id}`
        );
    } catch (error) {
        console.log("[userLogin: Error]", error);
        next(error);
    }
};

module.exports = {
    cookBookCoAuthorsInfo,
    addCoAuthor,
    deleteFromCoAuthor,
    cookBookinvite,
    cookBookInviteLogin,
};

const serializeCoAuthor = (coAuthor) => {
    return {
        coAuthor_id: coAuthor.id,
        user_id: coAuthor.user_id,
        cookbook_id: coAuthor.cookbook_id,
        created_at: coAuthor.created_at,
    };
};
