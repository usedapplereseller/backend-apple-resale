const BaseController = require("./baseController");

class ListingsController extends BaseController {
  constructor(model, productModel, conditionModel, userModel) {
    super(model);
    this.productModel = productModel;
    this.conditionModel = conditionModel;
    this.userModel = userModel;
  }

  /** if a method in this extended class AND the base class has the same name, the one in the extended class will run over the base method */
  // Create listing. Requires authentication.
  async insertOne(req, res) {
    const {
      title,
      price,
      description,
      selectedProductId,
      selectedConditionId,
      sellerEmail,
      sellerFirstName,
      sellerLastName,
    } = req.body;
    try {
      // TODO: Get seller email from auth, query Users table for seller ID
      const [seller, created] = await this.userModel.findOrCreate({
        where: {
          email: sellerEmail,
          first_name: sellerFirstName,
          last_name: sellerLastName,
        },
        defaults: {
          phone_num: null,
          password: null,
        },
      });

      // Create new listing
      const newListing = await this.model.create({
        title: title,
        price: price,
        description: description,
        product_id: selectedProductId,
        condition_id: selectedConditionId,
        buyer_id: null,
        seller_id: seller.id || created.id, // TODO: Replace with seller ID of authenticated seller
      });

      // removing this for now as input captured on front end is the product and condition id directly
      // const selectedProduct = await this.productModel.findAll({
      //   where: {
      //     id: selectedProductId,
      //   },
      // });
      // await newListing.setProduct(selectedProduct);
      // const selectedCondition = await this.conditionModel.findAll({
      //   where: {
      //     id: selectedConditionId,
      //   },
      // });
      // await newListing.setCondition(selectedCondition);

      // Respond with new listing
      return res.json(newListing);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: true, msg: err });
    }
  }

  // Retrieve specific listing. No authentication required.
  async getOne(req, res) {
    const { listingId, productId } = req.params;
    try {
      const output = await this.model.findOne({
        where: {
          id: listingId,
          product_id: productId,
        },
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err + "error tag" });
    }
  }

  // Buy specific listing. Requires authentication.
  async buyItem(req, res) {
    const { listing_id } = req.params;
    try {
      const data = await this.model.findByPk(listing_id);

      // TODO: Get buyer email from auth, query Users table for buyer ID
      await data.update({ BuyerId: 1 }); // TODO: Replace with buyer ID of authenticated buyer

      // Respond to acknowledge update
      return res.json(data);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  async getAll(req, res) {
    try {
      const output = await this.model.findAll();
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err + "new" });
    }
  }

  async getListingsByProducts(req, res) {
    const { productId } = req.params;
    try {
      const output = await this.model.findAll({
        where: {
          product_id: productId,
        },
      });
      return res.json(output);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err + "new" });
    }
  }
}

module.exports = ListingsController;
