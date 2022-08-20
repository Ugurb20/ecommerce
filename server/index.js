const connectDb = require("./config/db");
const setMailApi = require("./config/mail");
const subscribeUserToMaillist = require("./controllers/mailController");
const express = require("express");
const Product = require("./models/productsModel");
const dotenv = require("dotenv").config();
const path = require("path");

const mailchimp = require("@mailchimp/mailchimp_marketing");

const app = express();

connectDb();
setMailApi();
subscribeUserToMaillist();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api/subscribe", (req, res) => {
  const response = mailchimp.lists
    .addListMember("87d24d2997", {
      email_address: req.body.email,
      status: "subscribed",
    })
    .then((response) => {
      res.send(response);
      console.log(JSON.stringify(response.json()));
      return response;
    })
    .catch((err) => {
      if (!err.response) return;
      console.log(err.response.body.title);
      res.status(400).send(JSON.stringify({ error: err.response.body.title }));
    });
  console.log(
    `Successfully added contact as an audience member. The contact's id is ${response.id}.`
  );
});

app.get("/api/products", (req, res) => {
  Product.find()
    .then((result) => {
      res.send(JSON.stringify(result));
    })
    .catch((err) => {
      throw err;
    });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "client", "build", "index.html")
    )
  );
}

app.listen(5000, () => {
  console.log("listening...");
});
