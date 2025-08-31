const { sendErrorRespose, sendResponse } = require("../utils/response");

const getUsers = (req, res) => {
  try {
    // Dummy response for now
    return sendResponse(res, { users: [] }, 200);
  } catch (err) {
    return sendErrorRespose(res, err);
  }
};

const postUsers = (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return sendErrorRespose(res, { statusCode: 400, message: "Name and Email are required" });
    }

    // Dummy response for now
    return sendResponse(res, { name, email, message: "User created successfully" }, 201);
  } catch (err) {
    return sendErrorRespose(res, err);
  }
};

const getUsersById = (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return sendErrorRespose(res, { statusCode: 400, message: "User ID is required" });
    }

    // Dummy response for now
    return sendResponse(res, { id, name: "John Doe" }, 200);
  } catch (err) {
    return sendErrorRespose(res, err);
  }
};

module.exports = { getUsers, postUsers, getUsersById };
