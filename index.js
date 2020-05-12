const express = require("express");
const app = express();
const server = require("http").Server(app);
const compression = require("compression");
const cookieSession = require("cookie-session");
const db = require("./db.js");
const csurf = require("csurf");

app.use(compression());

app.use(express.static("./public"));

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

app.use((req, res, next) => {
    next();
});

app.use(
    cookieSession({
        secret: `The secret is used to generate the second cookie used to verify
        the integrity of the first cookie`,
        maxAge: 1000 * 60 * 60 * 24 * 14
    })
);

app.use(require("csurf")());

app.use((req, res, next) => {
    res.set("x-frame-options", "deny");
    res.cookie("csrftoken", req.csrfToken());
    next();
});

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

//BROWSE
app.get("/browse", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/getEmotion", function(req, res) {
    let numberofRows;
    let randomRow;

    db.getNumbersOfRows()
        .then(result => {
            numberofRows = result.rows[0].count;

            db.getEmotion(numberofRows)
                .then(result => {
                    randomRow = result.rows[0];

                    res.json(randomRow);
                })
                .catch(error => {
                    console.log("error in /getEmotion", error);
                });
        })
        .catch(error => {
            console.log("error in /getEmotion", error);
        });
});

//SUBMIT
app.post("/postemotion", function(req, res) {
    let emotion = req.body.emotion;
    let country = req.body.country;

    db.insertEmotion(emotion, country)
        .then(result => {
            res.json(result.rows[0]);
        })
        .catch(error => {
            res.json({ error: true });
        });
});

app.get("*", function(req, res) {
    res.redirect("/browse");
});

server.listen(process.env.PORT || 8080);
