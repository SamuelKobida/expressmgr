const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('diplomovka', 'root', '1234', {
    host: 'mysqldb',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('connected..')
    })
    .catch(err => {
        console.log('Error'+ err)
    })

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./userModel.js')(sequelize, DataTypes)
db.childs = require('./childModel.js')(sequelize, DataTypes)

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!')
    })


db.users.hasMany(db.childs, {
    foreignKey: 'userId',
});
db.childs.belongsTo(db.users);

module.exports = db


