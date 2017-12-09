import { BellModelInterface } from "./BellModelInterface";
import { Builder } from "./Builder";
export declare abstract class BellCoreModel extends Builder implements BellModelInterface {
    protected abstract table: string;
    protected queryBuilder: string;
    /**
     * Insert data into a table.
     *
     * @param {object} data
     * @param callback
     */
    save(data: object, callback: any): void;
    /**
     * Select columns.
     *
     * @param {string} columns
     * @returns {any}
     */
    select(columns: string): any;
    /**
     * Generate where clause.
     *
     * @param {string} statement
     * @param {boolean} update
     * @returns {any}
     */
    where(statement: string, update?: boolean): any;
    /**
     * Query the actual result.
     *
     * @param callback
     */
    get(callback: any): void;
    /**
     * Get the specific data by ID.
     *
     * @param {number} ID
     * @param callback
     */
    findById(ID: number, callback: any): void;
    /**
     * Get a single datum.
     *
     * @param callback
     */
    getOne(callback: any): void;
    update(data: object, callback: Event): void;
    delete(): void;
    /**
     * Get result group by a column.
     *
     * @param {string} column
     * @returns {any}
     */
    groupBy(column: string): any;
    /**
     * Order by result.
     *
     * @param {string} statement
     * @returns {any}
     */
    orderBy(statement: string): any;
}
