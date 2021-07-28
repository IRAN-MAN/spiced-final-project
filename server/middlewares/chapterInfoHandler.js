const chapterInfo = async (request, response, next) => {
    try {
        console.log("chapterInfo");
    } catch (error) {
        console.log("[chapterInfo: Error]", error);
        next(error);
    }
};

module.exports = { chapterInfo };
