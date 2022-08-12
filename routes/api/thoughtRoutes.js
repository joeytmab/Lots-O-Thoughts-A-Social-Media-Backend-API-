const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

// ****THOUGHTS ROUTES ***** //
// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// ****REACTIONS ROUTES ***** //

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(addReaction);
  
// /api/thoughts/:thoughtId/tags/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
