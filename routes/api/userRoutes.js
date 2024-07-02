const router = require('express').Router();
// ! Need to make the methods used here in controllers

// ! Need to build out routes later
// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('./:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;