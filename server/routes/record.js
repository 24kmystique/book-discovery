const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.route("/bookcovers").get(function (req, res) {
 let db_connect = dbo.getDb();
 db_connect
   .collection("bookcovers")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

recordRoutes.route("/top-20-books").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("bookcovers")
    .find({book_depository_stars: {$gte: 4}})
    .sort({book_depository_stars: -1})
    .limit(20)
    .toArray(function (err, result) {
      if (err) throw err;
      console.log();
      res.json(result);
    });
 });

module.exports = recordRoutes;