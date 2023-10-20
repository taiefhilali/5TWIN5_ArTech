const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;


const cvSchema = new mongoose.Schema(
  {
    cv: { type: String },
    content: { type: String },
    skills: [String], 
    experiences: [{ type: String }],

  },
  { timestamps: true }
);

module.exports = mongoose.model('Cv', cvSchema);

