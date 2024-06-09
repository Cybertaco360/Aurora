const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  age: { type: Number, required: false },
  highSchool: { type: String, required: false },
  password: { type: String, required: false },
  points: { type: Number, required: false}
});

module.exports = mongoose.model('User', userSchema);