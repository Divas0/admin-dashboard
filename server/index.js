const express = require("express");
const UserAuthRouter = require("./routes/UserAuthRouter");
const dbConnect = require("./lib/dbConnect");
const CategoryRouter=require("./routes/CategoryRouter")

const app = express();
app.use(express.json());
require("dotenv").config();

//routes
app.use("/user", UserAuthRouter);
app.use("/category", CategoryRouter)

dbConnect();
app.listen(4000, () => {
  console.log("http://localhost:4000");
});
