const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUser, getRandomThoughts } = require('./data');

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
    const thoughts = getRandomThoughts(10);
})