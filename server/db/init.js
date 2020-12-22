const { Sequelize } = require("sequelize");
modelUser = require("./models/User");

const generateModel = ({ name, table }) => (connection) => connection.define(name, table);

const uri = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:5432/perioeci`;
const connection = new Sequelize(uri);

generateModel(modelUser)(connection);