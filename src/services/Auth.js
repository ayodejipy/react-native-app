// import Fetch API method
import Fetch from "../utils/Fetch"

const handleLogin = async ({username, password}) => {
   // construct data object
   let dataObj = {
      username,
      password,
      grantType: 'password',
      clientId: '',
   }
   
   // return result to endpoint
   // return await Fetch('endpoint', dataObj, isFormData = true);
   // console.log(dataObj);
   return dataObj;
}

export const AuthService = {
   handleLogin
}