<<<<<<< HEAD
const { Contact } = require("../../models/contact");

const getAll = async (req, res, next) => {
  try {
    const contacts = await Contact.find({}, "-createdAt -updatedAt");
=======
const { listContacts } = require("../../models/contacts");

const getAll = async (req, res, next) => {
  try {
    const contacts = await listContacts();
>>>>>>> master
    res.json(contacts);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
