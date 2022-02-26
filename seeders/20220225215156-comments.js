'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [
      {
        body:'Primer comentario sobre el post de la ong',
        postid:1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        body:'Segundo comentario sobre el post de la ong',
        postid:2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
      body:'Tercer comentario sobre el post de la ong',
      postid:3,
      createdAt: new Date,
      updatedAt: new Date
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
