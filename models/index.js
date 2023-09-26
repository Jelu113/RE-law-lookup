const User = require('./User');
const Password = require('./Password');
const SectionHeading = require('./SectionHeading');
const Laws = require('./Laws');
const Sublaw = require('./Sublaw');
const Explanation = require('./Explanation');



User.hasOne(Password, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Password.belongsTo(User, {
  foreignKey: 'user_id'
});

SectionHeading.hasMany(Laws, {
  foreignKey: 'section_heading_id'
});

Laws.hasMany(Sublaw, {
  foreignKey: 'law_id'
});

Sublaw.hasMany(Explanation, {
  foreignKey: 'sublaw_id'
});

module.exports = { User, Password };