const mongoose = require('mongoose');


require('dotenv').config();


const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => console.log("Database Connection is Successfull."))
        .catch((e) => {
            console.log("Issue in Database Connection.");
            console.log(e.message);
            process.exit(1);
        });
};


module.exports = dbConnect;