'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Slides', [{
            imageUrl: 'https://c4.wallpaperflare.com/wallpaper/1002/10/398/star-wars-the-old-republic-guard-characters-lightsabers-wallpaper-preview.jpg',
            text: 'The Old Guard rules!.',
            order: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            imageUrl: 'https://www.xtrafondos.com/wallpapers/resized/darth-vader-star-wars-battlefront-ii-8234.jpg?s=large',
            text: 'The Old Guard always rules!.',
            order: 2,
            createdAt: new Date(),
            updatedAt: new Date()
        }])
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Slides', null, {})
    }
};