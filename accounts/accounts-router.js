// import libraries
const express = require('express')
const db = require('../data/dbConfig')

// create router
const router = express.Router()

// CRUD methods
// done
router.get('/', (req, res) => {
    db('accounts')
        .then(accounts => {
            res.status(200).json({ data: accounts })
        })
        .catch(error => {
            console.log(error)

            res.status(500).json({ error: error.message })
        })
})
// done
router.get("/:id", (req, res, next) => {
    db('accounts')
        .where('id', req.params.id)
        .then(accounts => {
            res.status(200).json({ data: accounts })
        })
        .catch(error => {
            console.log(error)

            res.status(500).json({ error: error.message })
        })
})
// done
router.post("/", (req, res, next) => {
    const newAccount = req.body
    db('accounts')
        .insert(newAccount)
        .returning('id')//do not exlude this line if you plan to support PostgreSQL
        .then(ids => {
            res.status(200).json({ data: ids })
        })
        .catch(error => {
            console.log(error)

            res.status(500).json({ error: error.message })
        })
})
// done
router.put("/:id", (req, res, next) => {
    const changes = req.body

    db('accounts')
        .where('id', req.params.id)
        .update(changes)
        .then(count => {
            if (count)
                res.status(200).json({ message: 'updated succesfully' })
            else
                res.status(404).json({ message: 'not found' })

        })
        .catch(error => {
            console.log(error)

            res.status(500).json({ error: error.message })
        })
})
// done
router.delete("/:id", (req, res, next) => {
    db('accounts')
        .where('id', req.params.id)
        .del()//delete instead of update
        .then(count => {
            if (count)
                res.status(200).json({ message: 'remove succesfully' })
            else
                res.status(404).json({ message: 'not found' })

        })
        .catch(error => {
            console.log(error)

            res.status(500).json({ error: error.message })
        })
})

// local middleware
// function checkId (req,res){
//     db('accounts').where("id", req.params.id)
//         .then()
// }
// export router
module.exports = router