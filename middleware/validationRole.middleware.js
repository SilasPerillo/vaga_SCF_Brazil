const jwt = require("jsonwebtoken");
const secretKey = "chaveSecreta";

// const data = require("../fakeData");
// const user = data.find((elem) => elem.id == id);

function validation(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json("Token de acesso não fornecido.");
  }

  try {
    const decoded = jwt.verify(authorization, secretKey);
    if (decoded.role !== "admin") {
      return res.status(403).json("Acesso não autorizado.");
    }
    console.log(decoded, "teste user validation");

    next();
  } catch (err) {
    return res.status(401).json("Token de acesso inválido.");
  }

  // console.log("teste validation");

  return next();
}

module.exports = validation;
