/* eslint-disable comma-dangle */
// @ts-nocheck
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
//const path = require("path");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  trailingSlash: false,
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    runtimeCaching,
  },
  webpack(config, options) {
    return config;
  },
});
