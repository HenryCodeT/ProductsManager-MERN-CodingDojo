// //// FIELDS ////////////////////////////////////
const Product = require('../models/product.model');
console.log("************* 4-Controller ****************");

/**
 * Create new product
 * @param {*} request 
 * @param {*} response 
 */
const createProduct = (request, response) => {
    console.log("*** Controller-create-product ***");
    console.log("request-body: ",request.body)
    Product.create(request.body)
        .then(prod => {
            response.statusMessage = "Created success"
            response.status(200).json({prod})
        })
        .catch(err => {
            response.statusMessage = "Something went Wrong"
            response.status(400).json({error:err})
        })
            
}

// **** EXPORTS *****
module.exports = {createProduct}
console.log("-------------------- 4-Controller ----------------------");