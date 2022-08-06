const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// NEED TO TYPE PROPER ROUTING FOR INSOMNIA TESTING
// /api/users
// get user, create new user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
// get single user, update user by ID, delete user by ID
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendsId

// add friend
router.route('/:userId/friends/:friendsId').post(addFriend);
// delete (remove) friend
router.route('/:userId/friends/:friendsId').delete(removeFriend);

module.exports = router;
