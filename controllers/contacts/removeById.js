<<<<<<< HEAD
const { NotFound } = require("http-errors");
const {  Contact } = require("../../models/contact");
=======
const { removeContact } = require("../../models/contacts");
const { NotFound } = require("http-errors");
>>>>>>> master

const removeById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
<<<<<<< HEAD
    const result = await Contact.findByIdAndRemove(contactId);
=======
    const result = await removeContact(contactId);
>>>>>>> master
    if (!result) {
      throw new NotFound(`Contact with id=${contactId} not found`);
    }
    res.json({
      message: "contact deleted",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = removeById;
