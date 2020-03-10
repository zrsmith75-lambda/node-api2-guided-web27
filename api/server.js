const express = require("express");

const hubsRouter = require("./hubs-router.js");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  const query = req.query;

  console.log(query);
  res.status(200).json(query);
  // res.send(`
  //   <h2>Lambda Hubs API</h>
  //   <p>Welcome to the Lambda Hubs API</p>
  // `);
});

// router handles endpoints that begin with /api/hubs
server.use("/api/hubs", hubsRouter);

module.exports = server;
