'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Organizations', [
      {
        name: 'organizacion1',
        image: 'https://www.grupoioe.es/wp-content/uploads/2020/01/organizacion-empresa.jpeg',
        address:'av alvarez 255',
        phone: 251420215,
        email:'prueba@gmail.com',
        welcomeText:'Bienvenido a nuestra organizacion de ejemplo',
        aboutUsText:'brindamos ayuda y soporte a las personas.',
        isActive:true,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'organizacion2',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVEhUQycc4cjaGZUAMmJGwoN6xR_QJe6qzEtP9FnkCisHdN9QRkySHQ5qFi6nPRwvcQ5o&usqp=CAU',
        address:'av lopez 115',
        phone: 251420215,
        email:'prueba22@gmail.com',
        welcomeText:'Bienvenido a nuestra organizacion de ejemplo2',
        aboutUsText:'brindamos ayuda y soporte a las personas 22.',
        isActive:true,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'organizacion3',
        image: 'https://www.ntxpro.net/wp-content/uploads/2018/11/bc.jpg',
        address:'av sarmiento 5',
        phone: 251420215,
        email:'prueba442@gmail.com',
        welcomeText:'Bienvenido a nuestra organizacion de ejemplo3',
        aboutUsText:'brindamos ayuda y soporte a las personas 22333.',
        isActive:true,
        createdAt: new Date,
        updatedAt: new Date
      }], {});
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
