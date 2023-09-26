const sequelize = require('../config/connection');
const { User, Password } = require('../models');
const userData = require('./userData.json');

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

  process.exit(0);
}

seedDatabase();