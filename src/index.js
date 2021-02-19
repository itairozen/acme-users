const faker = require('faker');
const render = require('./render');

const userList = Array(5)
  .fill('')
  .map((_) => {
    return faker.name.findName();
  });

const userDetails = userList.reduce((acc, user) => {
  acc[user] = faker.name.jobDescriptor();
  return acc;
}, {});

render({userList, userDetails});

module.exports = {
  userList,
  userDetails,
};
