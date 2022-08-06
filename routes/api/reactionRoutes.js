const router = require('express').Router();
const {

  addReaction,
  deleteReaction,
  
} = require('../../controllers/thoughtController.js');

// ****REACTIONS ROUTES ***** //

// /api/apps/:thoughtId/reaction
router.route('/:thoughtId/reaction').post(addReaction);
  
// /api/apps/:thoughtId/tags/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;