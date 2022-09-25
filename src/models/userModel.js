const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      // required: true,
    },
    username: {
      type: String,
      // required: true,
    },
    chat_id: {
      type: String,
      required: true,
    },
    orders: [
      {
        _id: false,
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = new mongoose.model("user", userSchema);
