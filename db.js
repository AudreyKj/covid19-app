const spicePg = require("spiced-pg");

const db = spicePg(
    process.env.DATABASE_URL ||
        "postgres://postgres:postgres@localhost:5432/corona_emotions"
);

function insertEmotion(emotion, country) {
    return db.query(
        `INSERT INTO emotions(emotion, country) VALUES ($1, $2) RETURNING *`,
        [emotion, country]
    );
}

function getNumbersOfRows() {
    return db.query(`SELECT COUNT(*) FROM emotions`);
}

function getEmotion(numberofRows) {
    return db.query(
        `SELECT * FROM emotions
    OFFSET floor(random()* $1) LIMIT 1`,
        [numberofRows]
    );
}

exports.insertEmotion = insertEmotion;
exports.getNumbersOfRows = getNumbersOfRows;
exports.getEmotion = getEmotion;
