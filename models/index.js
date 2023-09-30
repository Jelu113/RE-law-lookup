const User = require('./User');
const SectionHeading = require('./SectionHeading');
const Laws = require('./Laws');
const Sublaw = require('./Sublaw');
const Explanation = require('./Explanation');
const Keyword = require('./Keyword');






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



module.exports = { User, SectionHeading, Laws, Sublaw, Explanation, Keyword};