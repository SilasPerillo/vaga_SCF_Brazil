const { ok, badRequest, notFound } = require("../utils/httpHelpers");

const data = require("../fakeData");

function getUserViews(name) {
  if (!name) return badRequest("Nome do usuário não fornecido.");

  // aqui estou verificando se parte do nome existe na base e retorno o objeto.
  const user = data.find((elem) => elem.name.includes(name));

  if (!user) return notFound("Nome do usuário não encontrado.");

  return ok(`Usuário ${user.name} foi lido ${user.views} vezes.`);
}

module.exports = getUserViews;
