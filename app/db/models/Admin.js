const { default: mongoose, mongo } = require("mongoose");

const AdminSchema = new mongoose.Schema({
    username:{type:String, unique:true, required:true},
    password:{type:String, required:true}
},{timestamps:true});

export default mongoose.models.Admin || mongoose.model("Admin",AdminSchema)