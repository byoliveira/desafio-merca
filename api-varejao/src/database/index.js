import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Contact from "../app/models/Contact";

const models =  [Contact]

class Database {
    constructor() {
        this.init()
    }
    init() {
        this.connection = new Sequelize (databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();