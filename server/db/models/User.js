const { DataTypes } = require("sequelize");
const { STRING, ARRAY } = DataTypes;

module.exports = {
  name: "User",
  table: {
    username: {
      type: STRING
    },
    email: {
      type: STRING,
      unique: true,
      validate: { isEmail: true }
    },
    password: {
      type: STRING
    },
    confirmationCode: {
      type: STRING(16)
    },
    downloaded: {
      type: ARRAY(STRING)
    }
  }
}