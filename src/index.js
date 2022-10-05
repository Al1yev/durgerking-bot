const app = require("./middleware/app");
require("dotenv").config({ path: "./.env" });

require("./config/db");

app.listen(
  (PORT = process.env.SERVER_PORT || 1234)
  // (URL = process.env.SERVER_URL),
  // (err) =>
  //   err ? console.log(err) : console.log(`Server is listening on ${PORT}`)
);
