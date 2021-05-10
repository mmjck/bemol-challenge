const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },

  cpf: {
    type: String,
    require: true
  },

  email: {
    type: Date,
    type: String,
  },

  password: {
    type: Date,
    type: String,
  },

  address: {}
});

module.exports = mongoose.model('users', userSchema);
