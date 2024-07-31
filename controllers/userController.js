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
                return res.status(404).json({ message: 'No user with that ID ' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // ! This method needs to be fixed 
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                // { $set: req.body },
                // { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user found with that id.' });
            }

            await Thought.updateMany({ _id: { $in: user.thoughts } });
            res.json({ message: 'User and associated thoughts updated!' })
        } catch(err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId })
            if (!user) {
                return res.status(404).json({ message: 'No user found with that id.' });
            }

            await Thought.deleteMany({ _id: { $in: user.thoughts } });
            res.json({ message: 'User and associated thoughts deleted!' })
        } catch (err) {
            res.status(500).json(err);
        }
    }, 
    // ! This doesn't work; fix this later
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: user.userId }},
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user with that id'})
            }

            res.json(user);

        } catch (err) {
            res.status(500).json(err)
        } 
    },
    // ! Need to add removeFriend 
};