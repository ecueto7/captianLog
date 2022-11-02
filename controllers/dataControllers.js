const Log = require('./models/logs')
const dataController = {
  // Index,
  index (req, res, next) {
    Log.find({}, (err, foundLogs) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.logs = foundLogs
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.log = deletedLog
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on'
    Log.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedLog) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.fruit = updatedLog
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    req.body.shipIsBroken = req.body.shipIsBroken === 'on'
    Log.create(req.body, (err, createdLog) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.log = createdLog
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Log.findById(req.params.id, (err, foundLog) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a log with that ID'
        })
      } else {
        res.locals.data.log = foundLog
        next()
      }
    })
  }
}
module.exports = dataController