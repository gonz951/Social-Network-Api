const router = require('express').Router();
// ! Need to make methods used here in controllers
const {
    getThoughts, 
    getSingleThought,
    createThought,
    // updateThought,
    // deleteThought,
    // createReaction,
    // deleteReaction 
} = require('../../controllers/thoughtController');
// ! Need to build out routes later
// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought)//.put(updateThought).delete(deleteThought);

// // /api/thoughts/:thoughtId/reactions
// router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction)

module.exports = router;