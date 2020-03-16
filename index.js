const express = require("express");
const db = require("./db");
const User = require("./user/model");
const userRouter = require("./user/router");
const Event = require("./event/model");
const eventRouter = require("./event/router");
const Ticket = require("./ticket/model");
const ticketRouter = require("./ticket/router");
const Comment = require("./comment/model");
const commentRouter = require("./comment/router");
const loginRouter = require("./auth/router");
const cors = require("cors");

const app = new express();
const corsMiddleware = cors();
const jsonParser = express.json();

app.use(corsMiddleware);
app.use(jsonParser);
app.use(userRouter);
app.use(eventRouter);
app.use(ticketRouter);
app.use(commentRouter);
app.use(loginRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("Server listening on port: ", port));
