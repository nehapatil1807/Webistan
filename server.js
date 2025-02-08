import cors from "cors";  // Cross Origin Resource Sharing
import mysql from "mysql";
import express from "express";

const app = express();
const port = 5000;
app.use(cors());  
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "exam",
});

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Connected to MySQL database");
  }
});

app.post("/exams", (req, res) => {
  const b = req.body;
  const query = `INSERT INTO registration (name, email, subject) VALUES ('${b.name}', '${b.email}', '${b.subject}')`;

  db.query(query, (err, result) => { // send sql query to database
    if (err) {
      return res.status(500).send("Something went wrong!");
    } else {
      console.log(result);
      res.status(200).send({ message: "Exam added successfully" });
    }
  });
});

app.get("/exams", (req, res) => {
  const query = "select * from registration";
  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).send({ message: "Something went wrong" });
    } else {
      res.status(200).send(result);
    }
  });
});

app.put("/exams/:id", (req, res) => {
  const id = req.params.id;
  const { name, email, subject } = req.body;
  const query = `update registration set name = ?, email= ?, subject= ? where id= ?`;
  db.query(query, [name, email, subject, id], (err, result) => {
    if (err) {
      return res.status(400).send({ message: "Something went wrong" });
    } else {
      console.log(result);
      res.status(200).send({ message: "exam update successfully" });
    }
  });
});

app.delete("/exams/:id", (req, res) => {
  const id = req.params.id;
  const query = `delete from registration where id= ?`;
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).send("Something went wrong");
    } else {
      console.log(result);
      res.status(200).send({ message: "Delete successfully" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
