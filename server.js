//packages
const express = require("express");
const mysql = require("mysql");

//start server
const server = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hunter$1",
  database: "blog"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("MySQL is connected");
});

//Routes
server.get("/create-table", function(req, res) {
  console.log("hitting create table route");
  let sql =
    "CREATE TABLE posts(ID int NOT NULL AUTO_INCREMENT, title varchar(255), body TEXT, PRIMARY KEY (ID));";
  db.query(sql, function(err, result) {
    if (err) throw err;
    res.send("CREATED TABLE POST");
  });
});

//create a route that adds a post record

server.get("/post1", function(req, res) {
  let post = {
    title: "My first database encounter",
    body: "The teacher told me how to do sql injection judge."
  };
  let sql = "INSERT INTO post SET ?";
  db.query(sql, post, function(err, result) {
    if (err) throw err;
    res.send("added first record to our post table");
  });
});

//create a route that adds another post record

server.get("/post2", function(req, res) {
  let post = {
    title: "My second entry",
    body: "amber alert went off during class."
  };
  let sql = "INSERT INTO post SET ?";
  db.query(sql, post, function(err, result) {
    if (err) throw err;
    res.send("added second record");
  });
});

//create a route that deletes post record 1
server.get("/delete_post", function(req, res) {
  console.log(req.params.id);
  let sql = "DELETE FROM post WHERE ID=1" + req.params.id;
  db.query(sql, post, function(err, result) {
    if (err) throw err;
    res.send("delete a post");
  });
});

server.listen(3000, function() {
  console.log("server is Litttttt!");
});
