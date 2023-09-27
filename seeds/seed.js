const sequelize = require('../config/connection');
const { User, Password, Explanation, Keyword, Laws, SectionHeading, Sublaw} = require('../models');
const userData = require('./userData.json');
const explanation = require('./explanation.json');
const keyword = require('./keyword.json');
const laws = require('./laws.json');
const sectionHeading = require('./sectionHeading.json');
const sublaw = require('./sublaw.json');





const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  await Password.bulkCreate(
    userData.map(user => ({
      password: user.password,
      user_id: users.find(u => u.email === user.email).id
    }))
  );

  await Explanation.bulkCreate(explanation, {
    individualHooks: true,
    returning: true,
  });


  await Keyword.bulkCreate(keyword, {
    individualHooks: true,
    returning: true,
  });

  await Laws.bulkCreate(laws, {
    individualHooks: true,
    returning: true,
  });

  await SectionHeading.bulkCreate(sectionHeading, {
    individualHooks: true,
    returning: true,
  });

  await Sublaw.bulkCreate(sublaw, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
}

seedDatabase();