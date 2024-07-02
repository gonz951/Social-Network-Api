const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    // fill in later
)

const User = model('user', userSchema)

module.exports = User;