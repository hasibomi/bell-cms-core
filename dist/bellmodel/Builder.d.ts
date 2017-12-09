export declare class Builder {
    /**
     * Run query.
     *
     * @param {string} query
     * @param handler
     */
    protected query(query: string, handler: any): void;
    /**
     * Run `INSERT INTO <database>` query.
     *
     * @param {string} table
     * @param data
     * @returns {string}
     */
    protected insertQuery(table: string, data: any): string;
    /**
     * Run query to select columns.
     *
     * @param {string} table
     * @param {string} columns
     * @returns {string}
     */
    protected selectQuery(table: string, columns: string): string;
    /**
     * Run query to update a table.
     *
     * @param {string} table
     * @param data
     * @returns {string}
     */
    protected updateQuery(table: string, data: any): string;
    /**
     * Clean up & prepare the current built query.
     *
     * @param {string} query
     * @returns {string}
     */
    protected cleanUp(query: string): string;
}
