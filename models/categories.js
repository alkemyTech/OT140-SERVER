'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Categories extends Model {

        static associate(models) {
            // define association here
        }
    };
    Categories.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.STRING,
        image: DataTypes.STRING
    }, {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: 'Categories',
    });
    return Categories;
};