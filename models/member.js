'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class member extends Model {
  
    static associate(models) {
      // define association here
    }
  };
  member.init({
    name: DataTypes.STRING,
    facebookUrl: DataTypes.STRING,
    instagramUrl: DataTypes.STRING,
    linkedinUrl: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'member',
  });
  return member;
};