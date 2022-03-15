'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class social_media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      social_media.belongsTo(models.Organization,{
        foreignKey:'id',
        target_Key: 'idOrganization'
      })
    }
  }
  social_media.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    idOrganizacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'social_media',
  });
  return social_media;
};