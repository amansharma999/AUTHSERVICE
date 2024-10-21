const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
const morgan = require("morgan");

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan("combined"));
  app.use("/authservice/api", apiRoutes);
 
  app.listen(PORT, async () => {
    console.log(`Server Started on port ${PORT}`);
    if (process.env.DB_SYNC) {
      const db = require("./models/index");
      db.sequelize.sync({ alter: true });
    }
  });
};

prepareAndStartServer();
