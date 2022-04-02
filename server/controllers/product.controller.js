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
/**
 * Find All products from db
 * @param {*} request 
 * @param {*} response 
 */
const findAllProducts = (request, response) =>{
    console.log("*** Controller-find-products ***");
    Product.find()
        .then(products => {
            response.statusMessage = "all products found"
            response.status(200).json({products})
        })
        .catch(err => {
            response.statusMessage = "Something went wrong"
            response.status(400).json({error:err})
        })
}
/**
 * Find one product by id
 * @param {*} request 
 * @param {*} response 
 */
const findProductById = (request, response) => {
    console.log("*** controller-find-product ***");
    Product.findById(request.params.id)
        .then(product=>{
            response.statusMessage='Product found'
            response.status(200).json({product})
            })
        .catch(err=>{
            response.statusMessage='Something went wrong'
            response.status(400).json({error:err})
        })
}
/**
 * Update a Product By Id
 * @param {*} request 
 * @param {*} response 
 */
const updateProductByID = (request,response) => {
    console.log("*** Controller-update-product ***");
    Product.findByIdAndUpdate(request.params.id, request.body, {new:true,runValidators:true}) 
        .then(product => {
            response.statusMessage = "Product Updated"
            response.status(200).json({product})
        })
        .catch(err=>{
            response.statusMessage = "Something Went Wrong"
            response.status(400).json({error:err})
        })
} 
/**
 * Delete By ID
 * @param {*} request 
 * @param {*} response 
 */
const deleteById = (request, response) => {
    console.log("*** Controller-delete ***");
    Product.findByIdAndDelete(request.params.id)
        .then(()=> response.status(204).end())
        .catch(err=> response.status(400).end())
}

// **** EXPORTS *****
module.exports = {
    createProduct,
    findAllProducts,
    findProductById,
    updateProductByID,
    deleteById
}
console.log("-------------------- 4-Controller ----------------------");