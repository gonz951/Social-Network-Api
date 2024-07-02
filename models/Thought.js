const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    // fill in later
)

const Thought = model('thought', thoughtSchema)

module.exports = Thought;