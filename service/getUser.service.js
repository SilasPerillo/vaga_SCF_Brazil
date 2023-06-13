const { ok, badRequest, notFound } = require("../utils/httpHelpers");

var data = require("../fakeData");

function getUserService(body) {
  console.log(data);
  if (!body) return badRequest("Nome do usuário não fornecido.");

  const user = data.find((elem) => elem.name == body);

  if (!user) return notFound("Nome do usuário não encontrado.");
  if (user) return ok(user);
}

module.exports = getUserService;
