const mongoose = require("mongoose");
const userController = require("../controllers/userController");

const orderSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      unique: true,
    },
    orders_list: [
      {
        foods: [
          {
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
        order_time: {
          type: mongoose.Schema.Types.Date,
          default: Date.now(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = new mongoose.model("order", orderSchema);
