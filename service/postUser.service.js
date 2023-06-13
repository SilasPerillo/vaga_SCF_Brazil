var data = require("../fakeData");
const { created } = require("../utils/httpHelpers");

function createNewUser({ name, job }) {
  // desconstruo name e job que recebo da camada teste2 deixando o código menos verboso.
  const newUser = {
    id: data.length + 1, // pego o tamanho do array e acrescento mais 1 para criar o id
    name,
    job,
  };

  data.push(newUser);
  // passo do objeto para o helper organizar o código
  return created(newUser);
}

module.exports = createNewUser;
