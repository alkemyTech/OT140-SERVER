'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Activities', [
        {
          name: 'Taller Primaria',
          image:'https://formainfancia.com/wp-content/uploads/talleres-para-niños.jpg',
          Content: 'Con materiales que chicos traen de las escuelas, se los ayuda a termianr los deberes.',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          name: 'Taller Secundaria',
          image:'https://anglomexicano.com/wp-content/uploads/2019/09/ANGLO-MEXICANO-DE-COATZACOALCOS-SECUNDARIA-ELECCION-DE-TALLERES-8818.jpg',
          Content: 'Con materiales de los chicos y ayuda de los tutores se realizan las actividades',
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          name: 'Taller',
          image:'https://www.orientanova.com/wp-content/uploads/2018/12/Talleres-estudianes-mini.jpg',
          Content: 'Con ayuda de tutores se los horienta a los chicos para poder seguir en los estudios.',
          createdAt: new Date,
          updatedAt: new Date
        }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Activities', null, {});
  }
};
