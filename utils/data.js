// should hold all the actual seed data
// fill in later
const user = [
    {
        username: 'u354dldr',
        email: 'mail@mail.com'
    },
    {
        username: 'lr509f31',
        email: 'lrmail@mail.com'
    },
    {
        username: 'ariesladybug',
        email: 'ariesbug@bug.com'
    },
    {
        username: 'g10vecroisan7',
        email: 'lovecroissants@mail.com'
    },
    {
        username: 'ezeewts',
        email: 'sweets@bug.com'
    },
    {
        username: 'kelpmustard',
        email: 'mustards@mail.com'
    }, 
    {
        username: 'oldeuboisn4ke',
        email: 'elderlySnake@bug.com'
    }, 
    {
        username: 'chocyMelk',
        email: 'dirt8392@bug.com'
    }
];

const thoughts = [
    "I'm itchy",
    "My pen is so green",
    "I love bunnies",
    "Dead internet theory",
    "I thought I was fried chicken",
    "Collecting coins isn't for the weak",
    "Cannibalism"
];

const reactions = [
    "Wow",
    "Sweet",
    "Real",
    "XD",
    "Not cool"
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUser = () => 
    `${getRandomArrItem(user)}`

const getRandomThought = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughts),
            createdAt: Math.random() < 0.5,
            username: getRandomUser(),
            reactions: getRandomArrItem(reactions)
        });
    }
    return results;
}

module.exports = { getRandomUser, getRandomThought };