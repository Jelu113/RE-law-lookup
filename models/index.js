const User = require('./User');
const Password = require('./Password');

User.hasOne(Password, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Password.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Password };