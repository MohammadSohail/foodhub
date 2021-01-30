const Item = require("../model/item");
const mongoose = require("mongoose");
const env = require("dotenv");

env.config();

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.cus53.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

const item = [
  new Item({
    id: 1,
    title: "Thai Fry Chicken",
    price: 399,
    inStock: "yes",
    photo:
      "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/08/thai-fried-chicken.jpg",
    description: "Thai Style Spicy Chicken Fry.",
    menu: "601428ef316bea1c28dea205",
    createdAt: new Date(),
  }),
  new Item({
    id: 2,
    title: "Fried Rice",
    price: 299,
    inStock: "yes",
    photo:
      "https://www.skinnytaste.com/wp-content/uploads/2009/06/Spicy-Shrimp-Fried-Rice-3.jpg",
    description: "Thai Style Spicy Chicken Fry.",
    menu: "601428ef316bea1c28dea205",
    createdAt: new Date(),
  }),
  new Item({
    id: 3,
    title: "Chicken Momo",
    price: 199,
    inStock: "yes",
    photo:
      "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/08/thai-fried-chicken.jpg",
    description: "Chinese Style Spicy Chicken Momo.",
    menu: "6014291e316bea1c28dea207",
    createdAt: new Date(),
  }),
  new Item({
    id: 4,
    title: "Ramen",
    price: 499,
    inStock: "yes",
    photo:
      "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/08/thai-fried-chicken.jpg",
    description: "Traditional Spicy Ramne.",
    menu: "6014291e316bea1c28dea207",
    createdAt: new Date(),
  }),
  new Item({
    id: 5,
    title: "Chicken Biriyani",
    price: 349,
    inStock: "yes",
    photo:
      "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/08/thai-fried-chicken.jpg",
    description: "Traditional Biriyani.",
    menu: "60142924316bea1c28dea208",
    createdAt: new Date(),
  }),
  new Item({
    id: 6,
    title: "Mutton Biriyani",
    price: 599,
    inStock: "yes",
    photo:
      "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/08/thai-fried-chicken.jpg",
    description: "Thai Style Spicy Chicken Fry.",
    menu: "60142924316bea1c28dea208",
    createdAt: new Date(),
  }),
  new Item({
    id: 7,
    title: "Lamsa",
    price: 799,
    inStock: "yes",
    photo:
      "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/08/thai-fried-chicken.jpg",
    description: "Thai Style Spicy Chicken Fry.",
    menu: "60142940316bea1c28dea209",
    createdAt: new Date(),
  }),
  new Item({
    id: 8,
    title: "Khunafa",
    price: 549,
    inStock: "yes",
    photo:
      "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/08/thai-fried-chicken.jpg",
    description: "Thai Style Spicy Chicken Fry.",
    menu: "60142940316bea1c28dea209",
    createdAt: new Date(),
  }),
  new Item({
    id: 9,
    title: "Spicy Fish Curry",
    price: 299,
    inStock: "yes",
    photo:
      "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/08/thai-fried-chicken.jpg",
    description: "Thai Style Spicy Chicken Fry.",
    menu: "601428fe316bea1c28dea206",
    createdAt: new Date(),
  }),
  new Item({
    id: 10,
    title: "Beef Rezala",
    price: 399,
    inStock: "yes",
    photo:
      "https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/08/thai-fried-chicken.jpg",
    description: "Thai Style Spicy Chicken Fry.",
    menu: "601428fe316bea1c28dea206",
    createdAt: new Date(),
  }),
];

var cnt = 0;

item.forEach((user) => {
  user.save(async (err, result) => {
    cnt++;
    if (cnt == item.length) {
      exit();
    }
  });
});

function exit() {
  mongoose.disconnect();
}

module.exports = item;
