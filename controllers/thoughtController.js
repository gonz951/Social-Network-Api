const { User, Thought } = require('../models');

module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
              .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user found with that id.' })
            }
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // add more after verifying this works
}