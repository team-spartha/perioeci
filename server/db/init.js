const { Sequelize } = require("sequelize");
modelUser = require("./models/User");

const generateModel = ({ name, table }) => (connection) => connection.define(name, table);

const uri = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:5432/perioeci`;
const connection = new Sequelize(uri);

connection.sync()
  .then(() => "Database connection established")
  .catch(e => `\x1b[31m\x1b[1mERROR:\x1b[0m ${e}`);

generateModel(modelUser)(connection);