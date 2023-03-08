<<<<<<< HEAD
const mongoose = require("mongoose");
=======
>>>>>>> master
const app = require("./app");

require("dotenv").config();

<<<<<<< HEAD
const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
=======
const defaultPort = 3000;
const port = process.env.PORT || defaultPort;

app.listen(port, () => {
  console.log(`Server running. Use our API on port: ${port}`);
});
>>>>>>> master
