const data = require("../fakeData");
const { ok, badRequest, notFound } = require("../utils/httpHelpers");

function removeUser(body) {
  // valido se exite algo no parâmetro da query
  if (!body) return badRequest("Nome do usuário não fornecido.");
  // retorno todo o array, retirando somente o objeto removido.
  const removeFilter = data.filter((elem) => elem.name !== body);

  if (removeFilter.length == data.length)
    // verifico se foi removido, se não foi retorno um erro
    return notFound("Usuário não encontrado");

  return ok("success");
}

module.exports = removeUser;
