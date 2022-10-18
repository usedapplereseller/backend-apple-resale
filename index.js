const cors = require("cors");
const express = require("express");
require("dotenv").config();

// importing middlewares
const auth = require("./middlewares/auth");

// importing Routers
const ListingsRouter = require("./routers/listingsRouter");
const UsersRouter = require("./routers/usersRouter");

// importing Controllers
const ListingsController = require("./controllers/listingsController");
const UsersController = require("./controllers/usersController");

// importing DB
const db = require("./db/models/index");
const { listing, user, condition, photo, product } = db;

// initializing Controllers -> note the lowercase for the first word
const listingsController = new ListingsController(listing, product, condition);
const usersController = new UsersController(user);

// inittializing Routers
const listingsRouter = new ListingsRouter(listingsController, auth).routes();
const usersRouter = new UsersRouter(usersController).routes();

const PORT = process.env.PORT;
const app = express();

// Enable CORS access to this server
app.use(cors());

// Enable reading JSON request bodies
app.use(express.json());

// enable and use router
app.use("/listings", auth, listingsRouter);
app.use("/users", auth, usersRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
