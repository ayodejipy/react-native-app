import React,  { useState, useEffect, createContext,} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Status } from '../utils/Enums';

// import login function from auth service
import { AuthService } from '../services/Auth';

// Define a context for out app
export const userContext = createContext();

// create a component wrap our application and provides us values accessible inside of our app
const UserProvider = ({ children }) => {
   const [userData, setUser] = useState('');
   const [data, setData ] = useState('')
   const [loading, setLoading ] = useState(true);
   
   const handleLogin = async ({username, password}) => {
      try {
         setLoading(true)
         // use auth service to call login
         let response = await AuthService.handleLogin({
            username: username,
            password: password,
         })
         // console.log({response});
         
         if (response?.status != Status.BAD) {
            let _authData = {
               token: response.data.access_token,
               validate: response.data.refresh_token,
               username: response.data.userName
            }
            // store user data and credentials to state and storage
            AsyncStorage.setItem('@AuthTokens', JSON.stringify(_authData))
            setUser(response.data.userName)
         }         
         setLoading(false)
         return response;
         
      } catch (error) {         
         setLoading(false)
         console.log("Error from context");
         throw error
      }
      
   }
   
   const handleLogout = () => {
      
   }
   
   const loadStorageData = async () => {
      try {
         // try to get data from AsyncStorage
         let data = await AsyncStorage.getItem('@AuthTokens')
         
         if(data) {
            // if there's data, convert to a object then update state
            let _parsedData = JSON.parse(data)
            setData(_parsedData)
         }
      } catch(error) {
         throw error
      } finally { setLoading(false) }
   }
   
   useEffect(() => {
      // load data on app open
      loadStorageData();
   }, [])
   
   return (
      <userContext.Provider value={{ userData, data, handleLogin, loading }}>
         { children }
      </userContext.Provider>
   )
}

export default UserProvider;