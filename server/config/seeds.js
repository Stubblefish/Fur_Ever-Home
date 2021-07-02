const db = require("./connection");
const { User, Breed, Pets } = require("../models");

db.once('open', async () => {
    await Breed.deleteMany();

    const breeds = await Breed.insertMany([
        { name: 'Pit Bull' },
        { name: 'Golden Retriever' },
        { name: 'Pug' },
        { name: 'Great Dane'},
        { name: 'Husky'},
        { name: 'Australian Shephard'},
        { name: 'Greyhound'},
    ]);

    console.log('Breed seeded!')

    await Pets.deleteMany();

    const pets = await Pets.insertMany([
        {
           name: Sophie,
            description: "A Pit Bull with the most loving of personalities! She may be a tri-pod but that doesn't slow her down!"
            image:
            cost:
            breed: breed[0]._id,
            age:
        }
    ])
})