// //// FIELDS ////////////////////////////////////////////////////////
const ProductController = require('../controllers/product.controller');
console.log("******************* 5-Routes *********************");

// //// ROUTES ////////////////////////////////////////////////////////
module.exports = (app) => {
    app.post("/api/product/new",ProductController.createProduct);
}
console.log("--------------------- 5-routes ----------------------");