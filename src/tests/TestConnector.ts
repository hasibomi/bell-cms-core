import {Connector} from "../connector";
import {BellCoreModel} from "../bellmodel";

class TestConnector extends Connector {
    constructor() {
        super({
            "host": "127.0.0.1",
            "user": "root",
            "password": "",
            "database": "drivearabia"
        }, (error: any) => {
            if (error) console.log(error.sqlMessage);
            else console.log("Ok");
        });
    }
}

const connection = new TestConnector();

class User extends BellCoreModel {
    protected table: string = "users";
}

const user = new User;

user.get((error: any, results: Array<object>) => {
    if (error) console.log(error.sqlMessage);
    else console.log(results);
});
