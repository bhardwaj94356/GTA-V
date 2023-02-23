import axios from "axios";

const accountService = {
    signUp: async (payload) => {
        try{
            await axios.post("http://localhost:8000/signup", payload)
            alert("Successfully Registered")
          }
          catch(err){
            console.log(err)
            alert("Oops! Something Went Wrong")
          }
    }
}


export default accountService