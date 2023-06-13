const ok = (data) => ({
  statusCode: 200,
  message: data,
});

const created = (data) => ({
  statusCode: 201,
  message: data,
});

const badRequest = (message) => ({
  statusCode: 400,
  message: { message },
});

const notFound = (message) => ({
  statusCode: 404,
  message: { message },
});

module.exports = {
  ok,
  badRequest,
  notFound,
  created,
};
