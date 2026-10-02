import mysql from "mysql2";

// Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rambanni@2525",
  database: "petcare",
});

// Connect
db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
  } else {
    console.log("MySQL Connected Successfully");
  }
});

export default db;
