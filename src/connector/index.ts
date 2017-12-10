import * as mysql from "mysql";

import {ConnectorInterface} from "./ConnectorInterface";

export class Connector {
    constructor(protected credentials?: ConnectorInterface, callback?: any) {
        if (this.credentials === undefined) {
            this.credentials = {
                "host": "127.0.0.1",
                "user": "root",
                "password": "",
                "database": ""
            };
        }

        const connector = mysql.createConnection(this.credentials);

        if (callback === undefined) connector.connect();
        else connector.connect(callback);
    }

    /*protected connect(credentials: ConnectorInterface, callback?: any) {
        this.connector = mysql.createConnection(credentials);

        if (callback === undefined) this.connector.connect();
        else this.connector.connect(callback);
    }*/
}
