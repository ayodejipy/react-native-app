import { useContext } from "react";
import { userContext } from "../context/context";

export function useAuthContext() {
   const context = useContext(userContext);
   
   if (!context) {
      throw new Error('useAuthContext must be used within an userProvider');
    }
  
   return context;
}