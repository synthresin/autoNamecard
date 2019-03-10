const csv = require("fast-csv");
const fs = require('fs');
const stream = fs.createReadStream("test.csv");
const createAis = require('./src/createAis');

var persons = [];

csv.fromStream(stream).on("data", function(data) {
  persons.push(data);
}).on("end", function() {
  createAis(persons);
});