const mysql = require("mysql2");
// const connection = mysql.createConnection({
//   host: "blwzdjyunepuv8see4xq-mysql.services.clever-cloud.com",
//   user: "uth5zjs0arwx9pol",
//   password: "WfcThJiJ58ngcstVVJbq",
//   database: "blwzdjyunepuv8see4xq",
// });
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "4960",
  database: "crud",
});
connection.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Database Connected Successfully.");
  }
});

module.exports = connection;
