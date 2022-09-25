const mongoose = require("mongoose");
const userController = require("../controllers/userController");

const orderSchema = mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    foods: [
      {
        _id: false,
        food: {
          type: String,
          enum: [
            "burger",
            "fries",
            "hotdog",
            "tako",
            "pizza",
            "donut",
            "popcorn",
            "coke",
            "cake",
            "icecream",
            "cookie",
            "flan",
          ],
        },
        count: {
          type: Number,
          min: 1,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = new mongoose.model("order", orderSchema);
