const express = require("express");
const db = require("./db");

const app = new express();
const port = process.env.PORT || 4000;
const jsonParser = express.json();

app.use(jsonParser);

app.listen(port, () => console.log("Server listening on port: ", port));
