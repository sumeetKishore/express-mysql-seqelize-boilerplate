const express = require("express");
const cors = require("cors");
const env = require('dotenv');
const app = express();

env.config();

const corsOptions = {
     origin: "http://localhost:8081"
  };
  
  app.use(cors(corsOptions));
  
  // parse requests of content-type - application/json
  app.use(express.json());
  
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));
  
  // simple route
  app.get("/", (req, res) => {
    res.json({ message: "Welcome to reset fitness" });
  });

  require("./app/routes/Users.routes")(app);
  // set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

//   In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:


// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });