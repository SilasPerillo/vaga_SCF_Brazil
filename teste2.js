const createNewUser = require("./service/postUser.service");

// var data = require("./fakeData");

module.exports = function (req, res) {
  const { body } = req;

  const { statusCode, message } = createNewUser(body);

  return res.status(statusCode).json(message);
};
