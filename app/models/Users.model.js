module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("Users", {
      email: {
        type: Sequelize.STRING
      },
      fullname: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
  
    return Users;
  };