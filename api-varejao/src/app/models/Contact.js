import Sequelize, { Model } from "sequelize";

class Contact extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            celular: Sequelize.STRING,
        }, {
            sequelize,
        })
    }
}

export default Contact;