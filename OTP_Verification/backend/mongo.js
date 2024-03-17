const userSchema  = require('mongoose')

const signUp = new userSchema.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },

    otpG: {
        type: String,
        required: true
    }

    
})

const userData = userSchema.model('userData', signUp)

module.exports = userData

 userSchema.connect("mongodb+srv://adarsh0727:urTLM8gDax9vtXcl@otpcluster.dmvz4ix.mongodb.net/?retryWrites=true&w=majority")
 .then(()=>{
    console.log("mongodb connected");
})

.catch((error) => {
    console.error("Failed to connect ", error);
});


