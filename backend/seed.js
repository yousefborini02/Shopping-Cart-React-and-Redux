const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const clothingProducts = [
  {
    name: "Classic White T-Shirt",
    price: 19.99,
    description: "Soft cotton basic white t-shirt, unisex",
    imageUrl: "https://i.pinimg.com/236x/7a/f5/aa/7af5aaee1c4837e6e512488c623f963c.jpg",
    category: "Tops",
    size: ["S", "M", "L", "XL"],
    color: "White"
  },
  {
    name: "Slim Fit Jeans",
    price: 49.99,
    description: "Blue denim slim fit jeans for men",
    imageUrl: "https://i.pinimg.com/564x/40/c4/4d/40c44d2b5b8b9904dc0c4952abac735a.jpg",
    category: "Bottoms",
    size: ["30x32", "32x32", "34x32", "36x32"],
    color: "Blue"
  },
  {
    name: "Floral Summer Dress",
    price: 39.99,
    description: "Light and breezy floral print summer dress",
    imageUrl: "https://i.pinimg.com/236x/86/16/cf/8616cf223c17547e6ccf7663f41278d5.jpg",
    category: "Dresses",
    size: ["S", "M", "L"],
    color: "Multicolor"
  },
  {
    name: "Leather Jacket",
    price: 129.99,
    description: "Classic black leather jacket for men",
    imageUrl: "https://i.pinimg.com/236x/e7/3e/44/e73e4451edecebe1d7e5a17a5e9eb67a.jpg",
    category: "Outerwear",
    size: ["M", "L", "XL"],
    color: "Black"
  },
  {
    name: "Athletic Running Shorts",
    price: 24.99,
    description: "Breathable running shorts with inner lining",
    imageUrl: "https://i.pinimg.com/564x/6d/c9/ff/6dc9ff84dffad601243ac45e7f479460.jpg",
    category: "Activewear",
    size: ["S", "M", "L", "XL"],
    color: "Navy"
  },
  {
    name: "Wool Sweater",
    price: 59.99,
    description: "Warm knit wool sweater for winter",
    imageUrl: "https://i.pinimg.com/236x/e8/3d/62/e83d628cbf7860861940c6403fa7e4b7.jpg",
    category: "Tops",
    size: ["S", "M", "L", "XL"],
    color: "Gray"
  },
  {
    name: "Formal Button-Up Shirt",
    price: 44.99,
    description: "Crisp white formal button-up shirt",
    imageUrl: "https://i.pinimg.com/236x/fe/ea/54/feea54c4ae17e175e474e4709294eee1.jpg",
    category: "Tops",
    size: ["15", "15.5", "16", "16.5", "17"],
    color: "White"
  },
  {
    name: "Yoga Pants",
    price: 34.99,
    description: "Stretchy and comfortable yoga pants",
    imageUrl: "https://i.pinimg.com/564x/21/ad/69/21ad6984ed8ce14c402284ecce76e583.jpg",
    category: "Activewear",
    size: ["XS", "S", "M", "L"],
    color: "Black"
  },
  {
    name: "Denim Jacket",
    price: 69.99,
    description: "Classic blue denim jacket, unisex",
    imageUrl: "https://i.pinimg.com/564x/c9/f7/7d/c9f77d4174342a7b2d1a1145ecbe2cb0.jpg",
    category: "Outerwear",
    size: ["S", "M", "L", "XL"],
    color: "Blue"
  },
  {
    name: "Silk Blouse",
    price: 79.99,
    description: "Elegant silk blouse for women",
    imageUrl: "https://i.pinimg.com/564x/71/2d/9e/712d9e3ad5ceab2295e76b8b214a15b8.jpg",
    category: "Tops",
    size: ["S", "M", "L"],
    color: "Ivory"
  }
];

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected for seeding'))
.catch((err) => console.log('MongoDB connection error:', err));

const seedClothingProducts = async () => {
  try {
    await Product.deleteMany({});
    console.log('Deleted existing products');

    const createdProducts = await Product.insertMany(clothingProducts);
    console.log('Added sample clothing products:', createdProducts);

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding clothing products:', error);
    mongoose.connection.close();
  }
};

seedClothingProducts();