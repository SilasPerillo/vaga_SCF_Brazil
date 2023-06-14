const jwt = require("jsonwebtoken");
const secretKey = "chaveSecreta";
const data = require("../fakeData");

// criei essa função apenas para gerar o token, e caso seja necessário ela ja esteja aqui.
module.exports = function createToken(req, res, next) {
  const { id } = req.query;

  const { role } = data.find((elem) => elem.id == id);

  const payload = {
    role,
  };

  console.log(payload);

  const token = jwt.sign(payload, secretKey, { expiresIn: "30d" });

  console.log(token);

  return next();
};
