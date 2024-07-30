const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUser, getRandomThought } = require('./data');

// add the rest later
connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }

    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }

    const users = [];
    const thoughts = getRandomThought(10);

    for (let i = 0; i < 20; i++) {
        const user = getRandomUser();
        const thoughts = getRandomThought();
        
        users.push({
            user,
            thoughts,
        });
    }

    await User.insertMany(users);
    await Thought.insertMany(thoughts);

    console.info('Seeding complete')
    process.exit(0);
})