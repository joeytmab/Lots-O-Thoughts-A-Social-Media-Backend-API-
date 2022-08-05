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
      maxlength: 128,
      minlength: 1,
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
    },
    id: false,
  }
);

module.exports = reactionSchema;
