const express = require("express");
const cors = require("cors");
const fooddatas = require("./modals/pizzaModel");
const app = express();
const db = require("./db");
const path = require("path");

app.use(express.json());
 __dirname=path.resolve();
// app.use(cors({ origin: "https://jh3sn9-5173.csb.app" }));
app.use(cors())
// app.use("/api", require("./Routes/Create_user"));
//for send the data on mongoose
// const fooddata = require("./food_data");
// app.post("/food", async (req, res) => {
//   try {
//     const food = await fooddata.create({
//       name: req.body.name,
//       varients: req.body.varients,
//       prices: req.body.prices,
//       category: req.body.category,
//       image: req.body.image,
//       description: req.body.description,
//     });
//     res.json(food);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });



const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute")
const ordersRoute=require('./routes/orderRoute')


app.use("/api/pizzas", pizzasRoute);
app.use("/api/users", userRoute)
app.use("/api/orders/", ordersRoute);

app.use(express.static(path.join(__dirname,"/client/dist")));
app.get("*", (req, res) =>{
  res.sendFile(path.join(__dirname,"client","dist","index.html"))
})

app.get("/", (req, res) => {
  res.send("server running");
});
// app.get("/getpizzas", (req, res) => {
//   fooddata
//     .find()
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  `server running on port ${port}`
});
