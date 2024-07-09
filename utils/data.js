// should hold all the actual seed data
// fill in later
const usernames = [
    'u354dldr',
    'lr509f31',
    'g10vecroisan7',
    'n53m3t4t',
    'ezeewts',
    'ariesladybug',
    'lihcorts',
    'kelpmustard',
    '285y',
    'oldeuboisn4ke',
    'chocyMelk',
];

const getRandomArrItem = (arr) = arr[Math.floor(Math.random() * arr.length)];

const getRandomUser = () => 
    `${getRandomArrItem(usernames)}`;

const getRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
        results.push({
           // add later 
        })
    }
}