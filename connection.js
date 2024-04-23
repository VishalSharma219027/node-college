const mongoose = require('mongoose');
const connect = async() => {
    try {
        let connection = await mongoose.connect(`mongodb://localhost:27017/noderd-23-apr`, {useNewUrlParser: true,});
        console.log("Data base connected...");
    } catch(error) {
        console.log(error)
    }
}
module.exports = connect;