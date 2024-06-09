const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
  name: { type:String, required: false},
  password: { type:String, required: false},
  description: { type:String, required: false},
  date: { type: Date, default: Date.now},
  contact: { type: String, required: false},
});

module.exports = mongoose.model('Organization', organizationSchema);