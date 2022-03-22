'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class social_media extends Model {
   
    static associate(models) {
      social_media.belongsTo(models.Organization);
    }

    

  }
  social_media.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    organizationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'social_media',
  });
  return social_media;
};