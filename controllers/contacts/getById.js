const { Contact } = require("../../models/");
const createError = require("http-errors");

const getById = async (req, res, next) => {
  try {
    const owner = req.user._id;
    const _id = ObjectId(req.params.id);
    const contact = await Contact.findOne({ owner, _id });
    if (!contact) {
      return null;
    }
    res.json({
      status: "Success",
      code: 200,
      result: contactById,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
