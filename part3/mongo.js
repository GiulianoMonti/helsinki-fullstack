const mongoose = require("mongoose");
require("dotenv").config();
if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const userName = process.argv[5];
const password = process.argv[2];

const url = `mongodb+srv://giuliano:${password}}@cluster0.ukqlb.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(url, {});

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: process.argv[3],
  number: process.argv[4],
});

Person.find({}).then((result) => {
  result.forEach((person) => {
    console.log(person);
  });
  mongoose.connection.close();
});

person.save().then((result) => {
  console.log("person saved!");
  mongoose.connection.close();
  //
});
