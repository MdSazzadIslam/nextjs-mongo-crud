require("dotenv").config();
module.exports = {
  env: {
    MONGO_URI: process.env.MONGO_URI,
    API_URI_PRODUCTION: process.env.API_URI_PRODUCTION,
    API_URI_DEVELOPEMENT: process.env.API_URI_DEVELOPEMENT,
    API_COUNTRIES: process.env.API_COUNTRIES,
  },
};
