import jwt from "jsonwebtoken";
import Contact from "../models/Contact";
import authConfig from "../../config/auth";


class SessionController {
    async store(request, response) {
        const {nome, celular} = request.body;

       const contact = await Contact.findOne({ where: { nome }});

        if(!contact) {
            return response.status(401).json({error: 'Este cliente não existe na base de dados'})
        }

        const {id} = contact;

        return response.json({
            contact: {
                id,
                nome,
                celular
            },
            token: jwt.sign({ id}, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            })
        })
    }
}

export default new SessionController();