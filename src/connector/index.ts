import * as mysql from "mysql";

import {ConnectorInterface} from "./ConnectorInterface";

export class Connector {
    private credentials: ConnectorInterface;
    private connection: any;

    static main = new Connector();

    /**
     * Set database credentials.
     *
     * @param {ConnectorInterface} credentials
     * @returns {this}
     */
    setCredentials(credentials: ConnectorInterface) {
        Connector.main.credentials = credentials;
        return this;
    }

    /**
     * Connect to the database.
     *
     * @param callback
     */
    connect(callback?: any): void {
        Connector.main.connection = mysql.createConnection(Connector.main.credentials);

        if (callback === undefined) Connector.main.connection.connect();
        else Connector.main.connection.connect(callback);
    }

    /**
     * Get the connection.
     *
     * @returns {any}
     */
    protected getConnector() {
        return Connector.main.connection;
    }
}
