const User = require("../models/userModel");
const AppError = require("../utility/appError");
const catchErrorAsync = require("../utility/catchErrorAsync");

class Admin {
  checkRole = catchErrorAsync(async (req, res, next) => {
    // console.log(req.headers);
    const user = await User.findOne({ chat_id: req.headers.chat_id });
    // console.log(user);
    if (!user) return next(new AppError("User not found"));

    if (user.role !== "admin")
      return next(new AppError("You have no right to do this"));
    next();
  });
}

module.exports = new Admin();
