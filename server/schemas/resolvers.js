const { AuthenticationError } = require("apollo-server-express");
const { User, Pet, Breed, Adoption } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    breeds: async () => {
      return await Breed.find();
    },
    pets: async (parent, { breed, name }) => {
      console.log("pet ran");
      const params = {};

      if (breed) {
        params.breed = breed;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Pet.find(params).populate("breed");
    },

    pet: async (parent) => {
      console.log('I am pets')
      return await Pet.find().populate("breed");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "adoptions.pets",
          populate: "breed",
        });

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    adoption: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "adoptions.pets",
          populate: "breed",
        });

        return user.adoptions.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },
    // checkout for stripe courtesy of npokamestov from git
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ pet: args.pet });
      const { pet } = await order.populate("pet").execPopulate();
      const line_items = [];

      for (let i = 0; i < pets.length; i++) {
        const pet = await stripe.pets.create({
          name: pets[i].name,
          description: pets[i].description,
          images: [`${url}/images/${pets[i].image}`],
        });
        const price = await stripe.prices.create({
          pet: pet.id,
          unit_amount: pets[i].price * 100,
          currency: "usd",
        });
        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });
      return { session: session.id };
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addAdoption: async (parent, { pet }, context) => {
      console.log(context);
      if (context.user) {
        const adoption = new Adoption({ pets });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { adoptions: adoption },
        });
        return adoption;
      }
      throw new AuthenticationError("Not logged in!");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Not logged in!");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect creadentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
