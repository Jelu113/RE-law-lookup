const User = require('./User');
const Password = require('./Password');
const SectionHeading = require('./SectionHeading');
const Laws = require('./Laws');
const Sublaw = require('./Sublaw');
const Explanation = require('./Explanation');
const Keyword = require('./Keyword');




User.hasOne(Password, {
 // foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Password.belongsTo(User, {
//  foreignKey: 'user_id'
});

//SectionHeading.hasMany(Laws, {
//  foreignKey: 'section_heading_id'
//});

Laws.belongsTo(SectionHeading);

Laws.hasMany(Sublaw, {
//  foreignKey: 'law_id'
});

Sublaw.belongsTo(Laws);

Sublaw.hasMany(Explanation, {
//  foreignKey: 'sublaw_id'
});

Keyword.hasMany(Laws, {
// foreignKey: 'keyword'
});



module.exports = { User, Password, SectionHeading, Laws, Sublaw, Explanation, Keyword};