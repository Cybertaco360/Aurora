const mongoose = require('mongoose');

const opportunitySchema = new mongoose.Schema({
    title: { type:String, required: true },
    description: { type:String, required: true },
    location: { type:String, required: false },
    genre: { type:String, required: false },
    organization: { type:String, required: true },
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Opportunity', opportunitySchema);