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

function getCountry() {
    return db.query(`SELECT country FROM emotions`);
}

function getDate() {
    return db.query(`SELECT created_at FROM emotions`);
}

exports.insertEmotion = insertEmotion;
exports.getNumbersOfRows = getNumbersOfRows;
exports.getEmotion = getEmotion;
exports.getCountry = getCountry;
exports.getDate = getDate;
