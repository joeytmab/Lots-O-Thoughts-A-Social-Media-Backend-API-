const { Schema, model } = require('mongoose');

const reactionSchema = require('./Reaction')

console.log("Thought Model triggered.")

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtContent: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 128
    },
    username: {
      type: String,
      require: true,
    },
    dateCreated: {
      type: Date,
      default: Date.now(),
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function (){
  return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
