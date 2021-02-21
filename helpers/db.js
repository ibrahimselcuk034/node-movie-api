const mongoose = require('mongoose');



module.exports = () => {
    mongoose.connect('mongodb+srv://isabey:deneme1@cluster0.ayr5g.mongodb.net/moviappdb', { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on("open", () => {console.log("MongoDB: Connected.") });
    mongoose.connection.on("error", () => {console.log("MongoDB: Connection Failed.") });

    //mongoose.Promise = global.Promise; //Bu satırı eklemesek de çalışmaktadır.    
}
