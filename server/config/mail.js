const mailchimp = require("@mailchimp/mailchimp_marketing");
const dotenv = require("dotenv").config();

function setMailApi() {
  mailchimp.setConfig({
    apiKey: process.env.MAIL_CHIMP,
    server: "us14",
  });
}

module.exports = setMailApi;
