'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class New extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      New.belongsTo(models.Categories, {as: 'categoriesId', foreignKey : "categoryId", targetKey: 'id'});
    }
  };
  New.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'New',
    paranoid: true
  });
  return New;
};
