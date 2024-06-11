const mongoose = require("mongoose");

const SubCategory = require("./SubCategory");
const CategorySchema = new mongoose.Schema(
  {
    categoryname: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    subcategoryname:{
      type:mongoose.Schema.Types.ObjectId,
      ref:SubCategory,
      required:false

    },
},{ timestamps: true }
);

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
