const mailchimp = require("@mailchimp/mailchimp_marketing");

const asyncHandler = require("express-async-handler");
const listId = "87d24d2997";
///@des add subscriber
///@route POST /api/subscribe

const subscribingUser = {
  firstName: "Prudence",
  lastName: "McVankab",
  email: "ugur.bukcuoglu@hotmail.com",
};

const subscribeUserToMaillist = asyncHandler(async (req, res) => {});

module.exports = subscribeUserToMaillist;
