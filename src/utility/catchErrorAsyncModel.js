const AppError = require("./appError");

const catchErrorAsync = (funksiya) => {
  const catchFunc = (req, res, next, Model) => {
    funksiya(req, res, next, Model).catch((err) =>
      next(new AppError(err.message, 404))
    );
  };
  return catchFunc;
};

module.exports = catchErrorAsync;
