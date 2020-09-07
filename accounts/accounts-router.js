// import libraries
const express = require('express')
const db = require('../data/dbConfig')

// create router
const router = express.Router()

// CRUD methods
router.get('/', (req, res) => {

})
router.get("/:id", (req, res, next) => {

})
router.post("/", (req, res, next) => {

})
router.put("/:id", (req, res, next) => {

})
router.delete("/:id", (req, res, next) => { 
    
})

// export router
module.exports = router