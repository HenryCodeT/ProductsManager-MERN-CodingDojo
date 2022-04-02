// //// FIELDS ////////////////////////////////////////////////////////
const { application } = require('express');
const ProductController = require('../controllers/product.controller');
console.log("******************* 5-Routes *********************");

// //// ROUTES ////////////////////////////////////////////////////////
module.exports = (app) => {
    // //// CREATE ///////////////////////////////////////////////////
    app.post("/api/product/new",ProductController.createProduct);
    // //// READ /////////////////////////////////////////////////////
    app.get("/api/products",ProductController.findAllProducts);
    app.get("/api/product/:id",ProductController.findProductById);
    // //// UPDATE //////////////////////////////////////////////////
    app.put("/api/:id/product",ProductController.updateProductByID);
    // //// DELETE /////////////////////////////////////////////////
    app.delete("/api/:id/product",ProductController.deleteById);

}
console.log("--------------------- 5-routes ----------------------");