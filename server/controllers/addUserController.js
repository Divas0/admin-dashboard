const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.addUser = async (req, res, next) => {
  const { username, role, address, password, email } = req.body;

  try {
    const isExists = await User.findOne({ username: username });
    if (isExists) {
      return res.status(400).send({ message: "user already exists" });
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      role,
      address,
      hashedPassword,
      email,
    });

    return res.status(200).send({ user, message: "user added succesfully" });
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Error adding user!", error: error });
  }
};

exports.changePassword = async (req, res) => {
  const { username, oldPassword, newPassword } = req.body;

  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(400).send({ message: "User doesn't exist" });
    }

    const isPasswordMatched = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordMatched) {
      return res.status(400).send({ message: "Incorrect old password" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    return res.status(200).send({ message: "Password successfully changed" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error changing password", error: error.message });
  }
};

exports.getAllUser=async (req,res)=>{
  try {
    const user=  await User.find({});
    return res.status(200).send({user, message:"users fetched succesfully"})
    
  } catch (error) {
    return res
    .status(500)
    .send({message:'failed to fetch all users', error})
  }
}