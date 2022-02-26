const Sequelize = require('sequelize');

const CommentModel = require('./models/comments');


const sequelize = new Sequelize('ong', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Comments = CommentModel (sequelize, Sequelize);


sequelize.sync({ force: false})
    .then(()=>{
        console.log('Tablas Sincronizadas')
    })

module.exports = {
    Comments,
   
}