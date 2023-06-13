const getUserService = require("./service/getUser.service");

var data = require("./fakeData");

const getUser = (req, res, next) => {
  const { name } = req.query;

  const { statusCode, message } = getUserService(name);

  return res.status(statusCode).json(message);

  //   if (!name) {
  //     return res.status(400).send("Nome do usuário não fornecido.");
  //   }

  //   const user = data.find((elem) => elem.name === name);

  //   if (user) return res.send(user);

  //   if (!user) return res.status(400).send("Nome do usuário não encontrado.");
};

const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
