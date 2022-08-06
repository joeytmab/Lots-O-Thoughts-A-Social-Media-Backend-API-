const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// NEED TO TYPE PROPER ROUTING FOR INSOMNIA TESTING
// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/friends/:friendsId

// add friend
router.route('/:userId/friends/:friendsId').post(addFriend);
// delete (remove) friend
router.route('/:userId/friends/:friendsId').delete(removeFriend);

module.exports = router;
