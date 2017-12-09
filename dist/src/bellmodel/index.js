"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Builder_1 = require("./Builder");
var BellCoreModel = /** @class */ (function (_super) {
    __extends(BellCoreModel, _super);
    function BellCoreModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Insert data into a table.
     *
     * @param {object} data
     * @param callback
     */
    BellCoreModel.prototype.save = function (data, callback) {
        var query = _super.prototype.insertQuery.call(this, this.table, data);
        return _super.prototype.query.call(this, query, callback);
    };
    /**
     * Select columns.
     *
     * @param {string} columns
     * @returns {any}
     */
    BellCoreModel.prototype.select = function (columns) {
        this.queryBuilder = _super.prototype.selectQuery.call(this, this.table, columns);
        return this;
    };
    /**
     * Generate where clause.
     *
     * @param {string} statement
     * @param {boolean} update
     * @returns {any}
     */
    BellCoreModel.prototype.where = function (statement, update) {
        if (update === void 0) { update = false; }
        if (this.queryBuilder === undefined) {
            this.queryBuilder = _super.prototype.selectQuery.call(this, this.table, "*");
        }
        if (this.queryBuilder.indexOf("AND", this.queryBuilder.length - 3) > -1) {
            this.queryBuilder += " " + statement + " AND";
        }
        else {
            this.queryBuilder += " WHERE " + statement + " AND";
        }
        return this;
    };
    /**
     * Query the actual result.
     *
     * @param callback
     */
    BellCoreModel.prototype.get = function (callback) {
        if (this.queryBuilder === undefined) {
            this.queryBuilder = _super.prototype.selectQuery.call(this, this.table, "*");
        }
        else {
            this.queryBuilder = _super.prototype.cleanUp.call(this, this.queryBuilder);
        }
        return _super.prototype.query.call(this, this.queryBuilder, callback);
    };
    /**
     * Get the specific data by ID.
     *
     * @param {number} ID
     * @param callback
     */
    BellCoreModel.prototype.findById = function (ID, callback) {
        var where = " WHERE id = '" + ID + "'";
        if (this.queryBuilder === undefined) {
            this.queryBuilder = _super.prototype.selectQuery.call(this, this.table, "*");
        }
        this.queryBuilder += where;
        return _super.prototype.query.call(this, this.queryBuilder, callback);
    };
    /**
     * Get a single datum.
     *
     * @param callback
     */
    BellCoreModel.prototype.getOne = function (callback) {
        if (this.queryBuilder === undefined) {
            this.queryBuilder = _super.prototype.selectQuery.call(this, this.table, "*");
        }
        else {
            this.queryBuilder = _super.prototype.cleanUp.call(this, this.queryBuilder);
        }
        this.queryBuilder += " LIMIT 1";
        return _super.prototype.query.call(this, this.queryBuilder, callback);
    };
    BellCoreModel.prototype.update = function (data, callback) {
    };
    BellCoreModel.prototype.delete = function () {
    };
    /**
     * Get result group by a column.
     *
     * @param {string} column
     * @returns {any}
     */
    BellCoreModel.prototype.groupBy = function (column) {
        if (this.queryBuilder === undefined) {
            this.queryBuilder = _super.prototype.selectQuery.call(this, this.table, "*");
        }
        this.queryBuilder = _super.prototype.cleanUp.call(this, this.queryBuilder);
        this.queryBuilder += " GROUP BY " + column;
        return this;
    };
    /**
     * Order by result.
     *
     * @param {string} statement
     * @returns {any}
     */
    BellCoreModel.prototype.orderBy = function (statement) {
        if (this.queryBuilder === undefined) {
            this.queryBuilder = _super.prototype.selectQuery.call(this, this.table, "*");
        }
        this.queryBuilder = _super.prototype.cleanUp.call(this, this.queryBuilder);
        this.queryBuilder += " ORDER BY " + statement;
        return this;
    };
    return BellCoreModel;
}(Builder_1.Builder));
exports.BellCoreModel = BellCoreModel;
