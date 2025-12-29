const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateTokenHandler = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401);
    throw new Error("No token provided");
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(401);
      throw new Error("Not authorized");
    }
    // console.log(decoded);
    req.user = decoded.user;
    next();
  });

  if (!token) {
    res.status(401);
    throw new Error("user is not authorized or token is missing ");
  }
});

module.exports = validateTokenHandler;
