const db = require("./connection");
const { User, Breed, Pet } = require("../models");

db.once("open", async () => {
  await Breed.deleteMany();

  const breeds = await Breed.insertMany([
    { name: "Pit Bull" },
    { name: "Bull Dog" },
    { name: "Hound" },
    { name: "Chihuahua" },
    { name: "Terrier" },
    { name: "Australian Shephard" },
    { name: "Border Collie" },
    { name: "Labrador" },
    { name: "Mix" },
  ]);

  console.log("Breed seeded!");

  await Pet.deleteMany();

  const pets = await Pet.insertMany([
    {
      name: "Sophie",
      description:
        "A Pit Bull with the most loving of personalities! She may be a tri-pod but that doesn't slow her down!",
      breed: breeds[0]._id, //breed[0] refers to Pitbull
      image: "/images/Dog-1.jpg",
      price: 9,
    },
    {
      name: "Panda",
      description:
        "A French Bulldog that is playful, alert, adaptable, and completely irresistible. She snores, but they are soothing.",
      breed: breeds[1]._id,
      image: "/images/Dog-2.jpg",
      price: 5,
    },
    {
      name: "Shooter",
      description:
        "A Bloodhound who is affectionate, gentle, thinks he is a lap dog. Although known for their hunting skills, he likes to take cuddle instead.",
      breed: breeds[2]._id,
      image: "/images/Dog-3.jpg",
      price: 8,
    },
    {
      name: "Ozzy",
      description:
        "A Boxer-Chihuahua mix. Came from an abused home, needs a quiet loving new home. He is crate trained and loves stuffed animals.",
      breed: breeds[3]._id,
      image: "/images/Dog-4.jpg",
      price: 1.5,
    },
    {
      name: "Jack",
      description:
        "A Saarloos wolfdog mix. She is a wolf dog, but this breed also has a gentle side that makes her a good companion dog. The Saarloos Wolfdog temperament is not for everyone. This breed is best suited to experienced dog owners.",
      breed: breeds[8]._id,
      image: "/images/Dog-5.jpg",
      price: 9,
    },
    {
      name: "Dude",
      description:
        "A Cairn Terrier mix to the max. He has lots of energy and loves to herd his brothers or sisters while walking. Though he gets along with other dogs, you'll usually find him making new friends with other humans.",
      breed: breeds[4]._id,
      image: "/images/Dog-6.jpg",
      price: 11,
    },
    {
      name: "Bruce",
      description:
        "A pure bred Labrador Retriever. He came from a fine line of duck hunting dogs, but he is terrified of ducks. He is a wonderful family dog and loves kids.",
      breed: breeds[7]._id,
      image: "/images/Dog-7.jpg",
      price: 6,
    },
    {
      name: "Canyon",
      description:
        "An Australian Cattle Dog loves the outdoors. He loves long walks/hikes, kayaking, and playing all around. Family dog all the way.",
      breed: breeds[5]._id,
      image: "/images/Dog-8.jpg",
      price: 3,
    },
    {
      name: "Jimmy",
      description:
        "A dachshund mix with the mindset of a Bullmastiff. Grumpy old man who loves children! Very protective of his family, especially when the mailslot opens.",
      breed: breeds[8]._id,
      image: "/images/Dog-9.jpg",
      price: 9,
    },
    {
      name: "Indie",
      description:
        "A pure bred Border Collie. She is a highly intelligent, extremely energetic, acrobatic and athletic dog. Can play ball for hours on end.",
      breed: breeds[6]._id,
      image: "/images/Dog-10.jpg",
      price: 4,
    },
  ]);

  console.log("Pet seeded!");

  await User.deleteMany();

  await User.create({
    firstName: "George",
    lastName: "Wise",
    email: "George@gmail.com",
    password: "Password",
    breeds: [{ pets: [pets[0]._id] }],
  });

  console.log("User seeded!");

  process.exit();
});
