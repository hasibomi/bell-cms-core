"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var connection = mysql.createConnection({
    "host": "127.0.0.1",
    "user": "root",
    "password": "",
    "database": "test_db"
});
connection.connect();
exports.db = connection;
