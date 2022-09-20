const dotenv = require("dotenv").config();
const dbConnect = require("./utils/dbConnect");
const app = require("./app");

dbConnect(process.env.DATABASE);

// server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
