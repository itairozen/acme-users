const faker = require('faker');

const userList = Array(5)
  .fill('')
  .map((_) => {
    return faker.name.findName();
  });

const userDetails = userList.reduce((acc, user) => {
  acc[user] = faker.lorem.paragraph(2);
  return acc;
}, {});

module.exports = {
  userList,
  userDetails,
};
