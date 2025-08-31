const path = require("path");
const { sendErrorRespose, sendResponse } = require("../utils/response");

const getProducts = (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "..", "view", "product.html"));
  } catch (err) {
    return sendErrorRespose(res, err);
  }
};

const getProductsById = (req, res) => {
  try {
    if (!req.params.id) {
      return sendErrorRespose(res, { statusCode: 400, message: "ID is required" });
    }

    let id = req.params.id;
    return sendResponse(res, { id }, 200);
  } catch (err) {
    return sendErrorRespose(res, err);
  }
};

const postProduct = (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    if (!data.name) {
      return sendErrorRespose(res, { statusCode: 400, message: "Name is required" });
    }

    return sendResponse(res, { value: data.name }, 201);
  } catch (err) {
    return sendErrorRespose(res, err);
  }
};

const putProduct = (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return sendErrorRespose(res, { statusCode: 400, message: "ID is required" });
    }

    return sendResponse(res, { id }, 200);
  } catch (err) {
    return sendErrorRespose(res, err);
  }
};

const deleteProduct = (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return sendErrorRespose(res, { statusCode: 400, message: "ID is required" });
    }

    return sendResponse(res, { id }, 200);
  } catch (err) {
    return sendErrorRespose(res, err);
  }
};

module.exports = { getProducts, getProductsById, postProduct, putProduct, deleteProduct };
