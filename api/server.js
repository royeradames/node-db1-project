// import libraries
const express = require("express");
const helmet = require("helmet");
const accountsRouter = require('../accounts/accounts-router')

// create server
const server = express();

// middleware
server.use(express.json());
server.use(helmet())
server.use('/accounts',accountsRouter)

// export server
module.exports = server;
