const asynHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/user')

const authMiddleware = asynHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization 
  ) {
    try {
      token = req.headers.authorization;
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await User.findById(decoded.id);
      req.user = user;
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorised, invalid token');
    }
  }
});

module.exports = authMiddleware;