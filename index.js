const express = require("express");
const cors = require("cors");
const fs = require("fs"); // Import the 'fs' module to work with file operations

const { db } = require("./api/db");

const app = express();
const PORT = 8000;

app.use(cors());

app.get("/", (req, res) => res.send("this is native backend"));

app.get("/api/v1/users", (req, res) => {
  // Read the content of the users.json file
  fs.readFile("./users.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading users.json:", err);
      res.status(500).send("Internal Server Error");
      return;
    }

    try {
      const users = JSON.parse(data); // Parse the JSON data
      console.log(users)
      res.json(users); // Send the parsed JSON as the response
    } catch (parseError) {
      console.error("Error parsing users.json:", parseError);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.listen(PORT, () => {
  console.log(`[backend]: Server is running on https://localhost:${PORT}`);
});
