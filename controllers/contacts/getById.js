<<<<<<< HEAD
const { NotFound } = require("http-errors");
const { Contact } = require("../../models/contact");
=======
const { getContactById } = require("../../models/contacts");
const { NotFound } = require("http-errors");
>>>>>>> master

const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
<<<<<<< HEAD
    const result = await Contact.findById(contactId);
=======
    const result = await getContactById(contactId);
>>>>>>> master
    if (!result) {
      throw new NotFound(`Contact with id=${contactId} not found`);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
