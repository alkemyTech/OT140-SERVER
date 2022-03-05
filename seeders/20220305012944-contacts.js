'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('contacts', [
      {
        name: 'Julian',
        phone: 3584256699,
        email: 'julian15@gmail.com',
        message: 'Es es el mensaje enviado por el contacto julian',
        deletedAt: new Date
      },
      {
        name: 'Pablo',
        phone: 3584228599,
        email: 'pablo22@gmail.com',
        message: 'Es es el mensaje enviado por el contacto pablo',
        deletedAt: new Date
      },
      {
        name: 'Francisco',
        phone: 3584256614,
        email: 'francisco11@gmail.com',
        message: 'Es es el mensaje enviado por el contacto francisco',
        deletedAt: new Date
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
