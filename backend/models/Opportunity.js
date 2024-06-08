const mongoose = require('mongoose');

const opportunitySchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  date: Date,
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Opportunity', opportunitySchema);
