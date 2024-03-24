const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const passport = require("passport");
// connect to db
const db = require('./db');

db();
app.use(passport.initialize());
//signup route
app.post("/auth/signup",
 passport.authenticate('local-signup', { session: false }),
 (req, res, next) => {
 // sign up
 res.json({
 user: req.user,
 });
 }
);

//login route
app.post(
    "/auth/login",
    passport.authenticate('local-login', { session: false }),
    (req, res, next) => {
    // login
    res.json({
    user: req.user,
    });
    }
   );


const PORT = 3000;
app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`);
});