'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            User.belongsTo(models.Role, { as: 'role' });
        }
    };
    User.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        photo: DataTypes.STRING,
        roleId: DataTypes.INTEGER,
        isActive: DataTypes.BOOLEAN,
        deletedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};