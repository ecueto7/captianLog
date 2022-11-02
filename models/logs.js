const mongoose = require('mongoose')
// Make A Schema
const logSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  shipIsBroken: Boolean
}, { timestamps: true })
// Make A Model From The Schema
const Log = mongoose.model('Log', logSchema)
// Export The Model For Use In The App
module.exports = Log