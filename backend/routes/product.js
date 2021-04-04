const express = require ('express')
const router = express.Router();


const { 
     getProducts, 
     newProduct, 
     getSingleProduct,
     updateProduct,
     deleteProduct,
     createProductReview,
     getProductReviews,
     deleteReview

 } = require('../controllers/productController')

 const { isAuthentificatedUser, authorizeRoles } = require('../middlewares/auth');


 router.route('/products').get(getProducts);
 router.route('/product/:id').get(getSingleProduct);

 router.route('/admin/product/new').post(isAuthentificatedUser, authorizeRoles('admin'), newProduct);

 router.route('/admin/product/:id')
                             .put(isAuthentificatedUser, authorizeRoles('admin'), updateProduct)
                            .delete(isAuthentificatedUser, authorizeRoles('admin'), deleteProduct);

    
 router.route('/review').put(isAuthentificatedUser, createProductReview);

 router.route('/reviews').get(isAuthentificatedUser, getProductReviews);

 router.route('/reviews').delete(isAuthentificatedUser, deleteReview);

 

 module.exports = router;