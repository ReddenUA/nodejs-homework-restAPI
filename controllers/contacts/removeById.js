const { Contact } = require("../../models");
const createError = require("http-errors");

const removeById = async (req, res, next) => {
  try {
    const owner = req.user._id;
    const _id = req.params.id;
    const result = await Contact.findByIdAndRemove({ owner, _id });
    if (!result) {
      const { error } = new Error(`Contact with id=${_id} not found`);
      throw error;
    }
    res.json({
      status: "Success",
      code: 200,
      message: "contact deleted",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = removeById;
