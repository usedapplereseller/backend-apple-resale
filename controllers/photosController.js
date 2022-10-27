const BaseController = require("./baseController");

class PhotosController extends BaseController {
  constructor(model, listingModel) {
    super(model);
    this.listingModel = listingModel;
  }

  // To update route to post photo URLs

  // Retrieve photo URLs of specific listing

  async getPhotoUrls(req, res) {
    const { listingId } = req.params;
    try {
      const output = await this.model.findAll({
        where: {
          listing_id: listingId,
        },
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err + "new" });
    }
  }
}

module.exports = PhotosController;
