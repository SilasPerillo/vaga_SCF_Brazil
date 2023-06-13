const { ok, badRequest, notFound } = require("../utils/httpHelpers");

var data = require("../fakeData");
// crio o helper para deixar o código mais organizado, menos verboso e de maior facilidade de manutenção
function getUserService(body) {
  if (!body) return badRequest("Nome do usuário não fornecido.");

  const user = data.find((elem) => elem.name == body);

  if (!user) return notFound("Nome do usuário não encontrado.");
  if (user) return ok(user);
}

function getAllUsersService() {
  if (!data) return badRequest("Base vazia");

  return ok(data);
}

module.exports = {
  getUserService,
  getAllUsersService,
};
