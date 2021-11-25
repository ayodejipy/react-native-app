// import Fetch API method
import Fetch from "../utils/Fetch"

const handleLogin = async ({ username, password }) => {
   const params = new URLSearchParams()
   // construct data object
   params.append('username', username)
   params.append('password', password)
   params.append('grant_type', 'password')
   params.append('client_id', '7U32R6-OU90V4-7Z4CUC-O25XZK5F-CZI')
   
   // Json object
   // let dataObj = {
   //    username,
   //    password,
   //    "grant_type": 'password',
   //    "client_id": '7U32R6-OU90V4-7Z4CUC-O25XZK5F-CZI',
   // }
   // console.log(params.toString());   
   
   // return result to endpoint
   return await Fetch('/api/token', 'POST', params.toString(), true);
   
}

const handleSignup = async ({name, phone, email, password, referrerEmail}) => {
   // Construct object
   let dataObj = {
      name,
      phone,
      email,
      password,
      referrerEmail,
   }
   // console.log(params.toString());   
   
   // return result to endpoint
   return await Fetch('endpoint', 'POST', dataObj, true);
}

export const AuthService = {
   handleLogin, handleSignup
}