const updateUser = require("./service/updateUser.service");
// var data =  require("./fakeData");

module.exports = function (req, res) {
  const { id } = req.query;
  const { body } = req;
  // onde tem o sinal de mais, estou transformando o valor de string para numero
  const { statusCode, message } = updateUser(+id, body);

  return res.status(statusCode).json(message);

  //   const reg = data.find((d) => id == id);
  //   reg.name = req.body.name;
  //   reg.job = req.body.job;

  //   res.send(reg);
};
