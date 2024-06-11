
const mongoose=require('mongoose')

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://divas:mongopass@cluster0.n5kixds.mongodb.net/admindb?retryWrites=true&w=majority&appName=Cluster0",
   
    );
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log("failed to connect to database!");
  }
};

module.exports = dbConnect;
