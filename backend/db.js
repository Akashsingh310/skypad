const mongoose = require('mongoose');
const mongoURL = "mongodb://0.0.0.0:27017/skypad?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = () =>
{
    mongoose.connect(mongoURL);
    console.log("connected to mongo");
}

module.exports = connectToMongo;