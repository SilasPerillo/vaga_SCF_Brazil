const getUserViews = require("./service/countUser.service");

module.exports = function (req, res) {
  const { name } = req.query;

  const { statusCode, message } = getUserViews(name);

  return res.status(statusCode).json(message);

  //   var name = req.query.name;
  //   res.send("Usuário " + name + "  foi lido 0 vezes.");
};
