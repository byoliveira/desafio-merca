import Sequelize, { Model } from "sequelize";

class Contact extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Esse campo não pode ser vazio"
                    },
                    isUppercase: true,
                }
            },
            celular: Sequelize.STRING,
        }, {
            sequelize,
        })
    }
}

export default Contact;