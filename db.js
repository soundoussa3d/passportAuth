const mongoose = require('mongoose')

function Dbconnect(){

    const url ="mongodb://localhost:27017/user";
    mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true
        }).then(()=>{
            console.log('Connection Successful');
        }).catch((error)=>{     
            console.log('Something went wrong', error)
        });
}

module.exports = Dbconnect