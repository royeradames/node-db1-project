// import libraries
const express = require("express");
const helmet = require("./api/server.js");

// impport database
const db = require("../data/dbConfig.js");

// create server
const server = express();

// middleware
server.use(express.json());
server.use(helmet())

// export server
module.exports = server;
