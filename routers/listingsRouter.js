const express = require("express");
const router = express.Router();

class ListingsRouter {
  constructor(controller, auth) {
    this.controller = controller;
    this.auth = auth;
  }
  routes() {
    router.get("/", this.controller.getAll.bind(this.controller));
    // route to get specific listing
    router.get(
      "/:productId/:listingId",
      this.controller.getOne.bind(this.controller)
    );
    // route to get all listings by product i.e. macbook
    router.get(
      "/:productId",
      this.controller.getListingsByProducts.bind(this.controller)
    );

    // route protected with middleware
    router.post(
      "/",
      this.auth,
      this.controller.insertOne.bind(this.controller)
    );

    // route protecteed with middleware
    router.put(
      "/:productId/:listingId",
      this.auth,
      this.controller.buyItem.bind(this.controller)
    );
    return router;
  }
}

module.exports = ListingsRouter;
