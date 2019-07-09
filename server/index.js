require("dotenv").config();
const authController = require("./controllers/authController");
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const app = express();

app.use(express.json());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: true,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    })
)

massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("Check out my MASSIVE DB connection")
})

//auth endpoints
app.post("/auth/register/user", authController.register);
app.post("/auth/login/user", authController.login);
app.post("/auth/logout", authController.logout);
app.get("/auth/session", authController.currentSession);


app.listen(5050, () => console.log(`Listening on Port 5050`));