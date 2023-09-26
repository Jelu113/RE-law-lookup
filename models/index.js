const User = require('./User');
const Password = require('./Password');
// const SectionHeading = require('./SectionHeading');
// const Laws = require('./Laws');



User.hasOne(Password, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Password.belongsTo(User, {
  foreignKey: 'user_id'
});

// SectionHeading.hasMany(Laws, {
//   foreignKey: 'section_heading_id'
// });

module.exports = { User, Password };