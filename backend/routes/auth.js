const express = require ('express');
const router = express.Router();

const { registerUser, 
    loginUSer, 
    forgotPassword, 
    resetPassword,
    getUserProfile,
    updatePassword,
    updateProfile,
    logout,
    allUsers,
    getUserDetails,
    updateUser,
    deleteUser
} = require ('../controllers/authController');

const { isAuthentificatedUser, authorizeRoles} = require('../middlewares/auth')

router.route('/register').post(registerUser);

router.route('/login').post(loginUSer);

router.route('/password/forgot').post(forgotPassword);

router.route('/password/resert/:token').put(resetPassword);

router.route('/logout').get(logout);

router.route('/me').get(isAuthentificatedUser, getUserProfile);

router.route('/password/update').put(isAuthentificatedUser, updatePassword);

router.route('/me/update').put(isAuthentificatedUser, updateProfile);

router.route('/admin/users').get(isAuthentificatedUser, authorizeRoles('admin'), allUsers);

router.route('/admin/user/:id')
            .get(isAuthentificatedUser, authorizeRoles('admin'), getUserDetails)
            .put(isAuthentificatedUser, authorizeRoles('admin'), updateUser)
            .delete(isAuthentificatedUser, authorizeRoles('admin'), deleteUser);

            
module.exports = router;