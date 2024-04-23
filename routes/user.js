const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontroller');
router.use(express.urlencoded({ extended: false}));
router.get('/',(req,res)=>{
    res.render('login');
})
router.get('/signup',(req,res)=>{
    res.render('signup');
})
router.post('/user/signup',(req,res)=>{
    UserController.signup(req,res);
})
module.exports = router;