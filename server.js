const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST, PORT = 8080 } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server on port", PORT);
      console.log("Database connection successful!");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
