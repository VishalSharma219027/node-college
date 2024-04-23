const User = require('../models/User');
const bcrypt =require('bcrypt');
const saltRounds = 10;
const signup = async(req,res) => {
    try{
        console.log(req.body);
        let user = new User(req.body);
        user.password = bcrypt.hashSync(req.body.password,saltRounds);
        user = await user.save();
        res.send('<h1> User has been created Successfully...')
    }catch(err){

    }
}
module.exports = {signup};