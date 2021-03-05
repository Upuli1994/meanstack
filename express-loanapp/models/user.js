// var mongoose = require('mongoose');
// var schema = mongoose.Schema;
// var bcrypt= require ('bcrypt');

// var schema = new Schema ({
//     email: {type:String, require:true},
//     username: {type:String, require:true},
//     password: {type:String,require:true},
//     creation_dt: {type:Date,require:true}
// });

// schema.statics.hashPassword = function hashPassword (password){
//     return bcrypt.hashSync(password,10);
// }

// schema.methods.isValid = function (hashedpassword){
//     return bcrypt.compareSync(hashdpassword, this.password);
// }

// module.exports = mongoose.model('User',schema);