const { User, Role } = require("../models/index");
const ClientError = require("../utils/client-error");
const ValidationError = require("../utils/validation-error");
const { StatusCodes } = require("http-status-codes");
class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        //let validationError = new ValidationError(error);
        throw new ValidationError(error);
      }
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }

  async destroy(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }

  async getById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["id", "email"], //this is to get only the id and email of the user. This increases the performance of the query
      });
      return user;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }
  async getByEmail(userEmail) {
    try {
      const user = await User.findOne({
        where: {
          email: userEmail,
        },
      });
      if (!user) {
        throw new ClientError(
          "AttributeNotFound",
          "Invalid email sent in the request",
          "Please check the email, as there is no record of the email in the database",
          StatusCodes.NOT_FOUND
        );
      }
      return user;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }
  async isAdmin(userId) {
    try {
      const user = await User.findByPk(userId);
      const adminRole = await Role.findOne({
        where: {
          name: "ADMIN",
        },
      });
      return user.hasRole(adminRole);
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }
}

module.exports = UserRepository;
