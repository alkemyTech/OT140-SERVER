'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Users', 
        'Users',
        [         // passwords are not encrypted
            {
                firstName: 'Juan Pablo',
                lastName: 'Romano',
                email: 'pablor@admin.com',
                password: '12345',
                roleId: 1,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Ezequiel',
                lastName: 'Rango',
                email: 'rangogr@admin.com',
                password: '12345',
                roleId: 1,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Sebastian',
                lastName: 'Rigeiro',
                email: 'seba@admin.com',
                password: '12345',
                roleId: 1,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Trinidad',
                lastName: 'Burdiak',
                email: 'trinibur@admin.com',
                password: '12345',
                roleId: 1,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Artemio',
                lastName: 'Lucero',
                email: 'luceroar@admin.com',
                password: '12345', 
                roleId: 1,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Alesandro',
                lastName: 'Accattoli',
                email: 'aleaccattoli@admin.com',
                password: '12345', 
                roleId: 1,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Javier',
                lastName: 'Diaz',
                email: 'javierr@admin.com',
                password: '12345', 
                roleId: 1,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Ricardo',
                lastName: 'Racca',
                email: 'ricardo@admin.com',
                password: '12345', 
                roleId: 1,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Ivan',
                lastName: 'Alvarez',
                email: 'ivaan@admin.com',
                password: '12345',
                roleId: 1,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Jeremías',
                lastName: 'Muriette',
                email: 'jeremuriette@admin.com',
                password: '12345',
                roleId: 1,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Bill',
                lastName: 'Gates',
                email: 'billgates@standard.com',
                password: '1234',
                roleId: 2,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Ada',
                lastName: 'Lovelace',
                email: 'adalovee@standard.com',
                password: '1234',
                roleId: 2,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Steve',
                lastName: 'Wozniak',
                email: 'wozniak@standard.com',
                password: '123456',
                roleId: 2,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Grace',
                lastName: 'Hopper',
                email: 'hopperr@standard.com',
                password: '123456',
                roleId: 2,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Mark',
                lastName: 'Zuckerberg',
                email: 'maarrksito@standard.com',
                password: '124356', 
                roleId: 2,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Margaret',
                lastName: 'Hamilton',
                email: 'margaret@standard.com',
                password: '124356', 
                roleId: 2,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Larry',
                lastName: 'Page',
                email: 'googlepage@standard.com',
                password: '1245467', 
                roleId: 2,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'James',
                lastName: 'Gosling',
                email: 'gosling@standard.com',
                password: '1245467', 
                roleId: 2,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Linus',
                lastName: 'Torvalds',
                email: 'linuss@standard.com',
                password: '1245467', 
                roleId: 2,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstName: 'Tim',
                lastName: 'Berners',
                email: 'bberners@standard.com',
                password: '123345', 
                roleId: 2,
                photo: 'https://s3-us-east-2.amazonaws.com/designevo/projects/uid-3087344/ac3b9ab0232c194d20bc7db6df70cacc/preview.png?t=1646769450007',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ],
         {});
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};