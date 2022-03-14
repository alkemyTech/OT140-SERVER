'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contacts', [{
      name: "Alesandro",
      phone: 151515,
      email: "ale@ale.com",
      message: "Esto es una prueba desde el seeder"
    },
    {
      name: "Jose",
      phone: 212121,
      email: "jose@jose.com",
      message: "Esta es una segunda prueba desde el seeder"
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
