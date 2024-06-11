const mongoose = require("mongoose");
const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");

exports.addCategory = async (req, res) => {
  const { categoryname } = req.body;

  try {
    const isExists = await Category.findOne({ categoryname: categoryname });
    if (isExists) {
      return res.status(400).send({ message: "category already exists" });
    }
    const category = await Category.create({
      categoryname,
    });
    return res
      .status(200)
      .send({ category, message: "category added succesfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error adding  category", error: error.message });
  }
};

exports.addSubCategory = async (req, res) => {
  const { subcategoryName, category } = req.body;
  try {
    const isExists = await Category.findOne({
      categoryname: category
    });
    if (!isExists) {
      return res.status(400).send({ message: "category dosent exists" });
    }
    const addedcategory = await isExists.subcategoryname.save({
      subcategoryname:subcategoryName
    });

    return res
      .status(200)
      .send({ addedcategory, message: "subcategory added succesfully" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error adding  category", error: error.message });
  }
};
