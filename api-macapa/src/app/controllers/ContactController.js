import * as Yup from "yup";
import "yup-phone";
import Contact from "../models/Contact";

class ContactController {
    async store(request, response) {
        
        const schema = Yup.object().shape({
			nome: Yup.string().required(),
			celular: Yup.string().phone().required().min(11),
		});

        if (!(await schema.isValid(request.body))) {
			return response.status(400).json({ error: 'O nome deve estar em maíusculo e os campos não pode vir vazio, segue o formato padrão de telefone 5541930306905' 
        
        });
		}

        const contactExists = await Contact.findOne({ where: {celular: request.body.celular}})

        if(contactExists) {
            return response.status(400).json({error: 'cellphone already exists'})
        }

        const {id, nome, celular} = await Contact.create(request.body);

        return response.json({
            id,
            nome,
            celular
        })
    }

    async update(request, response) {
        const {nome, celular} = request.body

        const contact = await Contact.findByPk(request.contactId);

        const { id } = await contact.update(request.body);

        return response.json({
            id,
            nome,
            celular
        })
    }
}

export default new ContactController();