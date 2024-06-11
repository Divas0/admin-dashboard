const mongoose=require("mongoose");
const Category = require("./Category");

const SubCategorySchema = new mongoose.Schema(
    {
      subcategoryname: {
        type: String,
        required:true,
        trim: true,
        unique: true,
      },
      
  },{ timestamps: true }
  );
  
  const SubCategory = mongoose.model("SubCategory", SubCategorySchema);
  module.exports = SubCategory;
  