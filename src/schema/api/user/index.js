const { Schema } = require('mongoose'),
  { api } = require('../../../connection/');
/**
 * @desc Definition of user Schema
 * @name used
 * @memberof documents/Schema#
 * @property {string} email - Email is used as a login
 * @property {string} password - password do user criptor
 * @property {boolean} status - Flag indicating whether the document is active or not
*/
const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  last: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: false,
    default: 1
  },
}, {
  collection: 'user',
  timestamps: true
});
module.exports = api.model('User', UserSchema, 'user');
