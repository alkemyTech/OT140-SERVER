'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstName: {
                type: Sequelize.STRING,
                alowNull: false
            },
            lastName: {
                type: Sequelize.STRING,
                alowNull: false
            },
            email: {
                type: Sequelize.STRING,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                alowNull: false
            },
            photo: {
                type: Sequelize.STRING,
                alowNull: true
            },
            roleId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Role',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            deletedAt: {
                type: Sequelize.DATE
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
    }
};