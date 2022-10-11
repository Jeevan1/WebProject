const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const CostumerRecord = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    passwords: {
        type: String,
        required: true
    },
});

CostumerRecord.pre("save", async function(next){
    if(this.isModified("password")){
    console.log(`the current password id ${this.password}`);
    this.password = await bcrypt.hash(this.password, 10);
    console.log(`the current password id ${this.password}`);

    this.passwords = undefined; //conform password lai undefined banauxa.
    }
    next(); 
});

// Now we need to create a colletion.
const Register = new mongoose.model("Register",CostumerRecord);
module.exports = Register;