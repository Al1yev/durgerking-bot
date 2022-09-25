const express = require("express");
const app = express();

const userRouter = require("../routes/userRouter");
const orderRouter = require("../routes/orderRouter");

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/order", orderRouter);

module.exports = app;
