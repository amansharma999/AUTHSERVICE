const validateUserAuth = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: "Email or password missing in the request",
    });
  }

  next();
};

const validateIsAdminRequest = (req, res, next) => {
  if (!req.body.id) {
    return res.status(400).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: "User id not given in the request",
    });
  }
  next();
};
module.exports = { validateUserAuth, validateIsAdminRequest };

