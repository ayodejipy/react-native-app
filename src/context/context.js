import React,  { useState, createContext,} from 'react';
// import { useNavigation } from '@react-navigation/native';

// import login function from auth service
import { AuthService } from '../services/Auth';

// Define a context for out app
export const userContext = createContext();

// create a component wrap our application and provides us values accessible inside of our app
const UserProvider = ({ children }) => {
   const [user, setUser] = useState('Yooooo!!!');
   const [loading, setLoading ] = useState(true);
   
   const handleLogin = async ({username, password}) => {
      try {
         // use auth service to call login
         let result = await AuthService.handleLogin({
            username: username,
            password: password,
         })
         
      } catch (error) {
         console.log("Error from context");
         throw error
      }
      
   }
   
   const handleLogout = () => {
      
   }
   
   return (
      <userContext.Provider value={{ handleLogin, loading }}>
         { children }
      </userContext.Provider>
   )
}

export default UserProvider;