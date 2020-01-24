const { User, Company, Board } = require('../models')

module.exports = app => {
    // retrieve all users
    app.get('/users', (req, res) => {
        User.find()
            .populate('board')
            .then(user => res.json(user))
            .catch(e => console.log(e))
    })
    // retrieve one user
    app.get('/users/:id', (req, res) => {
        User.findOne({ _id: req.params.id })
            .populate('board')
            .then(user => res.json(user))
            .catch(e => console.log(e))
    })
    // add a user also add to company
    app.post('/users', (req, res) => {
        User.create(req.body)
            .then(({ _id }) => {
                Board.updateOne({ _id: req.body.board }, { $push: { user: _id } })
                Company.updateOne({ _id: req.body.company }, { $push: { user: _id } })
                    .then(user => res.json(user))
                    .catch(e => console.log(e))
            })
            .catch(e => console.log(e))

    })
    // update user  also add to company or board if needed
    app.put('/users/:id', (req, res) => {
        User.updateOne({ _id: req.params.id }, { $set: req.body })
        .then(({ _id }) => {
            Board.updateOne({ _id: req.body.board }, { $push: { user: _id } })
            Company.updateOne({ _id: req.body.company }, { $push: { user: _id } })
            .then(user => res.json(user))
            .catch(e => console.log(e))
    })})
    // remove user
    app.delete('/users/:id', (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then(user => res.json(user))
            .catch(e => console.log(e))
    })
}

