const express=require("express");
const { addCategory, addSubCategory } = require("../controllers/addCategory");
const router=express.Router();

router.post("/addcategory",addCategory);
router.post("/addsubcategory", addSubCategory);

module.exports=router