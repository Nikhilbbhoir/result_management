const { default: mongoose, mongo } = require("mongoose");
import User from "./User";

const ResultSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId,ref:User},
    maths:{type:Number, required:true},
    sst:{type:Number, required:true},
    hindi:{type:Number, required:true},
    sci:{type:Number, required:true},
    eng:{type:Number, required:true},

},{timestamps:true});

export default mongoose.models.Result || mongoose.model("Result",ResultSchema)