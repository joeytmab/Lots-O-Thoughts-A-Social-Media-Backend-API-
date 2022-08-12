const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionContent: {
      type: String,
      required: true,
      maxLength: 128,
      minLength: 1,
    },
    username: {
      type: String,
      required: true,
    },
    dateCreated: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
    //id: false,
  }
);

module.exports = reactionSchema;
