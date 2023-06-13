const { ok, badRequest, notFound } = require("../utils/httpHelpers");
var data = require("../fakeData");

function updateUser(id, body) {
  const user = data.find((obj) => obj.id == id);
  if (!user) return notFound("Id do usuário não encontrado."); // verifico de o id é valido

  // crio um novo objeto com os novos dados
  const updateUser = {
    id,
    name: body.name,
    job: body.job,
  };

  // verifico se os campos foram preenchidos, se não foram mantendo os dados do banco
  if (!body.name) updateUser.name = user.name;
  if (!body.job) updateUser.job = user.job;
  // retorno todo array, excluindo os dados que serão alterados
  const result = data.filter((elem) => elem.id !== id);
  // acrescento os dados alterados
  result.push(updateUser);

  return ok(result);
}

module.exports = updateUser;
