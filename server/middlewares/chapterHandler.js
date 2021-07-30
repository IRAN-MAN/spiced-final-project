const { getChapters } = require("../database/chaptersQueries");

const chapterInfo = async (request, response, next) => {
    try {
        const chaptersinfo = await getChapters();
        response.status(200).json({ chaptersinfo });
    } catch (error) {
        console.log("[chapterInfo: Error]", error);
        next(error);
    }
};

module.exports = { chapterInfo };
