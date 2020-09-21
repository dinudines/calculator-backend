const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const calculationSchema = new Schema({
    id: { type: Number, unique: true },
    input: { type: String },
    output: {type: String}
});

module.exports = mongoose.model('Calculation', calculationSchema);