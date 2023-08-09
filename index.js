"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var db_1 = require("./api/db");
var app = (0, express_1.default)();
var PORT = 8000;
app.use((0, cors_1.default)());
/**
 * Nothing on root, so return a 404
 */
app.get('/', function (req, res) { return res.send("this is native backend"); });
/**
 * Return list of users as application/json
 * Publish API as V1 to be able to support legacy apps after breaking changes of the API
 */
app.get('/api/v1/users', function (req, res) {
    db_1.db.getUsers().then(function (users) {
        res.send(users);
    });
});
app.listen(PORT, function () {
    console.log("[backend]: Server is running on https://localhost:".concat(PORT));
});
