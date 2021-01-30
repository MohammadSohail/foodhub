const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const itemRoutes = require("./routes/item");
const menuRoutes = require("./routes/menu");
const orderRoutes = require("./routes/order");

env.config();

//mongodb+srv://root:<password>@cluster0.cus53.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.cus53.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Database Connected");
  });

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello Manush AI. Welcome Sohail!");
// });

// app.post("/data", (req, res) => {
//   res.status(200).json({
//     message: req.body,
//   });
// });

app.use("/api", authRoutes);
app.use("/api", itemRoutes);
app.use("/api", menuRoutes);
app.use("/api", orderRoutes);

app.listen(process.env.PORT, () => {
  console.log("App is running at http://127.0.0.1:8000/");
});
