const removeUser = require("./service/removeUser.service");
// var data = require("./fakeData");

module.exports = function (req, res) {
  const { name } = req.query;

  const { statusCode, message } = removeUser(name);

  return res.status(statusCode).json(message);

  //   for (let i = 0; i < data.length; i++) {
  //     if (i.name == name) {
  //       data[i] = null;
  //     }
  //   }

  //   res.send("success");
};
