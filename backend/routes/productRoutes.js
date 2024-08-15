const express = require('express');
const router = express.Router();

const {getAllProducts, getProductById} = require('../controller/productControllers');

//@description = GET all products from db
//@route  =  GET api/products
//@access =  public
router.get('/', getAllProducts);

//@description = GET a product by id from db
//@route  =  GET api/products/:id
//@access =  public
router.get('/:id', getProductById);

module.exports = router;