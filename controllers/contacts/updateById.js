<<<<<<< HEAD
const { NotFound } = require("http-errors");
const { schemas, Contact } = require("../../models/contact");

const updateById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {new:true});
=======
const { updateContact } = require("../../models/contacts");
const { NotFound } = require("http-errors");
const contactSchema = require("../../schemas/contact");

const updateById = async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }
    const { contactId } = req.params;
    const result = await updateContact(contactId, req.body);
>>>>>>> master
    if (!result) {
      throw new NotFound(`Contact with id=${contactId} not found`);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
