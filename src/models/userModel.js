const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      default: null,
      // required: true,
    },
    username: {
      type: String,
      default: null,
      // required: true,
    },
    chat_id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      value: "user",
      enum: ["user", "admin"],
    },
    order_list: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "order",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function () {
  this.role = "user";
});

module.exports = new mongoose.model("user", userSchema);
