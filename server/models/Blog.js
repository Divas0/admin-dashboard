const mongoose = require("mongoose");
const Category = require("./Category");
const SubCategory = require("./SubCategory");
const User = require("./User");
const Guest = require("./Guest");

const BlogSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
      trim: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    tagline: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    subtitle: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    guest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Guest,
      required: false,
    },
    caption: {
      type: String,
      required: false,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Category,
      required: false,
    },

    picture: {
      type: String,
    },
    publish: {
      type: String,
      enum: ["publish", "unpublish", "draft"],
      required: true,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
