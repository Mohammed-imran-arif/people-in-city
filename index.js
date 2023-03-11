const peoplesFirstName = require("../utilities/utils/index");
const peopleName = require("../country/state/city/index");

const getPeopleInCity = (peopleName) => {
  return peoplesFirstName(peopleName);
};

module.exports = getPeopleInCity;
