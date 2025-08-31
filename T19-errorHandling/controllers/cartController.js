const path = require("path");

const { sendErrorRespose, sendResponse } = require("../utils/response");

const getCart = (req, res) => {
  try {
    const userId = req.params.userId;

    if (!userId) {
      return sendErrorRespose(res, { statusCode: 400, message: "User ID is required" });
    }

    // Dummy response for now
    return sendResponse(res, { userId, items: [] }, 200);
  } catch (err) {
    return sendErrorRespose(res, err);
  }
};

const postCart = (req, res) => {
  try {
    const userId = req.params.userId;
    const { productId, quantity } = req.body;

    if (!userId) {
      return sendErrorRespose(res, { statusCode: 400, message: "User ID is required" });
    }

    if (!productId || !quantity) {
      return sendErrorRespose(res, { statusCode: 400, message: "Product ID and Quantity are required" });
    }

    // Dummy response for now
    return sendResponse(
      res,
      { userId, productId, quantity, message: "Product added to cart successfully" },
      201
    );
  } catch (err) {
    return sendErrorRespose(res, err);
  }
};

module.exports = { getCart, postCart };
