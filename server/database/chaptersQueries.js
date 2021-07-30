const { db } = require("./db");

const getChapters = async () => {
    const chapters = await db.query("SELECT * FROM chapters");
    return chapters.rows;
};

module.exports = {
    getChapters,
};
