<<<<<<< HEAD
const { schemas, Contact } = require("../../models/contact");

const add = async (req, res, next) => {
  try {
    const { error } = schemas.addJoiSchema.validate(req.body);
=======
const { addContact } = require("../../models/contacts");
const contactSchema = require("../../schemas/contact");

const add = async (req, res, next) => {
  try {
    const { error } = contactSchema.validate(req.body);
>>>>>>> master
    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }
<<<<<<< HEAD
    const result = await Contact.create(req.body);
=======
    const result = await addContact(req.body);
>>>>>>> master
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = add;
