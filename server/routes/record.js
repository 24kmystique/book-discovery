const express = require("express");
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
 
// List all books
recordRoutes.route("/books").get(function (req, res) {
 let db_connect = dbo.getDb();
 db_connect
   .collection("bookcovers")
   .find({})
   .toArray(function (err, result) {
     if (err) throw err;
     res.json(result);
   });
});

// List the first 20 books that have more than equal to 4 stars rating
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