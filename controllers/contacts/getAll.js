const { Contact } = require("../../models");
const createError = require("http-errors");

const getAll = async (req, res, next) => {
  try {
    const { page, limit, favorite } = req.query;
 const skip = (page - 1) * limit;
const { _id } = req.user;
    const allContacts = await Contact.find(
      { owner: _id},
      "",
      {
        skip,
        limit: +limit,
      }
    ).populate("owner", "_id email subscription");
  

    res.json({
      status: "Success",
      code: 200,
      result: allContacts,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;