const express = require("express");
const router = express.Router();

class PhotosRouter {
  constructor(controller, auth) {
    this.controller = controller;
    this.auth = auth;
  }
  routes() {
    // route to get all photo URLs by listing
    router.get(
      "/:listingId",
      this.controller.getPhotoUrls.bind(this.controller)
    );

    // To update route to write to DB for photo URL
    // router.put(
    //   "/:listingId",
    //   this.auth,
    //   this.controller.addPhoto.bind(this.controller)
    // );
    return router;
  }
}

module.exports = PhotosRouter;
