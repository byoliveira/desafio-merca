import Contact from "../models/Contact";

class ContactController {
    async store(request, response) {

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