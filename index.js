const cors = require("cors");
const express = require("express");
require("dotenv").config();

// importing middlewares
const auth = require("./middlewares/auth");

// importing Routers
const ListingsRouter = require("./routers/listingsRouter");
const UsersRouter = require("./routers/usersRouter");
const PhotosRouter = require("./routers/photosRouter");

// importing Controllers
const ListingsController = require("./controllers/listingsController");
const UsersController = require("./controllers/usersController");
const PhotosController = require("./controllers/photosController");

// importing DB
const db = require("./db/models/index");
const { listing, user, condition, photo, product } = db;

// initializing Controllers -> note the lowercase for the first word
const listingsController = new ListingsController(listing, product, condition);
const usersController = new UsersController(user);
const photosController = new PhotosController(listing);

// inittializing Routers
const listingsRouter = new ListingsRouter(listingsController, auth).routes();
const usersRouter = new UsersRouter(usersController).routes();
const photosRouter = new UsersRouter(photosController).routes();

const PORT = process.env.PORT;
const app = express();

// Enable CORS access to this server
app.use(cors());

// Enable reading JSON request bodies
app.use(express.json());

// enable and use router
app.use("/listings", listingsRouter);
app.use("/users", auth, usersRouter);
app.use("/photos", photosRouter);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
