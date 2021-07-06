const db = require("./connection");
const { User, Breed, Pets } = require("../models");

db.once("open", async () => {
  await Breed.deleteMany();

  const breeds = await Breed.insertMany([
    { name: "Pit Bull" },
    { name: "Golden Retriever" },
    { name: "Pug" },
    { name: "Great Dane" },
    { name: "Husky" },
    { name: "Australian Shephard" },
    { name: "Greyhound" },
    // Feel free to add or subtract breeds here
  ]);

  console.log("Breed seeded!");

  await Pets.deleteMany();

  const pets = await Pets.insertMany([
    {
      name: "Sophie",
      description:
        "A Pit Bull with the most loving of personalities! She may be a tri-pod but that doesn't slow her down!",
      image: "Dog-1.jpg",
      cost: 200,
      breed: breed[0]._id, //breed[0] refers to Pitbull above
      age: 9,
    },
    {
      // More Pets here
    },
  ]);

  console.log("Pets seeded!");

  await User.deleteMany();

  await User.create({
    firstName: "George",
    lastName: "Wise",
    email: "George@gmail.com",
    password: "Password",
  });

  console.log("User seeded!");

  process.exit();
});
