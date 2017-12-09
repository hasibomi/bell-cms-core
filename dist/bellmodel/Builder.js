"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../database");
var Builder = /** @class */ (function () {
    function Builder() {
    }
    /**
     * Run query.
     *
     * @param {string} query
     * @param handler
     */
    Builder.prototype.query = function (query, handler) {
        database_1.db.query(query, handler);
    };
    /**
     * Run `INSERT INTO <database>` query.
     *
     * @param {string} table
     * @param data
     * @returns {string}
     */
    Builder.prototype.insertQuery = function (table, data) {
        var query = "INSERT INTO " + table + " ";
        var columns = "(";
        var values = "VALUES (";
        for (var key in data) {
            columns += key + ", ";
            values += "'" + data[key] + "', ";
        }
        columns = columns.replace(/, +$/, "");
        columns += ")";
        values = values.replace(/, +$/, "");
        values += ")";
        query += columns;
        query += values;
        return query;
    };
    /**
     * Run query to select columns.
     *
     * @param {string} table
     * @param {string} columns
     * @returns {string}
     */
    Builder.prototype.selectQuery = function (table, columns) {
        var query = "SELECT " + columns + " from " + table;
        return query;
    };
    /**
     * Run query to update a table.
     *
     * @param {string} table
     * @param data
     * @returns {string}
     */
    Builder.prototype.updateQuery = function (table, data) {
        var query = "UPDATE " + table + " SET ";
        for (var key in data) {
            query += key + " = '" + data[key] + "', ";
        }
        query += query.replace(/, +$/, "");
        return query;
    };
    /**
     * Clean up & prepare the current built query.
     *
     * @param {string} query
     * @returns {string}
     */
    Builder.prototype.cleanUp = function (query) {
        if (query.indexOf("AND", query.length - 3) > -1) {
            query = query.replace(/AND+$/, "");
        }
        return query;
    };
    return Builder;
}());
exports.Builder = Builder;
