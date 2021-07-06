const db = require("./connection");
const { User, Breed, Pet } = require("../models");

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

  await Pet.deleteMany();


  const pets = await Pet.insertMany([

    {
      name: "Sophie",
      description:
        "A Pit Bull with the most loving of personalities! She may be a tri-pod but that doesn't slow her down!",
      breed: breeds[0]._id, //breed[0] refers to Pitbull
      image: "Dog-1.jpg",
      price: 200,
      age: 9,
    },
  ]);

  console.log("Pet seeded!");

  await User.deleteMany();

  await User.create({
    firstName: "George",
    lastName: "Wise",
    email: "George@gmail.com",
    password: "Password",
    breeds: [
      { pets: [pets[0]._id] }
    ]
  });

  console.log("User seeded!");

  process.exit();
});
