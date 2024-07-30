const { User, Thought } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
    
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that id.' })
            }
            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: thought._id }},
                { new: true }
            );
            
            if (!user) {
                return res.status(404).json({
                    message: "Thought created, but no user was found with that ID",
                })
            }
            
            res.json(thought);
        } catch(err) {
            res.status(500).json(err);
        }
    }
}