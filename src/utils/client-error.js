const { StatusCodes } = require("http-status-codes");
const AppError = require("./error-handler");
class ClientError extends AppError {
  constructor(name, message, explanation, StatusCode) {
    super(name, message, explanation, StatusCode);
  }
}

module.exports = ClientError;
