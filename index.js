const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const dbConnect = require("./config/dbConnect");
const authRouter = require("./routes/authroutes");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser")

dbConnect();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use("/api/user", authRouter);
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running at PORT = ${PORT}`);
});
