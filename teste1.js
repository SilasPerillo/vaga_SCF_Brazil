const {
  getUserService,
  getAllUsersService,
} = require("./service/getUser.service");

// var data = require("./fakeData");

const getUser = (req, res) => {
  const { name } = req.query;

  const { statusCode, message } = getUserService(name);

  return res.status(statusCode).json(message);
};

const getUsers = (req, res) => {
  const { statusCode, message } = getAllUsersService();
  return res.status(statusCode).json(message);
};

module.exports = {
  getUser,
  getUsers,
};
