const { default: mongoose } = require("mongoose")

const {NEXT_PUBLIC_user, NEXT_PUBLIC_password} = process.env

const Connect = async ()=>{
    
    try {
        return await mongoose.connect("mongodb+srv://"+NEXT_PUBLIC_user+":"+NEXT_PUBLIC_password+"@cluster0.v8nkfri.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    } catch (error) {
        throw new Error("Database Connection Failed")
    }
}
export default Connect;